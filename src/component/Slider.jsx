import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Slider = () => {
    return (
        <>
        <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full ">

  <div className="flex flex-col md:flex-row items-center justify-center xl:gap-20 lg:gap-10 gap-3 w-full py-20 px-2 bg-[#ffd166]">
        {/* text-container */}
        <div>
<h2 className="text-3xl md:text-[2.5rem] font-bold mb-3 text-black">
Learn faster<br/>
with your best<br/>
language tutor.<br/>
</h2>

           <Link to={'/find-tutors'}>
           <button className="btn btn-active btn-ghost hover:btn-outline flex items-center gap-2 text-black">Get Started <FaArrowRightLong /> </button>
           </Link> 
        </div>
        {/* image-container */}
        <div>
            <img className="rounded-xl" src="https://media.licdn.com/dms/image/v2/D5603AQE-wWsjuSc4bA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1703761380159?e=1741824000&v=beta&t=WCO8zXh0UbHNJIimIp2y1q3E9GB12l-CxjwLBXIzTOY"/>
        </div>
    </div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between ">
      <a href="#slide3" className="btn btn-circle bg-transparent">❮</a>
      <a href="#slide2" className="btn btn-circle bg-transparent">❯</a>
    </div>
  </div>
  {/* slider 1 end */}

  <div id="slide2" className="carousel-item relative w-full ">
  <div className="flex flex-col md:flex-row items-center justify-center xl:gap-20 lg:gap-10 gap-3 w-full py-20 px-2 bg-[#ff7aab]">
        {/* image-container */}
        <div>
            <img className="rounded-xl" src="data:image/jpeg;base64,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"/>
        </div>
        {/* text-container */}
        <div>
<h2 className="text-3xl md:text-[2.5rem] font-bold mb-3 text-black">
Find the right tutor<br/>
for you.
</h2>

<Link to={'/find-tutors'}>
            <button className="btn btn-active btn-ghost hover:btn-outline flex items-center gap-2 text-black">Get Started <FaArrowRightLong /> </button></Link>
        </div>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle bg-transparent">❮</a>
      <a href="#slide3" className="btn btn-circle bg-transparent">❯</a>
    </div>
  </div>
    {/* slider 2 end */}


  <div id="slide3" className="carousel-item relative w-full ">
  <div className="flex flex-col md:flex-row items-center justify-center xl:gap-20 lg:gap-10 gap-3 w-full py-20 px-2 bg-orange-300">
        {/* text-container */}
        <div>
<h2 className="text-3xl md:text-[2.5rem] font-bold mb-3 text-black">
    With just a few lessons,<br/>
     you can already <br/>
     see difference.
</h2>

<Link to={'/find-tutors'}>
            <button className="btn btn-active btn-ghost hover:btn-outline flex items-center gap-2 text-black">Get Started <FaArrowRightLong /> </button></Link>
        </div>
        {/* image-container */}
        <div>
            <img className="rounded-xl" src="https://media.licdn.com/dms/image/v2/D5603AQEAIZNLXRDvfw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1677564797018?e=1741824000&v=beta&t=HfnVxpxxFAK3SJr3IIj3Suvxi9BfY-4yfv1bQJTdOV0"/>
        </div>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle bg-transparent">❮</a>
      <a href="#slide1" className="btn btn-circle bg-transparent">❯</a>
    </div>
  </div>
    {/* slider 3 end */}


</div>
        </>
    );
};

export default Slider;