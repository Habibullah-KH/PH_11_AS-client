import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import AuthContext from "../context/AuthContext";

const SignIn = () => {
   const [showHide, setShowHide]=useState(false);
   const naviget = useNavigate();


   //* Firebase authentication
   const {createUser, setUser, createUserByGoogl, updateUser} = useContext(AuthContext);      
     const handleSubmit = (e) => {
         e.preventDefault();
         const form = new FormData(e.target);
         const name = form.get('name');
         const email = form.get('email');
         const password = form.get('password');
         const image = form.get('img');
 
         const ValidPass = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
 
         //? password validation check
         if(!ValidPass.test(password)){
           Swal.fire({
             title: 'Your password must have one uppercase and lowercase letters',
             icon: 'error',
             confirmButtonText: 'Close'
           })
           return;
         }
         if(password.length < 6){
           Swal.fire({
             title: 'Your password must have 6 characters',
             icon: 'error',
             confirmButtonText: 'Close'
           })
           return;
         }
 
         //* send data to auth
         createUser(email, password)
         .then((userData)=>{
           if(userData.user){
             Swal.fire({
               title: 'Signin success',
               text: 'Do you want to continue',
               icon: 'success',
               confirmButtonText: 'Close'
             })
             updateUser({displayName:name, photoURL:image})
           }
           const data = userData.user
           setUser(data)
           // console.log(data);
           naviget(location?.state ? location.state : "/");
         })
         .catch((err)=>{
           const errorCode = err.code;
           Swal.fire({
             title: errorCode,
             text: 'Do you want to continue',
             icon: 'error',
             confirmButtonText: 'Close'
           })
           console.log(errorCode, err);
         })
        }
        
  //*  create data by google account
     const continueGoogle = () => {
      createUserByGoogl()
        .then((result) => {
          const userData = result.user;
    
          if (userData) {
            Swal.fire({
              title: "Signin success",
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
 <div className="hero min-h-screen">

   <div 
   className="
   relative hero-content flex-col lg:flex-row-reverse bg-[#ffd36d]
   border-2 rounded-3xl shadow-xl ">

   <div
 className="absolute inset-0 bg-[url('/TPdoodle.png')] bg-center opacity-35 w-full pointer-events-none rounded-2xl"
 aria-hidden="true"
></div>


     <div className="text-center lg:text-left shadow-2xl rounded-2xl p-5 backdrop-blur-sm text-black">
       <h1 className="text-2xl md:text-5xl font-bold w-full ">Sign in now!</h1>
     </div>
 
     <div className="card bg-base-100 w-full max-w-sm shrink-0 border-2  pr-8">
 
         {/* form start */}
       <form onSubmit={handleSubmit}
        className="card-body ">
 
         
         <div className="form-control">
 
           <label className="label">
             <span className="label-text">Name</span>
           </label>
 
           {/* Name input */}
           <input
            name="name"
            type="text" 
            placeholder="name"
            className="input input-bordered" required />
         </div>
 {/* name input end */}
 
         <div className="form-control">
 
           <label className="label">
             <span className="label-text">Picture</span>
           </label>
 
 
           {/* Image input */}
           <input
            name="img" 
            type="text" 
            placeholder="picture url" 
            className="input input-bordered" required />
         </div>
 
 
         <div className="form-control">
 
           <label className="label">
             <span className="label-text">Email</span>
           </label>
 
           {/* Email input */}
           <input 
           name="email" 
           type="email" 
           placeholder="email" 
           className="input input-bordered" required />
         </div>
 
 
         <div className="form-control relative">
 
           <label className="label ">
             <span className="label-text">Password</span>
             <span className="absolute right-0 top-12 p-1 rounded-xl cursor-pointer" onClick={()=>setShowHide(!showHide)}>{showHide?<AiTwotoneEye />:<AiTwotoneEyeInvisible />}</span>
           </label>
 
 
           {/* Password input */}
           <input 
           name="password" 
           type={showHide?'text':'password'} 
           placeholder="password" 
           className="input input-bordered" required />
 
           <p className="py-4">Alrady have an account! 
             <NavLink to="/login" className="list mx-2">Login now</NavLink>
           </p>
         </div>
 
         <div className="form-control mt-6">
           <button className="btn border-2 shadow-xl">Sign in</button>
         </div>
 
 
         <div className="form-control mt-6">
           <button onClick={continueGoogle} className="btn border-2 hover:border-red-400 shadow-xl"> <FcGoogle/> Sign in with google</button>
         </div>
 
       </form>
     </div>
   </div>
 </div>
         </>
     );
 };

export default SignIn;