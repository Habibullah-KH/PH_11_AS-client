import PropTypes from 'prop-types'
import Loding from "../../component/Loding";
import { IoIosStar } from 'react-icons/io';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { PiSmileySad } from "react-icons/pi";

const TutorDetilCart = ({ data }) => {
    const {user} = useContext(AuthContext)

    if (!data) {
        console.log("Data is undefined");
        return <Loding />;
    }

    const { name, email, image, description, language, price, review, _id } = data;

//* calect user data
    const userData = {
    tutorId: _id,
    tutorEmail:email,
    Image:image,
    language:language,
    Pirce:price,
    email:user,
 }



 const handleBook = () => {
    console.log(userData);
     //* send data to backend
     fetch(`${import.meta.env.VITE_SERVER_url}/bookData`, {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(userData)
     })
     .then(res=>res.json())
     .then(data=>{
        if(data){
            toast.success('Booked success')
            
        }
        else{
            toast.error('Somthing wrong please try again')
        }
     })
     .catch(err => {
        console.error(`error from userData route:`,err),
        toast.error(<PiSmileySad />,`userData error:${err.massage}`)
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
       <div className='flex justify-around gap-20 pt-7'>
           <img
           className='rounded-xl'
               src={image}
               alt='profile'
           />

           <div>

               
               {/* revew and price */}
               <div className="flex gap-4 text-xl">
               <p className="flex items-center"><IoIosStar />{review}</p>
               <p>${price}</p>
               </div>
               <div>
                <p 
                   className={`
                   badge badge-secondary text-black
                   ${language === 'English'? 'bg-[#fe938c]' : ''}
                   ${language === 'Spanish'? 'bg-yellow-400' : ''}
                   ${language === 'Japanese'? 'bg-orange-400' : ''}
                   ${language === 'French'? 'bg-[#e4c1f9]' : ''}
                   ${language === 'Chinese'? 'bg-[#fec5bb]' : ''}
                   ${language === 'German'? 'bg-[#a9def9]' : ''}
                   ${language === 'Italian'? 'bg-[#fec89a]' : ''}
                   ${language === 'Arabic'? 'bg-[#99d98c]' : ''}
                   ${language === 'Portuguese'? 'bg-[#f49cbb]' : ''}
                   `}>
               
                   {language}
               </p>
               </div>
               
           </div>
       </div>
       <div className="card-body">
           <h2 className="card-title">{name}</h2>
           <p>{description}</p>
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
