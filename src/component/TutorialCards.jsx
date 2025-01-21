import { FaHeart } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";


const TutorialCards = ({data}) => {
    const {name, image, description, language, price, review, _id} = data;
    const naviget = useNavigate();
    const handleDetails = (e) => {
      // console.log(e);
      naviget(`/tutor/${e}`)
    }



    return (
        <>
  <div className="card card-side bg-base-100 shadow-xl max-w-[620px] border-2 p-2 grid grid-cols-5">
  <figure className="col-span-1">
    <img
    className="rounded-xl"
      src={image}
      alt="tutorial" />
  </figure>
  <div className="card-body col-span-4">

<div className="flex items-center justify-between">

{/* user name and language name */}
<div>
 <h2 className="card-title">{name}</h2>
 <p 
    className={`
    badge badge-secondary text-black
    ${language === 'English'? 'bg-[#fe938c]' : ''}
    ${language === 'Spanish'? 'bg-yellow-400' : ''}
    ${language === 'Japanese'? 'bg-orange-400' : ''}
    ${language === 'French'? 'bg-[#e4c1f9]' : ''}
    ${language === 'Chinese'? 'bg-[#fec5bb]' : ''}
    ${language === 'German'? 'bg-[#a9def9]' : ''}
    ${language === 'Italian'? 'bg-[#fec89a]' : ''}
    ${language === 'Arabic'? 'bg-[#99d98c]' : ''}
    ${language === 'Portuguese'? 'bg-[#f49cbb]' : ''}
    `}>

    {language}
</p>
</div>

{/* revew and price */}
<div className="flex gap-4 text-xl">
<p className="flex gap-3 items-center"><FaHeart />{review}</p>
<p>${price}</p>
</div>
</div>

    <p>{description}</p>
    <div className="card-actions justify-end">
      <button
       onClick={()=>handleDetails(_id)}
       className="btn btn-outline">Details</button>
    </div>
  </div>
</div>
        </>
    );
};

TutorialCards.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        review: PropTypes.number.isRequired,
        _id: PropTypes.string.isRequired,
      }).isRequired,
  };
export default TutorialCards;