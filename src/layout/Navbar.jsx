import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../data/constants";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBarDisplay } from "../store/slices/appSlice";
import { Link } from "react-router-dom";
import { cacheResults } from "../store/slices/searchSlice";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchQueryCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const toggleSidebarDisplay = () => {
    dispatch(toggleSideBarDisplay());
  };

  const displaySuggestionPreview = (searchText) => {
    searchText ? setShowSuggestions(true) : setShowSuggestions(false);
  };

  async function getSearchSuggestions() {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const data = await response.json();
      setSearchSuggestions(data[1]);
      dispatch(cacheResults({ [searchQuery]: data[1] }));
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  }

  useEffect(() => {
    let timer;
    if (searchQuery !== "") {
      // Cache Check
      if (searchQuery in searchQueryCache) {
        setSearchSuggestions(searchQueryCache[searchQuery]);
      } else {
        timer = setTimeout(getSearchSuggestions, 400);
      }
    }
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <header>
      <nav className="flex justify-between px-6 py-2 shadow-md">
        <div id="start" className="flex items-center space-x-3">
          {/* Hamburger */}
          <button
            type="button"
            onClick={toggleSidebarDisplay}
            className="p-2 outline-none transition rounded-full hover:bg-gray-200"
          >
            <RxHamburgerMenu className="text-xl" />
          </button>
          {/* Logo */}
          <Link to={"/"}>
            <img
              className="block"
              width={90}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
              alt="youtube_logo"
            />
          </Link>
        </div>
        <div
          id="center"
          className="relative flex items-center space-x-3 md:w-auto"
        >
          <div className="flex items-center w-full md:w-80">
            {/* Search Input */}
            <div className="hidden md:block border-y-2 border-l-2 pl-4 rounded-l-full w-full md:w-80">
              <input
                type="text"
                className="outline-none w-96 text-sm p-2"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  displaySuggestionPreview(e.target.value);
                }}
                onBlur={() => setShowSuggestions(false)}
              />
            </div>
            {/* Search Button */}
            <div className="bg-gray-100 py-[9px] px-5 border cursor-pointer hover:bg-gray-200 rounded-full md:rounded-r-full md:rounded-l-none">
              <BiSearch className="text-xl" />
            </div>
          </div>

          {/* Search Suggestions */}
          {showSuggestions && (
            <div className="absolute bg-white rounded-md w-[500px] h-fit overflow-y-auto top-16 -right-28 z-40 py-3 text-base font-semibold space-y-3">
              <ul>
                {searchSuggestions?.map((query) => (
                  <li
                    key={query}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <BsSearch className="text-sm" />
                      {query}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div id="end" className="flex ml-2 items-center gap-3 md:gap-6">
          <AiOutlineUser className="text-2xl cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}
