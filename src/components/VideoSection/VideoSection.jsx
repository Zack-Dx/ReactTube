import { useEffect, useRef, useState } from "react";
import {
  GOOGLE_API_KEY,
  YOUTUBE_VIDEO_API_ENDPOINT,
} from "../../data/constants";
import { VideoPreviewShimmer } from "./VideoPreviewShimmer";
import fetchDataFromUrl from "../../utils/fetch";
import VideoPreviewCard from "./VideoPreviewCard";

export default function VideoSection() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videoCount, setVideoCount] = useState(10);
  const scrollContainer = useRef(null);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const res = await fetchDataFromUrl(
        `${
          YOUTUBE_VIDEO_API_ENDPOINT +
          videoCount +
          "&regionCode=IN&key=" +
          GOOGLE_API_KEY
        }`
      );
      const data = res?.items;
      setVideos(data);
      setLoading(false);
    } catch (error) {
      setError("An error occurred while fetching data.");
      setLoading(false);
    }
  };

  const infiniteScroll = () => {
    const container = scrollContainer.current;
    const scrollHeight = container.scrollHeight;
    const scrollTop = container.scrollTop;
    const userScrolledHeight = scrollTop + window.innerHeight;

    try {
      if (userScrolledHeight + 1 >= scrollHeight) {
        if (videoCount === 50) return;
        setVideoCount((prev) => prev + 10);
      }
    } catch (error) {
      setError("An error occurred while fetching data.");
    }
  };

  useEffect(() => {
    getData();
  }, [videoCount]);

  if (error) return <div>{error}</div>;

  return (
    <>
      <section
        ref={scrollContainer}
        onScroll={infiniteScroll}
        className="grid grid-cols-12 mt-10 h-screen pb-44 gap-6 overflow-y-auto md:px-10 px-3"
      >
        {loading
          ? Array.from({ length: 10 }, (_, index) => (
              <VideoPreviewShimmer key={index} />
            ))
          : videos?.map((video) => (
              <VideoPreviewCard key={video?.id} videoInfo={video} />
            ))}
      </section>
    </>
  );
}
