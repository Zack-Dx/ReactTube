import PropTypes from "prop-types";

export default function Comment({ data }) {
  return (
    <div className="flex space-x-4 items-center bg-slate-100 py-2 rounded-md px-3">
      <img
        src="https://t3.ftcdn.net/jpg/03/42/99/68/360_F_342996846_tHMepJOsXWwbvMpG7uiYpE68wbfQ9e4s.jpg"
        alt="User"
        className="w-10 h-10 rounded-full"
      />
      <div>
        <h3 className="text-gray-800 font-semibold">{data.name}</h3>
        <p className="text-gray-600">{data.text}</p>
      </div>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.object.isRequired,
};
