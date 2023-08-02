import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearch, BiSolidMicrophone } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toggleSideBarDisplay } from '../utils/appSlice';

export default function Navbar() {
    const dispatch = useDispatch();

    // Dispatching Action for Sidebar Toggle
    const toggleSidebarDisplay = () => {
        dispatch(toggleSideBarDisplay());
    };

    return (
        <header className="sticky h-16 shadow-md">
            <nav className="flex justify-between px-6 py-3">
                <div id="start" className="flex items-center">
                    {/* Hamburger */}
                    <button type="button" onClick={toggleSidebarDisplay} className="px-2">
                        <GiHamburgerMenu className="text-2xl" />
                    </button>
                    {/* Logo */}
                    <div className="px-2">
                        <img
                            className="block"
                            width={100}
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
                            alt="youtube_logo"
                        />
                    </div>
                </div>
                <div id="center" className="flex items-center space-x-3 md:w-auto">
                    <div className="flex items-center w-full md:w-80">
                        {/* Search Input */}
                        <div className="hidden md:block border-y-2 border-l-2 pl-4 rounded-l-full w-full md:w-80">
                            <input
                                type="text"
                                className="outline-none w-full p-2"
                                placeholder="Search"
                            />
                        </div>
                        {/* Search Button */}
                        <div className="bg-gray-100 py-[11px] px-5 border cursor-pointer hover:bg-gray-200 rounded-full md:rounded-r-full md:rounded-l-none">
                            <BiSearch className="text-xl" />
                        </div>
                    </div>
                    {/* Microphone */}
                    <div className="p-3 bg-slate-100 cursor-pointer rounded-full">
                        <BiSolidMicrophone className="text-xl" />
                    </div>
                </div>
                <div id="end" className="flex ml-2 items-center gap-3 md:gap-6">
                    <AiOutlineUser className="text-2xl cursor-pointer" />
                </div>
            </nav>
        </header>
    );
}
