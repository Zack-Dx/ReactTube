import Sidebar from "./Sidebar";
import MainContainer from "../components/MainContainer";

export default function Body() {
  return (
    <>
      <main className="grid grid-cols-12 fixed w-full">
        <Sidebar />
        <MainContainer />
      </main>
    </>
  );
}
