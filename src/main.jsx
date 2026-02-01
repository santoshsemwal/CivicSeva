import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './Home.jsx';
import About from './Page/About.jsx';
import Admin from './Page/Admin.jsx';
import User from './Page/User.jsx';
import Department from './Page/Department.jsx';
import Login from './Page/Login.jsx';
import Complaintpage from './Page/Complaint.jsx'; 

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/About', //
    element: <About />
  },
  {
    path: '/admin-login',
    element: <Admin />
  },
  {
    path: '/user-login',
    element: <User />
  },
  {
    path: '/department',
    element: <Department />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/Complaintpage',
    element: <Complaintpage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
