import { useEffect, useState } from "react";
import fetchDataFromUrl from "../utils/fetch";
import { YOUTUBE_VIDEO_API_ENDPOINT } from "../data/constants";
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <section className="grid grid-cols-12 mt-10 h-screen overflow-y-auto">
        {videos?.map((video, index) => (
          <VideoPreviewCard key={index} />
        ))}
      </section>
    </>
  );
}
