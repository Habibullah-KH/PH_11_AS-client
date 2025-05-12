import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";
import AuthContext from "../context/AuthContext";
import FillButton from "./buttons/fillButton";
import SpecialButton from "./buttons/SpecialButton";
 // Import FillButton component

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [visit, setVisit] = useState(false);

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    
    const handleDropdown = () => {
        setClick(!click);
    };

    return (
        <>
            <div className="flex justify-between items-center p-4 backdrop-blur-3xl  w-full">
                {/* Brand Logo and name */}
                <Link to={"/"}>
                    <div className="flex justify-center items-center">
                        <img className="w-5 h-5 mr-1 md:w-10 md:h-10" src="/logo_xl.png" />
                        <h2 className="font-bold md:text-xl">PolyLingua</h2>
                    </div>
                </Link>

                {/* Navigative buttons */}
                <div className={`hidden lg:flex lg:gap-3`}>
                    <NavLink to={"/"}>
                    {({ isActive }) => (
                     <FillButton
                     theme={theme}
                     text="Home"
                      className={isActive ? "bg-[#ffdb66bd] text-black" : ""} />
                     )}
                    </NavLink>

                    <NavLink to={"/addTutorials"}>

                    {({ isActive }) => (
                     <FillButton
                     theme={theme}
                     text="Add Tutorials"
                      className={isActive ? "bg-[#ffdb66bd] text-black" : ""} />
                     )}
                     
                    </NavLink>

                    <NavLink to={"/cards"}>
                    {({ isActive }) => (
                     <FillButton
                     theme={theme}
                     text="Find tutors"
                      className={isActive ? "bg-[#ffdb66bd] text-black" : ""} />
                     )}
                    </NavLink>

                    <NavLink to={"/myTutorial/:email"}>
                    {({ isActive }) => (
                     <FillButton
                     theme={theme}
                     text="My Tutorials"
                      className={isActive ? "bg-[#ffdb66bd] text-black" : ""} />
                     )}
                    </NavLink>

                    <NavLink to={"/myBookedData/:email"}>
                    {({ isActive }) => (
                     <FillButton
                     theme={theme}
                     text="My booked tutors"
                      className={isActive ? "bg-[#ffdb66bd] text-black" : ""} />
                     )}
                    </NavLink>
                </div>
                {/* Navigative buttons END */}

                <div className="text-xl flex items-center gap-5">
                    {/* Theme Toggle Button */}
                    <label className="swap swap-rotate">
                        <input type="checkbox" onClick={toggleTheme} className="theme-controller" value="synthwave" />

                        {/* moon icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current text-blue-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>

                        {/* sun icon */}
                        <svg
                            className="swap-off h-10 w-10 fill-current text-yellow-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>
                    </label>

                    {/*Login equipment and Login info*/}
                    {user && user?.email ? (
                        <div className="flex items-center">
                            <div
                                onClick={() => setVisit(!visit)}
                                className="text-sm items-center gap-2 mx-auto p-3 hidden lg:block"
                            >
                                <img
                                    src={user?.photoURL}
                                    className="h-8 w-8 rounded-full border-2 border-gray-500"
                                />
                            </div>

                            <div
                                className={`
                                duration-700 rounded-lg bg-yellow-200 opacity-90
                                p-5 border-2 border-gray-300 text-sm right-5
                                absolute ${visit ? "top-20" : "-top-60"}
                            `}
                            >
                                <p className="text-lg text-black">{user?.displayName}</p>
                            </div>

                            <NavLink onClick={logOut}>

                            {({ isActive }) => (
                            <SpecialButton
                            theme={theme}
                            text="LogOut"
                            className={isActive ? "bg-[#ffdb66bd] text-black" : ""} />
                            )}
                            </NavLink>
                        </div>
                    ) : (
                        <NavLink to="/login">

                             {({ isActive }) => (
                            <SpecialButton
                            theme={theme}
                            text="Login"
                            className={isActive ? "bg-[#ffdb66bd] text-black" : ""} />
                            )}
                        </NavLink>
                    )}

                    {/*Dropdown btn*/}
                    <div className="lg:hidden" onClick={handleDropdown}>
                        {click ? <FiXSquare /> : <FiMenu />}
                    </div>
                    <div
                        className={`lg:hidden absolute duration-700 backdrop-blur-2xl py-5 bg-opacity-90 y-5
                        ${click ? "top-[5.5rem]" : "-top-[100rem]"}
                        ${theme === 'light' ? 'bg-white' : 'bg-black'}
                        left-0 right-0 shadow-sm z-10 overflow-hidden text-center mx-auto items-center
                        flex flex-col flex-wrap md:flex-row justify-center gap-2 md:p-10 z-999
                        `}
                    >
                        <div className={`bg-white p-2 rounded-xl ${user && user.email ? "block" : "hidden"}`}>
                            <div>
                                <h4 className="font-bold">Account info:</h4>
                            </div>
                            <div className="flex items-center gap-3">
                                <img className="rounded-full w-10 h-10" src={user?.photoURL} />
                                <p className="text-lg text-black">{user?.displayName}</p>
                            </div>
                        </div>

                        <NavLink to={"/"}>
                    {({ isActive }) => (
                     <FillButton
                     theme={theme}
                     text="Home"
                      className={isActive ? "bg-[#ffdb66bd] text-black" : ""} />
                     )}
                    </NavLink>

                    <NavLink to={"/addTutorials"}>

                    {({ isActive }) => (
                     <FillButton
                     theme={theme}
                     text="Add Tutorials"
                      className={isActive ? "bg-[#ffdb66bd] text-black" : ""} />
                     )}
                     
                    </NavLink>

                    <NavLink to={"/cards"}>
                    {({ isActive }) => (
                     <FillButton
                     theme={theme}
                     text="Find tutors"
                      className={isActive ? "bg-[#ffdb66bd] text-black" : ""} />
                     )}
                    </NavLink>

                    <NavLink to={"/myTutorial/:email"}>
                    {({ isActive }) => (
                     <FillButton
                     theme={theme}
                     text="My Tutorials"
                      className={isActive ? "bg-[#ffdb66bd] text-black" : ""} />
                     )}
                    </NavLink>

                    <NavLink to={"/myBookedData/:email"}>
                    {({ isActive }) => (
                     <FillButton
                     theme={theme}
                     text="My booked tutors"
                      className={isActive ? "bg-[#ffdb66bd] text-black" : ""} />
                     )}
                    </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
