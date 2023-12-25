import { json, useNavigate , useRouteLoaderData , redirect} from 'react-router-dom';
import EventItem from '../components/EventItem';

export default function EventDetailPage(){
    const data = useRouteLoaderData('event-loader');
    console.log(data);
    const back = useNavigate();
    
    return(
        <>
            <EventItem event={data.event}/>
            <h1>Detail Page</h1>
            <button onClick={()=>back(-1)}>back</button>
        </>
    )
}

//loader는 params, request , location ,navigation을 가지고 있음

//params: URL의 동적 세그먼트에 해당하는 파라미터들이 포함된 객체입니다. 
//예를 들어, 라우트 경로가 /users/:userId라면, params 객체는 
//{ userId: '...' } 형태로 해당 userId 값을 포함합니다.//

//request: 현재 요청에 관한 정보를 담고 있는 Request 객체입니다. 
//이 객체는 Fetch API의 Request 인터페이스를 기반으로 하며, 요청의 URL, 헤더 등의 정보를 포함합니다.//

//location: 현재 라우트의 위치에 대한 정보를 담고 있는 객체입니다. 
//이 객체는 현재 URL의 경로, 쿼리 문자열, 상태 등을 포함합니다.//

//navigation: 현재 라우트의 내비게이션 상태에 대한 정보를 제공하는 객체입니다. 
//이를 통해 리디렉션을 시작하거나 취소하는 등의 내비게이션 제어가 가능합니다.

export async function Loader({request, params }){
    const id = params.item;
    const response = await fetch(`http://localhost:8080/events/${id}`);
    return response;
}

export async function action({params , request}){
    const id = params.item;
    const response = await fetch(`http://localhost:8080/events/${id}`,{
        method : request.method
    });
    
    if(!response.ok){
        throw json({message : '삭제 안됨'}, {status: 500})
    }
    return redirect('..');
}