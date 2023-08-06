import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeSideBarDisplay } from "../store/slices/appSlice";

export default function WatchPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSideBarDisplay()); // Closing the Sidebar onload.
  }, [dispatch]);

  return <div>WatchPage</div>;
}
