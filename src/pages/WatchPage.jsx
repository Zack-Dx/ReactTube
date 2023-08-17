import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { closeSideBarDisplay } from "../store/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "../components/CommentContainer";
import { YOUTUBE_COMMENT_THREAD_API, GOOGLE_API_KEY } from "../data/constants";

export default function WatchPage() {
  const [searchParams] = useSearchParams();
  const [comments, setComments] = useState([]);
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
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(closeSideBarDisplay()); // Closing the Sidebar onload.
  }, [dispatch]);

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  return (
    <>
      <main
        className={` ${
          isSideBarOpen
            ? "md:col-span-10 col-span-8"
            : "md:col-span-11 col-span-10"
        }  grid grid-cols-12 overflow-y-auto pt-10 pb-20 h-screen`}
      >
        <div className="col-span-8">
          <iframe
            width="870"
            height="490"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="md:col-span-4 hidden">Most Popular</div>
        <CommentContainer {...comments} />
      </main>
    </>
  );
}
