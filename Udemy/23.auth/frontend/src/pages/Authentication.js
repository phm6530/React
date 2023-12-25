import { json , redirect } from 'react-router-dom';
import AuthForm  from '../components/AuthForm';

function AuthenticationPage() {

  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}){
      const seachParam =  new URL(request.url).searchParams;
      // const seachParam =  new URLSearchParams(request.url);
      const mode = seachParam.get('mode') || 'login';
      // console.log(mode);

      if(mode !== 'login' && mode !== 'signup'){
        // throw new Error('잘못된 경로');
        throw json({message : '잘못된 접근'} , {status : 422});
      }

      // console.log('request : ',request);
      const data = await request.formData();

      const formData = {
        email : data.get('email'),
        password : data.get('password')
      };

      const response = await fetch(`http://localhost:8080/${mode}` , {
          method : 'POST',
          headers : {
              'Content-Type' : 'application/json' 
          },
          body : JSON.stringify(formData)
      })
      
      //지연시키기
      
      await new Promise(resolve => setTimeout(resolve , 1500))

      

      if(response.status === 422){
        return response;
      }


      if(!response.ok){
        throw json({message : 'error!!'} , {status : 500});
      }

      //토큰 받기
      const resData = await response.json();
      const token = resData.token
      
      // 토큰은 쿠키, 로컬스토리지 , 세션 으로 저장이가능

      // 로컬스토리지로 저장
      localStorage.setItem('token', token);
      

      return redirect('/');
      
}