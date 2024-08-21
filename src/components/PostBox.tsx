import { Dot, HeartIcon, Reply, Share } from "lucide-react";
import { format } from "date-fns";

export default function PostBox({
  text,
  username,
  profilePhoto,
  image,
  video,
  createdAt,
}: {
  text: string;
  username: string;
  profilePhoto: string;
  image: string;
  video: string;
  createdAt: Date;
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

  return (
    <div className="w-full flex flex-col p-4 border-b border-gray-700 hover:bg-white/5 transition-colors duration-200">
      <div className="flex mb-2">
        <div className="w-10 h-10 rounded-full bg-gray-600 mr-4 overflow-hidden">
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
            <span className="font-semibold text-white">{username}</span>
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
      </div>

      <div className="flex justify-between items-center px-2 text-gray-400">
        <span className="cursor-pointer hover:text-white transition-colors duration-150">
          <HeartIcon size={20} />
        </span>
        <span className="cursor-pointer hover:text-white transition-colors duration-150">
          <Reply size={20} />
        </span>
        <span className="cursor-pointer hover:text-white transition-colors duration-150">
          <Share size={20} />
        </span>
      </div>
    </div>
  );
}
