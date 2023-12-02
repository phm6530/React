import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid'; 
import Form from './component/form/Form';
import ListWrap from './component/resultList/ListWrap';

function App() {

  const [userData , setUserData ] = useState([]);
  
  const UserData = (data)=>{
    // 새 배열 생성 , Key 값 라이브러리로 반영
    setUserData(prev => ([...prev , {data , id : uuidv4()}]));
  }

  const UserDelete = (data) =>{
    setUserData(prev => prev.filter((e)=>{
        return e.id !== data
    }));
  }

  // useEffect(()=>{
  //   console.log('UserData : ',userData);
  // },[userData]);
  
  return (
    <>

      <div className='Wrap'>
        <Form data={UserData}/>
        <ListWrap userData={userData} target={UserDelete}/>
      </div>

    </>
  );

}

export default App;
