import PropTypes from "prop-types";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const CardMyBookedTutor = ({ data }) => {
  const { name, image, language, price, tutorId } = data;
  const [isDisabled, setIsDisabled] = useState(false);

  const handleReview = async () => {
    try {
      setIsDisabled(true);

      const res = await fetch(`${import.meta.env.VITE_SERVER_url}/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tutorId }),
      });

      if (!res.ok) {
        throw new Error("Failed to update review");
      }

      const data = await res.json();
      console.log("Review updated:", data);

    } catch (err) {
      console.error("Error updating review:", err);
      setIsDisabled(false);
    }
  };

  return (
    <div
      className="flex flex-wrap justify-between p-2
        items-center bg-base-100 max-w-[40rem] 
        shadow-xl mx-auto border-2 m-3 rounded-xl"
    >
      <div className="flex items-center gap-3">
        <img className="rounded-xl" src={image} alt="profile" />
        <div>
          <h2 className="card-title">{name}</h2>
          <p
            className={`
              badge badge-secondary text-black
              ${language === "English" ? "bg-[#fe938c]" : ""}
              ${language === "Spanish" ? "bg-yellow-400" : ""}
              ${language === "Japanese" ? "bg-orange-400" : ""}
              ${language === "French" ? "bg-[#e4c1f9]" : ""}
              ${language === "Chinese" ? "bg-[#fec5bb]" : ""}
              ${language === "German" ? "bg-[#a9def9]" : ""}
              ${language === "Italian" ? "bg-[#fec89a]" : ""}
              ${language === "Arabic" ? "bg-[#99d98c]" : ""}
              ${language === "Portuguese" ? "bg-[#f49cbb]" : ""}
            `}
          >
            {language}
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <p className="font-bold text-xl">${price}</p>
      </div>

      <button
        onClick={handleReview}
        disabled={isDisabled}
        className={`btn btn-outline btn-circle ${
          isDisabled ? "btn-disabled" : ""
        }`}
      >
        <FaHeart />
      </button>
    </div>
  );
};

CardMyBookedTutor.propTypes = {
  data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
  }).isRequired,
};


export default CardMyBookedTutor;
