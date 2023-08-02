import { GoHomeFill } from 'react-icons/go';
import { MdOutlineAppShortcut, MdSubscriptions } from 'react-icons/md';
import { useSelector } from 'react-redux/es/hooks/useSelector';
export default function Sidebar() {
    const isSidebarOpen = useSelector(state => state.app.isSideBarVisible)
    const sidebarData = [
        {
            text: 'Home',
            icon: <GoHomeFill />,
        },
        {
            text: 'Shorts',
            icon: <MdOutlineAppShortcut />,
        },
        {
            text: 'Subscriptions',
            icon: <MdSubscriptions />,
        },

    ];
    // Early Return 
    if (!isSidebarOpen) return null;

    return (
        <div className="w-52  py-3">
            {
                sidebarData?.map(({ icon, text }) => (
                    <div key={text} className="flex items-center bg-gray-100 justify-start mx-4 rounded-md py-3 px-3 cursor-pointer">
                        <div className="text-xl mr-5">{icon}</div>
                        <div className="text-sm font-medium">{text}</div>

                    </div>
                ))
            }
        </div>
        // <div className="flex flex-col h-full text-white w-fit p-4  bg-black">
        //     <div className="text-xl mr-5"><GoHomeFill /></div>
        //     <div className="text-sm font-medium">Home</div>
        // </div>
    );
}
