import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeSideBarDisplay } from "../store/slices/appSlice";
import { useSearchParams } from "react-router-dom";

export default function WatchPage() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSideBarDisplay()); // Closing the Sidebar onload.
  }, [dispatch]);

  return (
    <main className="p-10">
      <div className="w-full">
        <iframe
          width="850"
          height="490"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}
