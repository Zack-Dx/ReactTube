import { useSelector } from "react-redux/es/hooks/useSelector";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineAppShortcut } from "react-icons/md";
import { IoLogoOctocat } from "react-icons/io";
import { Link } from "react-router-dom";
import { selectActiveSection } from "../store/slices/appSlice";
import { useDispatch } from "react-redux";

const sidebarData = [
  {
    text: "Home",
    icon: <GoHomeFill />,
    route: "/",
    tab: "_self",
  },
  {
    text: "Shorts",
    icon: <MdOutlineAppShortcut />,
    route: `/results/?keyword=shorts`,
    tab: "_self",
  },
  {
    text: "Github",
    icon: <IoLogoOctocat />,
    route: "https://github.com/Zack-Dx/Youtube-React-Redux",
    tab: "_blank",
  },
];

export default function Sidebar() {
  const isSidebarOpen = useSelector((store) => store.app.isSideBarVisible);
  const sectionSelected = useSelector((store) => store.app.sectionSelected);
  const dispatch = useDispatch();

  const handleSectionSelect = (section) => {
    dispatch(selectActiveSection(section));
  };

  return isSidebarOpen ? (
    <div className="hidden md:block col-span-4 md:col-span-2 h-screen py-3 overflow-y-auto scroll scrollbar-hide">
      {sidebarData.map(({ icon, text: textContent, route, tab }) => (
        <Link
          to={route}
          key={textContent}
          target={tab}
          onClick={() =>
            handleSectionSelect(textContent === "Home" ? "All" : textContent)
          }
          className={`${
            sectionSelected === textContent
              ? "bg-gray-200"
              : sectionSelected === "All" && textContent === "Home"
              ? "bg-gray-200"
              : null
          } flex items-center justify-start mx-4 transition hover:bg-gray-200 rounded-md py-3 px-3 cursor-pointer`}
        >
          <div className="text-xl mr-5">{icon}</div>
          <div className="text-sm font-normal">{textContent}</div>
        </Link>
      ))}
    </div>
  ) : (
    <div className="col-span-2 md:col-span-1 flex flex-col p-2 cursor-pointer h-screen overflow-y-auto scrollbar-hide">
      {sidebarData.map(({ text: textContent, icon, route, tab }) => {
        return (
          <Link
            to={route}
            key={textContent}
            target={tab}
            onClick={() =>
              handleSectionSelect(textContent === "Home" ? "All" : textContent)
            }
            className={`${
              sectionSelected === textContent
                ? "bg-gray-200"
                : sectionSelected === "All" && textContent === "Home"
                ? "bg-gray-200"
                : null
            } flex transition flex-col items-center justify-center py-4 hover:bg-gray-200 rounded-md`}
          >
            <div className="text-xl">{icon}</div>
            <p className="text-[10px] mt-2 break-words">{textContent}</p>
          </Link>
        );
      })}
    </div>
  );
}
