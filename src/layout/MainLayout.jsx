import { Outlet } from "react-router-dom";
import Navbar from "../component/NavBar";
import Footer from "../component/Footer";

const MainLayout = () => {
    return (
        <div>
     {/* Navbar */}
     <Navbar/>
      {/* Outlet */}
      <div className='min-h-[calc(100vh-386px)]'>
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
        </div>
    );
};

export default MainLayout;