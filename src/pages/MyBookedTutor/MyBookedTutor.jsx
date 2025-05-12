import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import CardMyBookedTutor from "./CardMyBookedTutor";
import NoDataFound from "../NoDataFound";
import Loding from "../../component/Loding";
import TextBanner from "../../component/TextBanner";

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
            <div className="text-center">
               <TextBanner textPrime="Your booked tutorial."/>
           </div>
           <div className="flex flex-wrap gap-4 justify-center my-10"> 
           {userData && userData.length > 0 ? (
                userData
                .map((data, i) => <CardMyBookedTutor key={i} data={data} />)
            ) : (
                <NoDataFound />
            )}
            </div>
        </>
    );
};

export default MyBookedTutor;