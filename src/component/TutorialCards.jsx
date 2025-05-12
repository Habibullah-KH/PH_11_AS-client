import { FaHeart } from "react-icons/fa";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const MAX_DESC_LENGTH = 100; // set your desired limit

const TutorialCards = ({ data }) => {
  const { name, image, description, language, price, review, _id } = data;
  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/tutor/${id}`);
  };

  // Truncate description
  const truncatedDescription =
    description.length > MAX_DESC_LENGTH
      ? description.slice(0, MAX_DESC_LENGTH) + "..."
      : description;

  return (
    <div className="bg-base-100 shadow-md rounded-xl border p-4 w-[320px] h-[270px] flex flex-col justify-between transition-transform hover:scale-[1.05] hover:border-0 hover:shadow-transparent">
      {/* Top section: avatar and info */}
      <div>
        <div className="flex items-center gap-4 mb-3">
          <img
            src={image || '/profile.png'}
    onError={(e) => {
    e.target.onerror = null;
    e.target.src = '/profile.png';}}
    
            className="w-9 h-9 rounded-full object-cover border-2 border-yellow-300"
          />
          <div>
            <h2 className="text-lg font-semibold">{name}</h2>
            <p
              className={`font-semibold text-xs mt-1 ${
                language === "Spanish"
                  ? "text-yellow-300 dark:text-yellow-600"
                  : language === "English"
                  ? "text-rose-300 dark:text-rose-600"
                  : language === "Japanese"
                  ? "text-orange-300 dark:text-orange-600"
                  : language === "French"
                  ? "text-purple-300 dark:text-purple-600"
                  : language === "Chinese"
                  ? "text-pink-300 dark:text-pink-600"
                  : language === "German"
                  ? "text-blue-300 dark:text-blue-600"
                  : language === "Italian"
                  ? "text-amber-300 dark:text-amber-600"
                  : language === "Arabic"
                  ? "text-green-300 dark:text-green-600"
                  : language === "Portuguese"
                  ? "text-fuchsia-300 dark:text-fuchsia-600"
                  : "text-gray-400 dark:text-gray-300"
              }`}
            >
              {language}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm mb-4">
          {truncatedDescription}
        </p>
      </div>

      {/* Bottom section: review, price, button */}
      <div>
        <div className="flex justify-start gap-3 items-center text-sm font-medium mb-4">
          <p className="flex items-center gap-1 text-red-400">
            <FaHeart /> {review}
          </p>
          <p >${price}</p>
        </div>

        <button
          onClick={() => handleDetails(_id)}
          className="btn btn-ghost btn-sm w-full"
        >
          Details
        </button>
      </div>
    </div>
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
