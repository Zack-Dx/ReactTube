import { useSelector } from "react-redux";
import FilterList from "./FilterList";
import VideoSection from "./VideoSection";

export default function MainContainer() {
  const isSideBarOpen = useSelector((state) => state.app.isSideBarVisible);
  return (
    <>
      <section
        className={`${
          isSideBarOpen
            ? "col-span-8 md:col-span-10"
            : "col-span-10 md:col-span-11"
        } px-2`}
      >
        <FilterList />
        <VideoSection />
      </section>
    </>
  );
}
