import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { closeSideBarDisplay } from "../store/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "../components/LiveChat/LiveChat";
import CommentContainer from "../components/Comment/CommentContainer";

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const YOUTUBE_COMMENT_THREAD_API = import.meta.env
  .VITE_YOUTUBE_COMMENT_THREAD_API;

export default function WatchPage() {
  const [searchParams] = useSearchParams();
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const isSideBarOpen = useSelector((store) => store.app.isSideBarVisible);
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `${YOUTUBE_COMMENT_THREAD_API + videoId + "&key=" + GOOGLE_API_KEY}`
      );
      const comments = await response.json();
      setComments(comments);
    } catch (error) {
      setError("An error occured while fetching comments.");
    }
  };

  useEffect(() => {
    dispatch(closeSideBarDisplay()); // Closing the Sidebar onload.
  }, [dispatch]);

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  if (error) return error;

  return (
    <>
      <main
        className={` ${
          isSideBarOpen
            ? "md:col-span-10 col-span-8"
            : "md:col-span-11 col-span-10"
        } grid grid-cols-12 overflow-y-auto pt-10 md:px-10 pb-20 h-screen gap-6`}
      >
        <div className="col-span-12 md:col-span-12 lg:col-span-8">
          <iframe
            className="h-[500px] w-full shadow-2xl rounded-md"
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
