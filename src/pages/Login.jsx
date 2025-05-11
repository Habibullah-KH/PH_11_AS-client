import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [showHide, setShowHide]=useState(false);
  const {logInUser, setUser, createUserByGoogl} = useContext(AuthContext);
const location = useLocation();
const naviget = useNavigate();



  const handleLogin = (e) => { 
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');
    // console.log(email);

    logInUser(email, password)
    .then((userData)=>{

      if(userData.user){
        Swal.fire({
          title: 'Login success',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Close'
        })
      }

      const data = userData.user
      setUser(data)
      naviget(location?.state ? location.state : "/");
      // console.log(data);
    })

    .catch((err)=>{
      const errorCode = err.code;
      Swal.fire({
        title: errorCode,
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Close'
      })
      // console.log(errorCode);
    })
   };

     //*  create data by google account
     const continueGoogle = () => {
      createUserByGoogl()
        .then((result) => {
          const userData = result.user;
    
          if (userData) {
            Swal.fire({
              title: "Signup success",
              text: "You have successfully signed in with Google",
              icon: "success",
              confirmButtonText: "Close",
            }).then(() => {
              
              setUser(userData);
              naviget(location?.state?.from?.pathname || "/");
            });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          Swal.fire({
            title: "Error",
            text: `Failed to sign in: ${errorCode}`,
            icon: "error",
            confirmButtonText: "Close",
          });
        });
    };
    
    

    return (
        <>
  <div className="hero min-h-screen ">
  <div className="
  relative hero-content flex-col lg:flex-row border-2 rounded-3xl shadow-xl  bg-[#ffd36d]">

<div
 className="absolute inset-0 bg-[url('/TPdoodle.png')] bg-center opacity-40 w-full pointer-events-none rounded-2xl"
 aria-hidden="true"
></div>

    <div className="text-center lg:text-left  backdrop-blur-sm shadow-2xl rounded-2xl p-5 text-black">
      <h1 className="text-2xl md:text-5xl font-bold w-full ">Log in now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 border-2 ">


{/* input start */}
      <form onSubmit={handleLogin}
       className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input
          name="email"
           type="email"
            placeholder="email"
             className="input input-bordered"
              required />
              
        </div>
        {/* input end */}

{/* input start */}
        <div className="form-control relative">

        <label className="label ">
            <span className="label-text">Password</span>
            <span className="absolute right-0 top-12 p-1 rounded-xl cursor-pointer" onClick={()=>setShowHide(!showHide)}>{showHide?<AiTwotoneEye />:<AiTwotoneEyeInvisible />}</span>
          </label>

          <input
          name="password"
           type={showHide?'text':'password'}
            placeholder="password"
             className="input input-bordered"
              required />


          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>

          <p>Don&apos;t have an account! 
            <NavLink to="/signup" className="list mx-2">Signup now</NavLink>
          </p>
        </div>
{/* input end */}


        <div className="form-control mt-6">
          <button className="btn border-2 shadow-xl">Login in</button>
        </div>

        <div className="form-control mt-6">
          <button onClick={continueGoogle} className="btn border-2 hover:border-red-400 shadow-xl"> <FcGoogle/> Continue with google</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;