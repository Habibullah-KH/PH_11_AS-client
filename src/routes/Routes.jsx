import MainLayout from '../layout/MainLayout'
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignIn from '../pages/SignIn';
import AddTutorial from '../pages/AddTutorial';
import FindTutors from '../pages/FindTutors';
import SpecificTutor from '../pages/SpecificTutor';
import TutorDetails from '../pages/Tutorial-details/TutorDetails';
import PrivetRoutes from './PrivetRoutes';


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
    {
     path: "/find-tutors",
     element: <FindTutors/>,
    },
    {
     path: "/find-tutors/:language",
     element: <SpecificTutor/>,
    },
    {
     path: "/tutor/:details",
     element: <PrivetRoutes><TutorDetails/></PrivetRoutes>,
    },

  ]
},
  ]);

  export default Routes;