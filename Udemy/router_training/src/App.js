import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Home
import HomePage from './component/HomePage';

// OnePage
import OnePage from './component/OnePage';
import RootLayout from './Rootfile/RootLayout';

// Product 
import Products, { loader as ProductsLoader } from './component/Products';
import ProductItem , { loader as ProductsItem}from './component/ProductItem';
import ProductEdit from './component/ProductEdit';

// Error
import Error from './component/Error/Error';


// Router Animation 
import { useRoutes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


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
          { path : ':item' ,
            id : 'Products-Loader',
            loader: ProductsItem ,
            children : [
              { index:true,  element : <ProductItem/>}, // 상위로 분류 
              { path : 'edit',  element : <ProductEdit/> } // 하위로 분류
            ] 
          }

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