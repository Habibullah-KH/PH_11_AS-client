import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import CardMyBookedTutor from "./CardMyBookedTutor";
import NoDataFound from "../NoDataFound";
import Loding from "../../component/Loding";

const MyBookedTutor = () => {
    const {user, loding, setLoding} = useContext(AuthContext);
    const [userData, setUserData]=useState(null);
    useEffect(()=>{
        const fetchData = async() => {
            try{
                const res = await fetch(`${import.meta.env.VITE_SERVER_url}/myBookedData/${user.email}`);
                const data = await res.json();
                setLoding(false)
                setUserData(data);

            }
            catch(err){
                console.error("Error fetching data from MyBookedTutor:", err);
            }
        }
        fetchData();
    },[setLoding, user.email])
    
    if(loding){
        <Loding/>
    }
    return (
        <>
            <div className="text-center bg-[#ffd36d] py-10 mb-10">
               <h2 className="font-bold text-4xl text-[2.5xl] text-black">
                   Your booked tutorial.
               </h2>
           </div>
           {userData && userData.length > 0 ? (
                userData
                .map((data, i) => <CardMyBookedTutor key={i} data={data} />)
            ) : (
                <NoDataFound />
            )}
        </>
    );
};

export default MyBookedTutor;