import { useContext, useEffect, useState } from "react";
import Loding from "../component/Loding";
import NoDataFound from "./NoDataFound";
import AuthContext from "../context/AuthContext";
import CardMyTutorial from "./CardMyTutorial";

const MyTutorial = () => {
    const {user, loding, setLoding} = useContext(AuthContext);
    const [userData, setUserData]=useState(null);
    useEffect(()=>{
        const fetchData = async() => {
            try{
                const res = await fetch(`${import.meta.env.VITE_SERVER_url}/mytutorial/${user.email}`);
                const data = await res.json();
                setLoding(false)
                setUserData(data);

            }
            catch(err){
                console.error("Error fetching data from MyBookedTutor:", err);
            }
        }
        fetchData();
    },[user.email])
    
    if(loding){
        <Loding/>
    }
    return (
        <>
            <div className="text-center bg-[#fdbc78] py-10 mb-10">
               <h2 className="font-bold text-4xl text-[2.5xl] text-black">
                   Your tutorials.
               </h2>
           </div>
           {userData && userData.length > 0 ? (
                userData
                .map((data, i) => <CardMyTutorial key={i} data={data}></CardMyTutorial>)
            ) : (
                <NoDataFound />
            )}
        </>
    );
};

export default MyTutorial;