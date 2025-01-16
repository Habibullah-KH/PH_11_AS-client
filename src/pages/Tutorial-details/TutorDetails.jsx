import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TutorDetilCart from "./TutorDetilCart";
import Loding from "../../component/Loding";

const TutorDetails = () => {
    const {details} = useParams();
    const [cart, setCart] = useState(null);

useEffect(()=>{
const fetchData = async() =>{
        try{
           const res = await fetch(`${import.meta.env.VITE_SERVER_url}/tutor/${details}`);
           const data = await res.json();
           setCart(data);
           console.log(data);
          }
          catch (err) {
            console.error("Error fetching data from tutor route:", err);
          }
    }
    fetchData();
},[details])
    return (
        <>
        <div>
        {cart ? (
            <TutorDetilCart data={cart[0]} />
        ) : (
            <Loding/>
        )}    
        </div>
        </>
    );
};

export default TutorDetails;