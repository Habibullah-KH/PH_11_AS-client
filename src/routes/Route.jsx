import MainLayout from '../layout/MainLayout'
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from '../pages/Home';

  const Route = createBrowserRouter([
{
  path: "/",
  element: <MainLayout/>,
  children: [
    {
     path: "/",
     element: <Home/>  
    }
  ]
},
  ]);

  export default Route;