import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API_ENDPOINT } from "../../data/constants";
import { VideoPreviewShimmer } from "./VideoPreviewShimmer";
import fetchDataFromUrl from "../../utils/fetch";
import VideoPreviewCard from "./VideoPreviewCard";

export default function VideoSection() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getData() {
    try {
      const res = await fetchDataFromUrl(YOUTUBE_VIDEO_API_ENDPOINT);
      const data = res?.items;
      setVideos(data);
      setLoading(false);
    } catch (error) {
      setError("An error occurred while fetching data.");
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <>
      <section className="grid grid-cols-12 mt-10 h-screen pb-44 gap-6 overflow-y-auto md:px-10 px-3">
        {loading
          ? Array.from({ length: 20 }, (_, index) => (
              <VideoPreviewShimmer key={index} />
            ))
          : videos?.map((video) => (
              <VideoPreviewCard key={video?.id} videoInfo={video} />
            ))}
      </section>
    </>
  );
}
