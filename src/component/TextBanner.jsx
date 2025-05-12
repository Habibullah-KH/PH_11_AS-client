import PropTypes from 'prop-types';

export default function TextBanner({ textPrime, textSec }) {
  return (
    <div className="w-full min-h-[550px] bg-[url('/bannerText.jpg')] bg-cover bg-[center_70%] bg-no-repeat flex flex-col items-center justify-center gap-3">
      <div className="font-bold text-4xl text-[2.5xl] text-black">{textPrime}</div>
      <div className="text-black">{textSec}</div>
    </div>
  );
}

TextBanner.propTypes = {
  textPrime: PropTypes.string.isRequired,
  textSec: PropTypes.string.isRequired,
};
