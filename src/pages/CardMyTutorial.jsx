import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CardMyTutorial = ({ data }) => {
  const { name, image, description, language, price, review, _id } = data;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_SERVER_url}/delete/${id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your tutorial has been deleted.", "success").then(() => {
                window.location.reload();
              });
            }
          })
          .catch((err) => console.error("Error deleting tutorial:", err));
      }
    });
  };

  return (
    <div className="bg-base-100 shadow-lg border rounded-xl p-5 w-[320px] min-h-[270px] space-y-4 relative">
      {/* Top: Image, Name, Language */}
      <div className="flex items-center gap-4">
        <img
            src={image || '/profile.png'}
    onError={(e) => {
    e.target.onerror = null;
    e.target.src = '/profile.png';}}
    
            className="w-9 h-9 rounded-full object-cover border-2 border-yellow-300"
          />
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
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
      <p className="text-sm line-clamp-3">
        {description}
      </p>

<div className="absolute bottom-0 flex flex-col justify-between">

      {/* Likes & Price */}
      <div className="flex justify-start gap-3 items-center text-sm font-medium mb-4">
          <p className="flex items-center gap-1 text-red-400">
            <FaHeart /> {review}
          </p>
          <p >${price}</p>
      </div>

      {/* Edit & Delete Buttons */}
      <div className="flex justify-end items-baseline gap-4 text-xl">
        <button
          onClick={() => handleDelete(_id)}
          className="text-red-600 hover:text-red-800"
        >
          <IoTrashBin />
        </button>
        <Link to={`/UpdateMyTutorial/${_id}`}>
          <button className="text-green-600 hover:text-green-800">
            <BiEdit />
          </button>
        </Link>
      </div>
</div>

</div>
  );
};

CardMyTutorial.propTypes = {
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

export default CardMyTutorial;
