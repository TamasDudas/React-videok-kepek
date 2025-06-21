import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './Pages/Home.jsx';
import Pictures from './Pages/Pictures.jsx';
import Videos from './Pages/Videos.jsx';
import Account from './Pages/Account.jsx';
import NotFound from './NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/pictures',
        element: <Pictures />,
      },
      {
        path: '/videos',
        element: <Videos />,
      },
      {
        path: '/account',
        element: <Account />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
