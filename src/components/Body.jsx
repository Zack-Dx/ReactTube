import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

export default function Body() {
  return (
    <>
      <main className="flex fixed top-16 w-full">
        <Sidebar />
        <MainContainer />
      </main>
    </>
  );
}
