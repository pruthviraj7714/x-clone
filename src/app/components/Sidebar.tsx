import { BellIcon, Bookmark, House, Search, User2 } from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="max-h-screen w-[275px] p-4 mr-8">
      <div className="flex flex-col justify-center items-start">
        <div>
          <Image
            src={"/logo.jpg"}
            alt="Logo"
            className="mb-6 cursor-pointer p-1 hover:bg-slate-800 hover:rounded-full"
            width={50}
            height={50}
          />
          <div className="flex gap-4 my-4 text-xl font-semibold px-3 py-3 cursor-pointer hover:bg-gray-800 hover:rounded-full">
            <House className="text-white" />
            <span className="hidden lg:block">Home</span>
          </div>
          <div className="flex gap-4 my-4 text-xl font-semibold px-3 py-3 cursor-pointer hover:bg-gray-800 hover:rounded-full">
            <Search className="text-white" />
            <span className="hidden lg:block">Explore</span>
          </div>
          <div className="flex gap-4 my-4 text-xl font-semibold px-3 py-3 cursor-pointer hover:bg-gray-800 hover:rounded-full">
            <BellIcon className="text-white" />
            <span className="hidden lg:block">Notifications</span>
          </div>
          <div className="flex gap-4 my-4 text-xl font-semibold px-3 py-3 cursor-pointer hover:bg-gray-800 hover:rounded-full">
            <Bookmark className="text-white" />
            <span className="hidden lg:block">Bookmarks</span>
          </div>
          <div className="flex gap-4 my-4 text-xl font-semibold px-3 py-3 cursor-pointer hover:bg-gray-800 hover:rounded-full">
            <User2 className="text-white" />
            <span className="hidden lg:block">Profile</span>
          </div>
          <div className="text-white flex justify-center items-center bg-sky-500 text-center rounded-full font-semibold px-8 py-3 mt-4 cursor-pointer hover:bg-sky-400">
            Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
