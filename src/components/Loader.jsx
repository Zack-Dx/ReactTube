import { BeatLoader } from "react-spinners";
import { useSelector } from "react-redux";
export default function Loader() {
  const isSideBarOpen = useSelector((store) => store.app.isSideBarVisible);

  return (
    <>
      <div
        className={`h-screen ${
          isSideBarOpen ? "col-span-8" : "col-span-10"
        } flex items-center justify-center`}
      >
        <BeatLoader color="#ec0e3d" />
      </div>
    </>
  );
}
