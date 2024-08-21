import { HeartIcon, Reply, Share } from "lucide-react";

export default function PostBox({
  text,
  username,
  profilePhoto,
  image,
  video,
}: {
  text : string,
  username : string,
  profilePhoto: string
  image: string;
  video: string;
}) {
  return (
    <div className="w-full h-full flex flex-col p-4 border-b border-gray-700">
      <div className="flex items-center mb-2">
        <div className="h-10 w-10 rounded-full bg-gray-600 mr-3">
          <img src={profilePhoto} alt="profile" className="h-full w-full rounded-full object-contain" />
        </div>
        <div>
          <span className="font-semibold text-white">Tony Stark</span>{" "}
          <span className="text-gray-400">@{username}</span>{" "}
          <span className="text-gray-400">2 hours ago</span>
        </div>
      </div>
      <div className="mb-3 font-normal text-white">
        {text}
      </div>
      {image && (
        <div className="mb-3">
          <img
            src={image}
            alt="Post Image"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      )}
      {video && (
        <div className="mb-3">
          <video controls className="w-full h-auto rounded-lg">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <div className="flex justify-between items-center px-2">
        <span className="cursor-pointer">
          <HeartIcon size={20} />
        </span>
        <span className="cursor-pointer">
          <Reply size={20} />
        </span>
        <span className="cursor-pointer">
          <Share size={20} />
        </span>
      </div>
    </div>
  );
}
