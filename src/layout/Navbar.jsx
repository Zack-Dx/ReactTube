import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  selectActiveSection,
  toggleSideBarDisplay,
} from "../store/slices/appSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { cacheResults } from "../store/slices/searchSlice";
import { PropagateLoader } from "react-spinners";
import { toast } from "react-toastify";
import NavSearchLoader from "../components/Loaders/NavSearchLoader";

// Define the YouTube search API URL
const YOUTUBE_SEARCH_API = import.meta.env.VITE_YOUTUBE_SEARCH_API;

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(true);
  const searchQueryCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to toggle the sidebar display
  const toggleSidebarDisplay = () => {
    dispatch(toggleSideBarDisplay());
  };

  // Function to handle the search form submission
  const searchSubmit = (event, query) => {
    event.preventDefault();
    navigate(`/results/?keyword=${query}`);
    setShowSuggestions(false);
  };

  // Function to show/hide search suggestions based on input
  const displaySuggestionPreview = (searchText) => {
    searchText ? setShowSuggestions(true) : setShowSuggestions(false);
  };

  // Function to fetch search suggestions from the API
  const getSearchSuggestions = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setSearchSuggestions(data[1]);
      dispatch(cacheResults({ [searchQuery]: searchSuggestions }));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setShowSuggestions(false);
      toast.error("Error fetching search suggestions");
    }
  };

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
      <nav className="flex justify-between px-2 md:px-6 py-2 shadow-md">
        <div id="start" className="flex items-center space-x-3">
          <button
            type="button"
            onClick={toggleSidebarDisplay}
            className="p-2 outline-none transition rounded-full hover:bg-gray-200"
          >
            <RxHamburgerMenu className="text-xl" />
          </button>

          <Link to={"/"}>
            <img
              className="hidden md:block w-24"
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
            <div className="border-y-2 border-l-2 pl-4 rounded-l-full w-full md:w-80">
              <form
                onSubmit={(e) => {
                  dispatch(selectActiveSection(searchQuery));
                  searchSubmit(e, searchQuery);
                }}
              >
                <input
                  type="text"
                  className="outline-none w-full text-sm p-2"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    displaySuggestionPreview(e.target.value);
                  }}
                />
              </form>
            </div>
            {/* Search Button */}
            <div>
              <div
                onClick={(e) => searchSubmit(e, searchQuery)}
                className="bg-gray-100 py-[9px] px-5 border cursor-pointer hover:bg-gray-200 rounded-r-full"
              >
                <BiSearch className="text-xl" />
              </div>
            </div>
          </div>

          {/* Search Suggestions */}
          {showSuggestions &&
            (loading ? (
              <NavSearchLoader Loader={PropagateLoader} />
            ) : (
              <div className="absolute bg-white rounded-md w-[430px] h-fit overflow-y-auto top-16 -left-16 z-40 py-3 text-base font-semibold space-y-3">
                <ul>
                  {searchSuggestions?.map((query) => (
                    <Link
                      key={query}
                      onClick={() => setShowSuggestions(false)}
                      to={`/results/?keyword=${query}`}
                    >
                      <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                        <div className="flex items-center gap-4">
                          <BsSearch className="text-sm" />
                          {query}
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        <div className="flex ml-2 items-center gap-3 md:gap-6">
          <AiOutlineUser className="text-2xl cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}
