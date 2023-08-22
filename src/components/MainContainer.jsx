import { useSelector } from "react-redux";
import FilterList from "./Filter/FilterList";
import VideoSection from "./VideoSection/VideoSection";

export default function MainContainer() {
  const isSideBarOpen = useSelector((store) => store.app.isSideBarVisible);

  return (
    <>
      <section
        className={`${
          isSideBarOpen
            ? "col-span-12 md:col-span-10"
            : "col-span-10 md:col-span-11"
        }`}
      >
        <FilterList />
        <VideoSection />
      </section>
    </>
  );
}
