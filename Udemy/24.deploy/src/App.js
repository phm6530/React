import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import HomePage from './pages/Home';
import PostPage, { loader as postLoader } from './pages/Post';
import RootLayout from './pages/Root';

// const BlogPage 

// import BlogPage, { loader as postsLoader } from './pages/Blog';

const BlogPage = lazy(() => import('./pages/Blog'));


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'posts',
        children: [
          { index: true, element: <BlogPage />, loader: () => import('./pages/Blog').then(module => module.loader()) },
          { path: ':id', element: <PostPage />, loader: postLoader },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
