import Comment from "./Comment";
import PropTypes from "prop-types";

export default function CommentList({ comments }) {
  return (
    <div className="space-y-4">
      {comments?.map((comment, index) => (
        <div key={index} className="space-y-2">
          <Comment data={comment} />
          {comment?.replies && (
            <div className="pl-8 border-l-2 border-gray-300 space-y-2">
              <CommentList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};
