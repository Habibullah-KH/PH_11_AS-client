import MainLayout from '../layout/MainLayout'
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import AddTutorial from '../pages/AddTutorial';
import FindTutors from '../pages/FindTutors';
import SpecificTutor from '../pages/SpecificTutor';
import TutorDetails from '../pages/Tutorial-details/TutorDetails';
import PrivetRoutes from './PrivetRoutes';
import MyBookedTutor from '../pages/MyBookedTutor/MyBookedTutor';
import MyTutorial from '../pages/MyTutorial';
import UpdateMyTutorial from '../pages/UpdateMyTutorial';
import NoDataFound from '../pages/NoDataFound';
import Signup from '../pages/Signup';


  const Routes = createBrowserRouter([
{
    path: "*",
    element: <NoDataFound />,
},

{
  path: "/",
  element: <MainLayout/>,
  children: [
    {
     path: "/",
     element: <Home/>  
    },
    {
     path: "/addTutorials",
     element: <PrivetRoutes><AddTutorial/></PrivetRoutes>   
    },
    {
     path: "/cards",
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
    {
     path: "/myBookedData/:email",
     element: <PrivetRoutes><MyBookedTutor/></PrivetRoutes>,
    },
    {
     path: "/mytutorial/:email",
     element: <PrivetRoutes><MyTutorial/></PrivetRoutes>,
    },
    {
     path: "/UpdateMyTutorial/:id",
     element: <PrivetRoutes><UpdateMyTutorial/></PrivetRoutes>,
    },

  ]
},
{
   path: "/login",
   element: <Login/>  
},
{
 path: "/signup",
 element: <Signup/>  
},
  ]);

  export default Routes;