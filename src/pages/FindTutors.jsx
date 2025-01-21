import { useEffect, useState } from "react";
import TutorialCards from "../component/TutorialCards";
import Loding from "../component/Loding";

const FindTutors = () => {
    const [card, setCard]=useState();
    const [search, setSearch] = useState('');
useEffect(()=>{
    const fetchData = async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_SERVER_url}/cards?search=${search}`
          );
          const data = await response.json();
          setCard(data);
        } catch (err) {
          console.error("Error fetching data:", err);
        }
      };
  
      fetchData();
    }, [search, ]);

console.log(search);
  
    return (
        <>  
<div className="text-center bg-[#ffd36d] py-28 mb-10">
        <h2 className="font-bold text-4xl text-[2.5xl] text-black">
        Online tutors & teachers for private lessons
        </h2>
        <p className="text-black">
        Learn faster with your best language tutor.
        </p>
</div>

<div className="flex items-center gap-4 pl-2 pb-10 border-b-2 border-dashed">

<div className="text-xl">
  <p>Find your tutuor</p>
</div>

<label className="input input-bordered flex items-center gap-2">
  <input 
   onChange={e=>setSearch(e.target.value)}
   type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
</div>

<div className="flex flex-wrap gap-4 justify-center my-10">  
     {
     card && card.length > 0 ? (card.map((data, i) => <TutorialCards key={i} data={data}></TutorialCards>))
     :<Loding/>
     }
</div>

        </>
    );
};

export default FindTutors;