import { json , redirect , useActionData } from 'react-router-dom';
import { AuthLogin } from './AuthLogin'

export function AuthPage(){
    const data = useActionData();
    console.log(data);
    return(
        <>  

            {data && Object.values(data.errors)}
       
            
            <AuthLogin/>
        </>
    )
}

export async function action({ request }) {
    
    
    const data = await request.formData();
    const formData = {
        email : data.get('email'),
        password : data.get('password')
    };

    const response = await fetch('http://localhost:8080/login', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json' 
        },
        body : JSON.stringify(formData)
    })


    if(response.status === 422){
        return response;
    }
    
    if(!response.ok){
        throw json({message : 'error~'} , {status : 500});
    }

    const responData = await response.json();
    const token = responData.token;

    // 로컬에 등록

    localStorage.setItem('token', token);


    return redirect('/')
  }

  

