import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectActiveSection } from "../../store/slices/appSlice";
export default function Button({ textContent }) {
  const selectedSection = useSelector((store) => store.app.sectionSelected);
  const dispatch = useDispatch();

  // Function to handle the active section on sidebar
  const handleSectionSelect = (section) => {
    dispatch(selectActiveSection(section));
  };

  return (
    <>
      <button
        onClick={() => handleSectionSelect(textContent)}
        className={`${
          selectedSection === textContent.toLowerCase()
            ? "bg-black text-white"
            : "bg-gray-100"
        }  outline-none transition whitespace-nowrap rounded-md py-2 px-5 text-sm`}
      >
        {textContent}
      </button>
    </>
  );
}

Button.propTypes = {
  textContent: PropTypes.string.isRequired,
};
