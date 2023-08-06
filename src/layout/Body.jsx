import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
export default function Body() {
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-12 fixed w-full">
        <Sidebar />
        <Suspense fallback={<h1> Loading...watch</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
