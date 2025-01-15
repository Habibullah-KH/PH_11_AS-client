import PropTypes from 'prop-types';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const Card = ({data}) => {
    const {languageName, cardImage} = data;

    const navigate = useNavigate();

//* get card information and get data
// const cardInfo = async (info) => {
//     console.log(`Sending request for language: ${info}`);
//     try {
//       const response = await fetch(`${import.meta.env.VITE_SERVER_url}/find-tutors?language=${info}`);
//       if (!response.ok) {
//         throw new Error(`Failed to fetch filtered data: ${response.statusText}`);
//       }
//       const data = await response.json(); // Parse the JSON response
//       console.log('Filtered data:', data); // Handle the data (e.g., pass it to a state or component)
//     } catch (err) {
//       console.error('Error fetching filtered data:', err);
//     }
//   };
const handleCardClick = () => {
    navigate(`find-tutors/${languageName}`); // Navigate with the query parameter
  };



    return ( 
    <>
        
<div
onClick={handleCardClick}
 className="flex items-center gap-5 p-7 border w-fit rounded-xl">

<div className="text-2xl border-2 p-2 rounded-xl">
<img className="w-5 h-5 rounded-full" src={cardImage}/>    
    </div>

<p>{languageName} tutors</p>
<FaArrowRightLong/>
</div>

{/* card end */}
        </>
    );
};

Card.propTypes = {
    data: PropTypes.shape({
        languageName: PropTypes.string.isRequired,
        cardImage: PropTypes.string.isRequired, 
    }).isRequired
};

export default Card;