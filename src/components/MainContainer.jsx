import FilterList from "./FilterList";
import VideoSection from "./VideoSection";

export default function MainContainer() {
  return (
    <>
      <section className="w-screen">
        <FilterList />
        <VideoSection />
      </section>
    </>
  );
}
