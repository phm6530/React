import { createBrowserRouter , RouterProvider} from 'react-router-dom';
// import {  } from '@reduxjs/toolkit';

// css
import './App.css';

// Home
import {Home} from './page/Home';

//notice
import {Notice , loader as noticeLoader} from './page/Notice';
import { NoticeDetail , loader as NoticeDetailLoader } from './page/NoticeDetail';

// ui
import { RootLayout } from './component/ui/RootLayout';

// error Component
import { RootErrorPage } from './component/error/RootErrorPage';



const route = createBrowserRouter([
    {
      path : '/',
      element : <RootLayout/>,
      errorElement : <RootErrorPage/>,
      children : [
        {
          index : true,
          element : <Home/>,
        },

        {
          path : 'notice',
          children : [
              { index : true, loader : noticeLoader, element : <Notice/> },
              {
                path : ':item',
                element : <NoticeDetail/>,
                loader : NoticeDetailLoader
              }

          ]

        }

      ]
    }
])

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>

  );
}

export default App;
