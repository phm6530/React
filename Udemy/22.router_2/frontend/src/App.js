import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Homepage from './pages/Homepage';
import Eventpage ,{ Loader as eventLoader }from './pages/eventPage';
import ErrorPage from './pages/ErrorPage';
import EventDetailPage , { Loader as eventDetailLoader }from './pages/EventDetailPage';
import NewEventPage , { action as NewEventAction  } from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import EventRoot from './pages/EventRoot';
import Error from './components/Error';


// 과제 / 연습문제
// 다섯 개의 새로운 (더미) 페이지 컴포넌트 추가하기

// 각 페이지 컴포넌트는 간단한 <h1> 요소를 포함할 수 있습니다.
// HomePage
// EventsPage
// EventDetailPage
// NewEventPage
// EditEventPage
// 이 다섯 페이지에 대한 라우팅 및 라우트 정의 추가하기

// / => HomePage
// /events => EventsPage
// /events/<some-id> => EventDetailPage
// /events/new => NewEventPage
// /events/<some-id>/edit => EditEventPage
// 모든 페이지 컴포넌트 위에 <MainNavigation> 컴포넌트를 추가하는 루트 레이아웃 추가하기

// MainNavigation에 정상적으로 작동하는 링크들 추가하기

// MainNavigation의 링크들이 활성화될 때 "active" 클래스를 받도록 보장하기

// EventsPage에 더미 이벤트 목록 출력하기

// 목록의 각 항목에는 해당 EventDetailPage로의 링크를 포함해야 합니다.
// EventDetailPage에서 선택된 이벤트의 ID 출력하기

// 보너스: /events... 페이지 컴포넌트 위에 <EventNavigation> 컴포넌트를 추가하는 또 다른 (중첩된) 레이아웃 라우트 추가하기

const router = createBrowserRouter([
  {
    path : '/' ,
    element: <RootLayout/>,
    errorElement : <ErrorPage />, //에러 페이지 처리
    children : [
        { index: true , element : <Homepage/>}, // root

        { path:'event' , 
            element : <EventRoot/> , 
            errorElement : <Error/>,

            children:[
              {  index: true ,  loader : eventLoader, element : <Eventpage/> }, // event New Write

              { 
                path:':item' , 
                id : 'event-loader',
                loader : eventDetailLoader, 

                children : [
                  { index : true , element : <EventDetailPage/> },
                  { path:'edit' , element : <EditEventPage/>
                } 

              ]
            }, 
            { path:'new' , element : <NewEventPage/> , action : NewEventAction}, // event New Write
            
            ]
        }, // event
        
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}
export default App;
