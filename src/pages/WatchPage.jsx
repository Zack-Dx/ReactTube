import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeSideBarDisplay } from "../store/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "../components/CommentContainer";

export default function WatchPage() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSideBarDisplay()); // Closing the Sidebar onload.
  }, [dispatch]);

  return (
    <>
      <main className="col-span-10 md:col-span-11 grid grid-cols-12 overflow-y-auto pt-10 pb-20 h-screen">
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
        <CommentContainer />
      </main>
    </>
  );
}
