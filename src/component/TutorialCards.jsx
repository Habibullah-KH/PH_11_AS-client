import { IoIosStar } from "react-icons/io";
import PropTypes from 'prop-types';


const TutorialCards = ({data}) => {
    // console.log(data);
    const {name, image, description, language, price, review} = data;
    return (
        <>
  <div className="card card-side bg-base-100 shadow-xl max-w-[620px] border-2 p-2 grid grid-cols-5">
  <figure className="col-span-1">
    <img
    className="rounded-xl"
      src={image}
      alt="profile pic" />
  </figure>
  <div className="card-body col-span-4">

<div className="flex items-center justify-between">

<div>{/* user name and language name */}
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

<div className="flex gap-4 text-xl">{/* revew and price */}
<p className="flex items-center"><IoIosStar />{review}</p>
<p>${price}</p>
</div>
</div>

    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline">Details</button>
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
      }).isRequired,
  };
export default TutorialCards;