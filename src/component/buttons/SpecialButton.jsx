import PropTypes from 'prop-types';

const SpecialButton = ({ text, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full md:w-fit px-4 py-2 text-xs md:text-md ${className}
        hover:border-black hover:border-2 border-2 border-transparent
        font-semibold rounded transition duration-300
        text-black
        animate-gradient 
        bg-[linear-gradient(120deg,#ff930f,#fff95b,#ff930f)] 
        bg-[length:400%_400%] bg-no-repeat bg-center`}
    >
      {text}
    </button>
  );
};

SpecialButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default SpecialButton;
