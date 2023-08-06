import { useSelector } from "react-redux/es/hooks/useSelector";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineAppShortcut, MdSubscriptions } from "react-icons/md";
import { Link } from "react-router-dom";
const sidebarData = [
  {
    text: "Home",
    icon: <GoHomeFill />,
    route: "/",
  },
  {
    text: "Shorts",
    icon: <MdOutlineAppShortcut />,
    route: "/",
  },
  {
    text: "Subscriptions",
    icon: <MdSubscriptions />,
    route: "/",
  },
];

export default function Sidebar() {
  const isSidebarOpen = useSelector((state) => state.app.isSideBarVisible);

  return isSidebarOpen ? (
    <div className="col-span-4 md:col-span-2 h-screen py-3 overflow-y-auto scroll scrollbar-hide">
      {sidebarData.map(({ icon, text: textContent, route }) => (
        <Link
          to={route}
          key={textContent}
          className="flex  items-center justify-start mx-4 rounded-md py-3 px-3 cursor-pointer"
        >
          <div className="text-xl mr-5">{icon}</div>
          <div className="text-sm font-normal">{textContent}</div>
        </Link>
      ))}
    </div>
  ) : (
    <div className="col-span-2 md:col-span-1 flex flex-col p-2 cursor-pointer h-screen overflow-y-auto scrollbar-hide">
      {sidebarData.map(({ text: textContent, icon, route }) => {
        return (
          <Link
            to={route}
            key={textContent}
            className="flex transition flex-col items-center justify-center py-4 hover:bg-gray-200 rounded-md"
          >
            <div className="text-xl">{icon}</div>
            <p className="text-[10px] mt-2 break-words">{textContent}</p>
          </Link>
        );
      })}
    </div>
  );
}
