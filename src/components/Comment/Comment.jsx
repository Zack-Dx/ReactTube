import PropTypes from "prop-types";
import { GoThumbsup } from "react-icons/go";
import { HiThumbUp } from "react-icons/hi";
export default function Comment({ data }) {
  const comment = {
    text: data?.snippet?.topLevelComment?.snippet?.textDisplay,
    authorDisplayName:
      data?.snippet?.topLevelComment?.snippet?.authorDisplayName,
    authorProfileUrl:
      data?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl,
    likeCount: data?.snippet?.topLevelComment?.snippet?.likeCount,
  };

  return (
    <div className="flex space-x-4 items-start bg-slate-100 py-3 rounded-lg px-3">
      <img
        src={comment?.authorProfileUrl}
        alt="User"
        className="w-10 h-10 rounded-full"
      />
      <div>
        <h3 className="text-gray-800 font-semibold">
          {comment?.authorDisplayName}
        </h3>
        <p className="text-gray-600 max-w-[280px] md:max-w-full break-words">
          {comment?.text}
        </p>
        <div className="flex items-center gap-1 mt-2">
          {comment?.likeCount === 0 ? <GoThumbsup /> : <HiThumbUp />}
          {comment?.likeCount}
        </div>
      </div>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.object.isRequired,
};
