import LanguageCard from "../component/LanguageCard";
import Slider from "../component/Slider";
import Stat from "../component/Stat";


const Home = () => {
    return (
        <>
        <div>

    {/* banner section */}
    <Slider/>

    {/* stat section */}
<div className="w-full flex items-center justify-center my-10">
    <Stat/>
</div>

    {/* language section */}
<div>
    <LanguageCard/>
</div>


        </div>
        </>
    );
};

export default Home; 