import { FaArrowRightLong } from "react-icons/fa6";

const Slider = () => {
    return (
        <>
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">

  <div className="flex flex-col md:flex-row items-center justify-center xl:gap-20 lg:gap-10 gap-3 w-full py-10 px-2 bg-[#ffd166]">
        {/* text-container */}
        <div>
<h2 className="text-3xl md:text-[2.5rem] font-bold mb-3 text-black">
Learn faster<br/>
with your best<br/>
language tutor.<br/>
</h2>

            <button className="btn btn-active btn-ghost hover:btn-outline flex items-center gap-2 text-black">Get Started <FaArrowRightLong /> </button>
        </div>
        {/* image-container */}
        <div>
            <img className="rounded-xl" src="https://preply.com/cdn-cgi/image/format=auto,fit=contain,width=500/https://static.preply.com/static/ssr/_next/static/images/hero-23-0802150dbe518540999c5757ad16d400.jpg"/>
        </div>
    </div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle bg-transparent">❮</a>
      <a href="#slide2" className="btn btn-circle bg-transparent">❯</a>
    </div>
  </div>
  {/* slider 1 end */}

  <div id="slide2" className="carousel-item relative w-full">
  <div className="flex flex-col md:flex-row items-center justify-center xl:gap-20 lg:gap-10 gap-3 w-full py-10 px-2 bg-[#ff7aab]">
        {/* text-container */}
        <div>
<h2 className="text-3xl md:text-[2.5rem] font-bold mb-3 text-black">
Find the right tutor<br/>
for you.
</h2>

            <button className="btn btn-active btn-ghost hover:btn-outline flex items-center gap-2 text-black">Get Started <FaArrowRightLong /> </button>
        </div>
        {/* image-container */}
        <div>
            <img className="rounded-xl" src="https://preply.com/cdn-cgi/image/format=auto,fit=contain,width=390/https://static.preply.com/static/ssr/_next/static/images/card-3-0bab46dd6b35951f6fc2e87968b6e3ea.jpg"/>
        </div>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle bg-transparent">❮</a>
      <a href="#slide3" className="btn btn-circle bg-transparent">❯</a>
    </div>
  </div>
    {/* slider 2 end */}


  <div id="slide3" className="carousel-item relative w-full">
  <div className="flex flex-col md:flex-row items-center justify-center xl:gap-20 lg:gap-10 gap-3 w-full py-10 px-2 bg-[#00bbf9]">
        {/* text-container */}
        <div>
<h2 className="text-3xl md:text-[2.5rem] font-bold mb-3 text-black">
    With just a few lessons,<br/>
     you can already <br/>
     see difference.
</h2>

            <button className="btn btn-active btn-ghost hover:btn-outline flex items-center gap-2 text-black">Get Started <FaArrowRightLong /> </button>
        </div>
        {/* image-container */}
        <div>
            <img className="rounded-xl" src="https://scdn.italki.com/ng/static/image/asgardhp/intro_articles.jpg"/>
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