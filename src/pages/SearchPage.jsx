import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import SearchVideoCard from "../components/VideoSection/SearchVideoCard";
import Loader from "../components/Loaders/Loader";
import FilterList from "../components/Filter/FilterList";

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const YOUTUBE_KEYWORD_LIST_API = import.meta.env.VITE_YOUTUBE_KEYWORD_LIST_API;

export default function SearchPage() {
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const isSideBarOpen = useSelector((store) => store.app.isSideBarVisible);

  const fetchbyKeyword = async () => {
    try {
      const response = await fetch(
        `${YOUTUBE_KEYWORD_LIST_API + keyword + "&key=" + GOOGLE_API_KEY}`
      );
      const videos = await response.json();
      setRelatedVideos(videos?.items);
      setLoading(false);
    } catch (error) {
      setError("An error occurred while fetching data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchbyKeyword();
  }, [keyword]);

  if (error) return error;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section
          className={`${
            isSideBarOpen
              ? "col-span-12 md:col-span-10"
              : "col-span-10 md:col-span-11"
          } space-y-6 overflow-y-auto h-screen`}
        >
          <FilterList />
          {relatedVideos?.map((video) =>
            video?.id?.videoId ? (
              <SearchVideoCard
                key={video?.etag}
                {...video?.snippet}
                id={video?.id?.videoId}
              />
            ) : null
          )}
        </section>
      )}
    </>
  );
}
