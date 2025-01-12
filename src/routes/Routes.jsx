import MainLayout from '../layout/MainLayout'
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignIn from '../pages/SignIn';
import AddTutorial from '../pages/AddTutorial';

  const Routes = createBrowserRouter([
{
  path: "/",
  element: <MainLayout/>,
  children: [
    {
     path: "/",
     element: <Home/>  
    },
    {
     path: "/login",
     element: <Login/>  
    },
    {
     path: "/signin",
     element: <SignIn/>  
    },
    {
     path: "/addTutorials",
     element: <AddTutorial/>  
    },
  ]
},
  ]);

  export default Routes;