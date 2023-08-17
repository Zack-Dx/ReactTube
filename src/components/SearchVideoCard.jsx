import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function SearchVideoCard({
  channelTitle,
  description,
  thumbnails,
  title,
  id,
}) {
  return (
    <Link
      to={`/watch?v=${id}`}
      className="flex flex-col md:flex-row hover:bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition hover:scale-105 duration-500"
    >
      <div className="w-full md:w-1/3">
        <img
          src={thumbnails?.medium?.url}
          alt={title}
          className="w-fit h-auto rounded-lg"
        />
      </div>

      <div className="w-full md:w-2/3 ml-4 mt-3">
        <h2 className="text-lg font-medium mb-2">{title}</h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <div className="flex items-center mt-4">
          <p className="mr-2" title="Go to channel">
            <img
              src={thumbnails?.medium?.url}
              alt={title}
              className="w-8 h-8 rounded-full"
            />
          </p>
          <div>
            <p className="text-gray-800 font-medium text-sm hover:underline">
              {channelTitle}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

SearchVideoCard.propTypes = {
  channelTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnails: PropTypes.shape({
    medium: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  }).isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
};
