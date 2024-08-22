import { useState } from "react";
import PostBox from "./PostBox";

export default function ProfileTabs({
  posts,
  photo,
  username,
}: {
  posts: any[];
  photo: string;
  username: string;
}) {
  const Tabs = ["Posts", "Replies", "Likes"];
  const [activeTab, setActiveTab] = useState<any>("Posts");
  return (
    <div className="flex flex-col w-full px-2">
      <div className="flex justify-between items-center px-3">
        {Tabs.map((t) => (
          <div
            key={t}
            onClick={() => {
              setActiveTab(t);
            }}
            className={`cursor-pointer px-12 py-2 hover:bg-white/5 ${
              activeTab === t
                ? "text-white font-semibold border-b-4 border-sky-500"
                : "text-gray-600"
            }`}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="w-full">
        {activeTab === "Posts" && (
          <div
            className={`flex justify-center items-center ${
              activeTab !== "Posts" ? "hidden" : "visible"
            }`}
          >
            <div className="flex flex-col w-full">
              {posts &&
                posts.length > 0 &&
                posts.map((post: any) => (
                  <PostBox
                    key={post.id}
                    text={post.text}
                    username={username}
                    profilePhoto={photo}
                    image={post.image}
                    video={post.video}
                    createdAt={post.createdAt}
                    likes={post.likes}
                    comments={post.comments}
                  />
                ))}
            </div>
          </div>
        )}
        {activeTab === "Replies" && (
          <div
            className={`flex justify-center items-center ${
              activeTab !== "Replies" ? "hidden" : "visible"
            }`}
          >
            No Replies on any posts yet
          </div>
        )}
        {activeTab === "Likes" && (
          <div
            className={`flex justify-center items-center ${
              activeTab !== "Likes" ? "hidden" : "visible"
            }`}
          >
            You didn't Liked Any Posts yet
          </div>
        )}
      </div>
    </div>
  );
}
