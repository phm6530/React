// react-router-dom 라이브러리에서 필요한 함수와 컴포넌트를 임포트합니다.
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { TransitionGroup , CSSTransition } from 'react-transition-group';
// Home 컴포넌트를 임포트합니다. 이 컴포넌트는 '/' 경로에서 렌더링됩니다.
import Home from './pages/Home';
import Products from './pages/Products';
import RootLayout from './pages/RootLayout';
import Error from './pages/Error';
import ProductsDetail from './pages/ProductDetail';


// 라우터를 생성합니다. 이 라우터는 애플리케이션의 라우팅 규칙을 정의합니다.
//라우터 연결 방법1
const router = createBrowserRouter([
  // '/' 경로에 대한 라우트를 정의합니다. 이 경로에 접근하면 Home 컴포넌트가 렌더링됩니다.
  { path : '/' , 
    element : <RootLayout/>,
    errorElement: <Error/> ,
    children : [
      { index:true, element: <Home/> } ,
      { path: 'products',  element: <Products/>} ,
      { path: 'products/:productId',  element: <ProductsDetail/>} 
    ]
  },
  
  // 여기에 추가 라우트를 정의할 수 있습니다.
  // 예: { path: '/about', element: <About/> }
]);


//라우터 연결 방법2
// const routeDefinitions = createRoutesFromElements(
//   <Router>
//       <Router path='/' element={<Home/>}/>
//   </Router>
// );

// App 컴포넌트 정의. 이 컴포넌트는 라우터 프로바이더를 사용하여 라우팅을 관리합니다.
function App() {
  // RouterProvider 컴포넌트를 사용하여 위에서 정의한 라우터를 애플리케이션에 적용합니다.
  
  return <RouterProvider router={router}/>;
}

// App 컴포넌트를 내보냅니다.
export default App;