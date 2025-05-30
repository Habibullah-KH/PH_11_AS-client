import { useEffect, useState } from "react";
import TutorialCards from "../component/TutorialCards";
import Loding from "../component/Loding";
import { useParams } from "react-router-dom";
import NoDataFound from "./NoDataFound";

const SpecificTutor = () => {
    const [card, setCard]=useState();
    const { language } = useParams();
useEffect(()=>{


    const fetchData = async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_SERVER_url}/find-tutors/${
              language || ""}`
          );
          const data = await response.json();
          setCard(data);
        //   console.log(card);

        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };
    
    fetchData();
}, [language]);

if (!card) {
  return <Loding />;
}        

if(card.length == 0){
 return <NoDataFound/>
}
    return (
        <>  
<div className="text-center bg-[#ffd36d] py-28 my-10 ">
        <h2 className="font-bold text-4xl text-[2.5xl] text-black ">
        Online <span className="text-[3.5rem] text_strok_i">{language}</span> tutors & teachers for private lessons
        </h2>
        <p className="text-black">
        Learn faster with your best language tutor.
        </p>
</div>

<div className="flex flex-wrap gap-4 justify-center my-20">  
     {
     card?card.map((data, i) => <TutorialCards key={i} data={data}></TutorialCards>):<Loding/>
     }
</div>

        </>
    );
};

export default SpecificTutor;