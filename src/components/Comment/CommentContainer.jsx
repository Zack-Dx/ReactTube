import PropTypes from "prop-types";
import CommentList from "./CommentList";

export default function CommentContainer({ items }) {
  return (
    <>
      <div className="rounded-lg md:p-4 p-2 shadow-md col-span-12">
        <h2 className="text-base font-medium mb-4">{items?.length} Comments</h2>
        <div className="space-y-4">
          {items && <CommentList comments={items} />}
        </div>
      </div>
    </>
  );
}

CommentContainer.propTypes = {
  items: PropTypes.array,
};
