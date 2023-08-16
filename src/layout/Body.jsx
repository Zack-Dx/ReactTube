import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../components/Loader";

export default function Body() {
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-12 fixed w-full">
        <Sidebar />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
