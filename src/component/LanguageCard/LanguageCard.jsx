import { useEffect, useState } from "react";
import Card from "./Card";

const LanguageCard = () => {
const [language, setLanguage]=useState();
useEffect(()=>{
fetch('/LanguageInfo.json')
.then(res=>res.json())
.then(data=>setLanguage(data))
.catch(err=>console.log('Error from language json file', err))
},[])

    return (
        <>
       <div 
       className="py-5 px-2 flex flex-wrap order-first gap-3 justify-center" >{/* parent container */}

           {
               language?.map((Data, i) => <Card key={i} data={Data}></Card>)
           }

    </div>
        </>
    );
};

export default LanguageCard;