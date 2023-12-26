import { Outlet , useNavigate , useLoaderData , useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenTimeOut } from '../util/auth';


function RootLayout() {
  const submit = useSubmit();
  const token = useLoaderData();
  const returnPage = useNavigate();
  
  console.log(token);

  // 토큰 만료
  useEffect(()=>{
    const tokenTimer = getTokenTimeOut();
    
    if(!token){
      return;
    }
    
    if(token === 'EXPIRED'){
      submit(null, {action : 'logout' , method : 'POST'});
      returnPage('/auth?mode=login');
      return;
    }

    const tokenTimeout = setTimeout(()=>{
      submit(null, {action : 'logout' , method : 'POST'});
      returnPage('/auth?mode=login');
    }, tokenTimer);

    return() =>{
      clearTimeout(tokenTimeout)
    }
  },[token, submit , returnPage]);

  
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
