"use client";
import {
  BeanIcon,
  Bookmark,
  Delete,
  DeleteIcon,
  Dot,
  DotSquareIcon,
  Ellipsis,
  HeartIcon,
  Reply,
  Share,
  Trash2,
} from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export default function PostBox({
  text,
  username,
  profilePhoto,
  image,
  video,
  createdAt,
  likes,
  comments,
}: {
  text: string;
  username: string;
  profilePhoto: string;
  image: string;
  video: string;
  createdAt: Date;
  likes: any[];
  comments: any[];
}) {
  const now = new Date();
  const seconds = Math.floor(
    (now.getTime() - new Date(createdAt).getTime()) / 1000
  );
  let relativeTime;

  if (seconds < 60) {
    relativeTime = `${seconds}s`;
  } else if (seconds < 3600) {
    relativeTime = `${Math.floor(seconds / 60)}m`;
  } else if (seconds < 86400) {
    relativeTime = `${Math.floor(seconds / 3600)}h`;
  } else if (seconds < 604800) {
    relativeTime = `${Math.floor(seconds / 86400)}d`;
  } else if (new Date(createdAt).getFullYear() === now.getFullYear()) {
    relativeTime = format(new Date(createdAt), "MMM d");
  } else {
    relativeTime = format(new Date(createdAt), "yyyy");
  }

  const router = useRouter();
  return (
    <div className="w-full flex flex-col p-4 border-b border-gray-700 hover:bg-white/5 transition-colors duration-200">
      <div className="flex justify-between mb-2">
        <div
          className="w-10 h-10 rounded-full bg-gray-600 mr-4 overflow-hidden cursor-pointer"
          onClick={() => router.push(`/${username}`)}
        >
          {profilePhoto ? (
            <img
              src={profilePhoto}
              alt="profile"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex justify-center items-center text-white text-xl">
              {username?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex justify-start items-center mb-1">
            <span
              onClick={() => router.push(`/${username}`)}
              className="font-semibold text-white cursor-pointer hover:underline"
            >
              {username}
            </span>
            <span className="ml-2 text-gray-400">@{username}</span>
            <span className="text-gray-400">
              <Dot size={15} />
            </span>
            <span className="text-gray-400 text-sm">{relativeTime}</span>
          </div>
          <div className="mb-3 font-normal text-md text-slate-200">{text}</div>
          {image && (
            <div className="mb-3">
              <img
                src={image}
                alt="Post Image"
                className="w-full h-auto rounded-xl object-cover shadow-md"
              />
            </div>
          )}
          {video && (
            <div className="mb-3">
              <video controls className="w-full h-auto rounded-xl shadow-md">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex justify-center items-center text-gray-600 cursor-pointer hover:text-sky-600 hover:bg-sky-600/20 p-1 w-8 h-8 rounded-full">
              <Ellipsis size={20} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44 bg-black hover:bg-black text-white text-lg">
            <DropdownMenuItem className="hover:bg-pink-400">
              <div className="flex gap-1.5 font-semibold text-red-500 ">
                <Trash2 size={20} />
                <span>Delete</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex justify-between items-center px-2 text-gray-400">
        <span className="cursor-pointer flex items-center transition-colors duration-150 hover:text-pink-500">
          <HeartIcon
            className="hover:bg-pink-600/30 hover:rounded-full p-1"
            size={25}
          />
          <span>{likes?.length || 0}</span>
        </span>
        <span className="cursor-pointer flex items-center transition-colors duration-150 hover:text-sky-500">
          <Reply
            className="hover:bg-sky-600/30 hover:rounded-full p-1"
            size={25}
          />
          <span>{comments?.length || 0}</span>
        </span>
        <span className="cursor-pointer transition-colors duration-150 hover:text-sky-500">
          <Share
            className="hover:bg-sky-600/30 hover:rounded-full p-1"
            size={25}
          />
        </span>
        <span className="cursor-pointer transition-colors duration-150 hover:text-sky-500">
          <Bookmark
            className="hover:bg-sky-600/30 hover:rounded-full p-1"
            size={25}
          />
        </span>
      </div>
    </div>
  );
}
