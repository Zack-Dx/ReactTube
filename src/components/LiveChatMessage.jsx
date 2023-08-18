import PropTypes from "prop-types";

export default function LiveChatMessage({ username, message, avatarUrl }) {
  return (
    <div className="flex items-center space-x-2 p-1 mx-3 hover:bg-gray-200 cursor-pointer rounded-md">
      <div className="w-fit rounded-full">
        <img className="rounded-full h-fit" src={avatarUrl} alt="user_msg" />
      </div>
      <div className="flex-grow">
        <p className="text-sm px-2 rounded-md max-w-xs">
          <span className="font-bold text-gray-500 mr-2">{username}</span>
          {message}
        </p>
      </div>
    </div>
  );
}

LiveChatMessage.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};
