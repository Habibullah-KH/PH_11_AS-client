import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './buttons/button.css';
import './buttons/circel.css';
import ColorsButton from "./buttons/ColorsButton";


const Slider = () => {
    return (
        <>
        <div className="carousel w-full ">
<div id="slide1" className="carousel-item relative w-full">
  <div className="w-full min-h-[550px] bg-[url('/bg-1.jpg')] bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-center justify-center xl:gap-20 lg:gap-10 gap-3 px-2">
    {/* text-container */}
    <div>
      <h2 className="text-3xl md:text-[2.5rem] font-bold mb-3 text-white">
        Learn faster<br />
        with your best<br />
        language tutor.<br />
      </h2>
      <Link to={'/cards'}>
        <button className="button flex items-center gap-2 text-white">
          Get Started <FaArrowRightLong />
        </button>
      </Link>
    </div>
  </div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between ">
      <a href="#slide3" className="circel"><ColorsButton text="❮"></ColorsButton></a>
      <a href="#slide2" className="circel"><ColorsButton text="❯"></ColorsButton></a>
    </div>
  </div>
  {/* slider 1 end */}

  <div id="slide2" className="carousel-item relative w-full ">
  <div className="w-full min-h-[550px] bg-[url('/bg-2.jpg')] bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-center justify-center xl:gap-20 lg:gap-10 gap-3 px-2">
        {/* text-container */}
        <div>
<h2 className="text-3xl md:text-[2.5rem] font-bold mb-3 text-white">
Find the right tutor<br/>
for you.
</h2>

<Link to={'/cards'}>
            <button className="button flex items-center gap-2 text-black">Get Started <FaArrowRightLong /> </button></Link>
        </div>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="circel"><ColorsButton text="❮"></ColorsButton></a>
      <a href="#slide3" className="circel"><ColorsButton text="❯"></ColorsButton></a>
    </div>
  </div>
    {/* slider 2 end */}


  <div id="slide3" className="carousel-item relative w-full ">
  <div className="w-full min-h-[550px] bg-[url('/bg-3.jpg')] bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-center justify-center xl:gap-20 lg:gap-10 gap-3 px-2">
        {/* text-container */}
        <div>
<h2 className="text-3xl md:text-[2.5rem] font-bold mb-3 text-black">
    With just a few lessons,<br/>
     you can already <br/>
     see difference.
</h2>

<Link to={'/cards'}>
            <button className="button flex items-center gap-2 text-black">Get Started <FaArrowRightLong /> </button></Link>
        </div>

    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="circel"><ColorsButton text="❮"></ColorsButton></a>
      <a href="#slide1" className="circel"><ColorsButton text="❯"></ColorsButton></a>
    </div>
  </div>
    {/* slider 3 end */}


</div>
        </>
    );
};

export default Slider;