import PropTypes from 'prop-types'
import Loding from "../../component/Loding";
import { FaHeart } from "react-icons/fa";

import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { PiSmileySad } from "react-icons/pi";

const TutorDetilCart = ({ data }) => {
    const {user} = useContext(AuthContext)

    if (!data) {
        // console.log("Data is undefined");
        return <Loding />;
    }

    const { name, email, image, description, language, price, review, _id } = data;

//* calect user data
    const userData = {
    tutorId: _id,
    tutorEmail:email,
    name,
    image,
    language,
    price,
    email:user.email,
 }



 const handleBook = () => {
    // console.log(userData);

    if(user?.email === email?.toLowerCase()){
        // console.log('helo');
        return toast.error('Action not permitted')
    }
// console.log(user.email);
// console.log(email);
     //* send data to backend
     fetch(`${import.meta.env.VITE_SERVER_url}/bookData`, {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(userData)
     })
     .then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || 'Something went wrong');
        }
        return res.json();})
     .then(data=>{
        if(data){
            toast.success('Booked success')
            
        }
        else{
            toast.error('Somthing wrong please try again')
        }
     })
     .catch(err => {
        
        toast.error(
            <>
              <PiSmileySad /> {err.message}
            </>
          );
          
     })
 }

    return (
        <>
        <ToastContainer/>
   <div className="text-center bg-[#ffd36d] py-28 mb-10">
       <h2 className="font-bold text-4xl text-[2.5xl] text-black">
           Book your tutorial
       </h2>
   </div>

   <div className="card card-compact bg-base-100 max-w-96 shadow-xl mx-auto my-20 border-2">
       <div className='flex items-start gap-20'>
        <img className='rounded-full w-10 h-10 my-5 mx-3' 
        src={image || '/profile.png'}
    onError={(e) => {
    e.target.onerror = null;
    e.target.src = '/profile.png';
  }}
           />
       </div>
       <div className="card-body">

           <div>
               <div>
              <p
              className={`font-semibold text-xs mt-1 ${
                language === "Spanish"
                  ? "text-yellow-300 dark:text-yellow-600"
                  : language === "English"
                  ? "text-rose-300 dark:text-rose-600"
                  : language === "Japanese"
                  ? "text-orange-300 dark:text-orange-600"
                  : language === "French"
                  ? "text-purple-300 dark:text-purple-600"
                  : language === "Chinese"
                  ? "text-pink-300 dark:text-pink-600"
                  : language === "German"
                  ? "text-blue-300 dark:text-blue-600"
                  : language === "Italian"
                  ? "text-amber-300 dark:text-amber-600"
                  : language === "Arabic"
                  ? "text-green-300 dark:text-green-600"
                  : language === "Portuguese"
                  ? "text-fuchsia-300 dark:text-fuchsia-600"
                  : "text-gray-400 dark:text-gray-300"
              }`}
            >
              {language}
            </p>
               </div>   
           </div>

           <h2 className="card-title">{name}</h2>
           <p>{description}</p>
           
            {/* revew and price */}
            <div className="flex gap-4 text-xl">
            <p className="flex gap-3 items-center"><FaHeart />{review}</p>
            <p>${price}</p>
            </div>

           <div className="card-actions justify-end">
               <button
               onClick={()=>handleBook()}
                className="btn btn-outline">Book Now</button>
           </div>
       </div>
   </div>
        </>
    );
};
TutorDetilCart.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        review: PropTypes.number.isRequired,
        _id: PropTypes.string.isRequired,
      }).isRequired,
  };
export default TutorDetilCart;
