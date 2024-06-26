import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { closeSideBarDisplay } from "../store/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  setActiveVideoId,
  setActiveVideoMessages,
} from "../store/slices/chatSlice";
import { ACTIONS } from "../socket/actions";
import socket from "../socket/socket";
import CommentContainer from "../components/Comment/CommentContainer";
import LiveChat from "../components/LiveChat/LiveChat";

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const YOUTUBE_COMMENT_THREAD_API = import.meta.env
  .VITE_YOUTUBE_COMMENT_THREAD_API;

const { FETCH_VIDEO_MESSAGES, RECEIVED_VIDEO_MESSAGES } = ACTIONS;

export default function WatchPage() {
  const dispatch = useDispatch();
  const [comments, setComments] = useState([]);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const isSideBarOpen = useSelector((store) => store.app.isSideBarVisible);

  // Function to fetch Youtube Comments
  const fetchComments = async () => {
    try {
      const response = await fetch(
        `${YOUTUBE_COMMENT_THREAD_API + videoId + "&key=" + GOOGLE_API_KEY}`
      );
      const comments = await response.json();
      setComments(comments);
    } catch (error) {
      toast.error("An error occured while fetching comments.");
    }
  };

  const handleInitialVideoMessages = useCallback(
    (data) => {
      dispatch(setActiveVideoMessages(data));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(closeSideBarDisplay()); // Closing the Sidebar onload.
    dispatch(setActiveVideoId(videoId));
    socket.emit(FETCH_VIDEO_MESSAGES, videoId);
  }, [videoId, dispatch]);

  useEffect(() => {
    socket.on(RECEIVED_VIDEO_MESSAGES, handleInitialVideoMessages);
    () => {
      socket.off(RECEIVED_VIDEO_MESSAGES, handleInitialVideoMessages);
    };
  }, [handleInitialVideoMessages]);

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  return (
    <>
      <main
        className={` ${
          isSideBarOpen
            ? "md:col-span-10 col-span-12"
            : "md:col-span-11 col-span-10"
        } grid grid-cols-12 overflow-y-auto pt-10 px-2 pb-20 h-screen gap-6`}
      >
        <div className="col-span-12 md:col-span-12 lg:col-span-8">
          <iframe
            className="h-[250px] md:h-[500px] w-full shadow-2xl rounded-md"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <LiveChat />
        <CommentContainer {...comments} />
      </main>
    </>
  );
}
