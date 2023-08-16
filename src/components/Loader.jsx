import { BeatLoader } from "react-spinners";
export default function Loader() {
  return (
    <>
      <div className="h-screen w-full col-span-8 flex items-center justify-center">
        <BeatLoader color="#ec0e3d" />
      </div>
    </>
  );
}
