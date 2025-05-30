import { useContext, useEffect, useState } from "react";
import Loding from "../component/Loding";
import NoDataFound from "./NoDataFound";
import AuthContext from "../context/AuthContext";
import CardMyTutorial from "./CardMyTutorial";
// import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import TextBanner from "../component/TextBanner";

const MyTutorial = () => {
    const {user, loding, setLoding} = useContext(AuthContext);
    const [userData, setUserData]=useState(null);
    const axiosSecure = useAxiosSecure();
    useEffect(()=>{
        // const fetchData = async() => {
            try{
                // const res = await fetch(`${import.meta.env.VITE_SERVER_url}/mytutorial/${user.email}`);
                // const data = await res.json();
                // setUserData(data)

                // axios.get(`${import.meta.env.VITE_SERVER_url}/mytutorial/${user.email}`,{
                //     withCredentials: true
                // })
                // .then(res=>setUserData(res.data))

                axiosSecure.get(`${import.meta.env.VITE_SERVER_url}/mytutorial/${user.email}`)
                .then(res=>setUserData(res.data))
                setLoding(false)
                // setUserData(data);

            }
            catch(err){
                console.error("Error fetching data from MyBookedTutor:", err);
            }
        // }
        // fetchData();
    },[])
    
    if(loding){
        <Loding/>
    }
    return (
  <>
      <div className="text-center">
         <TextBanner textPrime="Your tutorials."/>
     </div>

     <div className="flex flex-wrap justify-center gap-2 items-center my-20">
     {userData && userData.length > 0 ? (
          userData
          .map((data, i) => <CardMyTutorial key={i} data={data}></CardMyTutorial>)
      ) : (
          <NoDataFound />
      )}
     </div>
  </>
    );
};

export default MyTutorial;