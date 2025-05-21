import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './buttons/button.css';
import './buttons/circel.css';
import ColorsButton from "./buttons/ColorsButton";

const Slider = () => {
  return (
    <div className="overflow-hidden w-full">
      <div className="carousel w-full">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full h-[450px] overflow-hidden flex items-center">
          <img
            src="/bg-1.jpg"
            alt="Slide 1 background"
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-3 px-2">
            <div>
              <h2 className="text-3xl font-bold mb-3 text-white">
                Learn faster<br />
                with your best<br />
                language tutor.
              </h2>
              <Link to="/cards">
                <button className="button flex items-center gap-2 text-white">
                  Get Started <FaArrowRightLong />
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="circel"><ColorsButton text="❮" /></a>
            <a href="#slide2" className="circel"><ColorsButton text="❯" /></a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full h-[450px] overflow-hidden flex items-center">
          <img
            src="/bg-2.jpg"
            alt="Slide 2 background"
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-3 px-2">
            <div>
              <h2 className="text-3xl font-bold mb-3 text-white">
                Find the right tutor<br />
                for you.
              </h2>
              <Link to="/cards">
                <button className="button flex items-center gap-2 text-black">
                  Get Started <FaArrowRightLong />
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="circel"><ColorsButton text="❮" /></a>
            <a href="#slide3" className="circel"><ColorsButton text="❯" /></a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full h-[450px] overflow-hidden flex items-center">
          <img
            src="/bg-3.jpg"
            alt="Slide 3 background"
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-3 px-2">
            <div>
              <h2 className="text-3xl font-bold mb-3 text-black">
                With just a few lessons,<br />
                you can already <br />
                see difference.
              </h2>
              <Link to="/cards">
                <button className="button flex items-center gap-2 text-black">
                  Get Started <FaArrowRightLong />
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="circel"><ColorsButton text="❮" /></a>
            <a href="#slide1" className="circel"><ColorsButton text="❯" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
