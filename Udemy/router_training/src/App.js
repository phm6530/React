import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Home
import HomePage from './component/HomePage';

// OnePage
import OnePage from './component/OnePage';
import RootLayout from './Rootfile/RootLayout';

// Product 
import Products, { loader as ProductsLoader } from './component/Products';
import ProductItem , { loader as ProductsItem , action as productsDelete}from './component/ProductItem';
import ProductEdit from './component/ProductEdit';
import ProductNew from './component/ProductNew';

import {action as multiAction } from './component/ProductForm';

// Error
import Error from './component/Error/Error';


// Router Animation 
// import { useRoutes, useLocation } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';



const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> }, // home
      
      { path: 'page1', element: <OnePage /> },
      { 
        path: 'products',
        children: [

          { index: true, element: <Products />, loader: ProductsLoader },

          { path : ':item' , //:item 같은걸 Url 파라미터라고 칭함
            id : 'Products-Loader',
            loader: ProductsItem ,
            children : [

              { 
                index: true ,  
                element : <ProductItem/>,
                action : productsDelete
              }, // 상위로 분류 삭제버튼 추가 ok

              { 
                path : 'edit',  
                element : 
                <ProductEdit/> ,
                action : multiAction
                // action : multiAction
              } // 하위로 분류 수정하기 로직 추가
            ] 
          },

          { 
            path : 'new',  
            element : <ProductNew/> , 
            action : multiAction
          } // 하위로 분류
        ]
      }
    ]
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;