export default function PostBox({
    image,
    video,
  }: {
    image: string;
    video: string;
  }) {
    return (
      <div className="w-full h-full flex flex-col p-4 border-b border-gray-700">
        <div className="flex items-center mb-2">
          <div className="h-10 w-10 rounded-full bg-gray-600 mr-3"></div>
          <div>
            <span className="font-semibold text-white">Manu Aroroa</span>{" "}
            <span className="text-gray-400">@username</span>{" "}
            <span className="text-gray-400">2 hours ago</span>
          </div>
        </div>
        <div className="mb-3 text-white">
          This is text
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
            <video
              controls
              className="w-full h-auto rounded-lg"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        <div className="flex justify-between items-center">
          {/* Add reaction buttons, share icons, etc. here */}
          <div className="flex gap-4 text-gray-400">
            <span className="cursor-pointer">Like</span>
            <span className="cursor-pointer">Comment</span>
            <span className="cursor-pointer">Share</span>
          </div>
        </div>
      </div>
    );
  }
  