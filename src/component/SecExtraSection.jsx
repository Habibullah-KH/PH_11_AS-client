import { FaArrowRightLong } from "react-icons/fa6";

const SecExtraSection = () => {
    return (
        <>
        <div className="my-10">
       {/* top titel */}
       <div className="text-center bg-[#ffd36d] py-28 my-10">
        <h2 className="font-bold text-4xl text-[2.5xl]">Lessons you’ll love. Guaranteed.</h2>
        <p>Try another tutor for free if you’re not satisfied.</p>
       </div>

       {/* card section */}
         <div className="carousel-item relative w-fit m-auto">
       
         <div className="flex flex-col md:flex-row items-center justify-center xl:gap-20 lg:gap-10 gap-3 w-full py-2 px-2 border-2 border-[#ffd36d] p-2 rounded-xl">
               {/* image-container */}
               <div>
                   <img className="rounded-xl" src="https://preply.com/cdn-cgi/image/format=auto,fit=contain,width=500/https://static.preply.com/static/ssr/_next/static/images/hero-23-0802150dbe518540999c5757ad16d400.jpg"/>
               </div>


               {/* text-container */}
               <div>
       <h2 className="text-3xl md:text-[2.5rem] font-bold mb-3 text-black">
       Become a tutor
       </h2>
       <p>
       Earn money sharing your expert knowledge with students.<br/>
        Sign up to start tutoring online with Preply.
       </p>

       <ul className="list-disc font-bold my-5">
        <li>Find new students</li>
        <li>Grow your business</li>
        <li>Get paid securely</li>
       </ul>
       
           <button className="btn btn-active btn-ghost hover:btn-outline flex items-center gap-2 text-black">Become a tutor <FaArrowRightLong /> </button>
       </div>
           </div>

         </div>
         {/* slider 1 end */}
        </div>
            
        </>
    );
};

export default SecExtraSection;