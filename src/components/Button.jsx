import PropTypes from "prop-types";

export default function Button({ textContent }) {
  return (
    <>
      <button className="bg-gray-100 outline-none transition whitespace-nowrap hover:bg-gray-200 rounded-md py-2 px-5 text-sm">
        {textContent}
      </button>
    </>
  );
}

Button.propTypes = {
  textContent: PropTypes.string.isRequired,
};
