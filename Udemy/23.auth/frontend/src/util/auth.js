import { redirect } from 'react-router-dom';



export function getTokenTimeOut(){
    const expirationDate = localStorage.getItem('expiration');
    if(expirationDate){
        const exDate = new Date(expirationDate);
        const now = new Date();
        return exDate.getTime() - now.getTime();
    }
    else{
        return null;
    }
}




export function getAuthToken(){
    const token = localStorage.getItem('token');
    
    const tokenTimer = getTokenTimeOut();
    console.log(tokenTimer);

    if(tokenTimer < 0 ){
        return 'EXPIRED';
    }

    return token;
}


export function tokenLoader(){
    return getAuthToken();
}

// 라우터 보호
export function checkAuthLoader(){
    const token = getAuthToken();
    if(!token){
        return redirect('/auth');
    }

    return null;
}