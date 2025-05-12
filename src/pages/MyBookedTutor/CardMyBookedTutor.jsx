import PropTypes from "prop-types";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { PiSmileySad } from "react-icons/pi";

const CardMyBookedTutor = ({ data }) => {
  const { name, image, language, price, tutorId, description } = data;
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
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to update review");
      }

      const result = await res.json();
      toast.success("Review submitted successfully!");
    } catch (err) {
      toast.error(
        <>
          <PiSmileySad /> {err.message}
        </>
      );
      setIsDisabled(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="card card-compact bg-base-100 shadow-xl border-2 w-full sm:w-80">
        <div>
          <img
            className="rounded-full w-10 h-10 my-5 mx-3"
            src={image || "/profile.png"}
            alt="profile"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/profile.png";
            }}
          />
        </div>

        <div className="card-body">
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

          <h2 className="card-title">{name}</h2>
          <p>{description}</p>

          <div className="flex justify-between items-center text-xl mt-4">
            <p>${price}</p>
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
        </div>
      </div>
    </>
  );
};

CardMyBookedTutor.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    tutorId: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardMyBookedTutor;
