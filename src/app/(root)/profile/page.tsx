"use client";
import ProfileTabs from "@/components/ProfileTabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { ArrowLeft, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [userInfo, setUserInfo] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const getUserInfo = async () => {
    try {
      const res = await axios.get("/api/user/info");
      setUserInfo(res.data);
      console.log(res.data);
    } catch (error: any) {
      toast({
        title: error.response.data.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black">
        <div className="w-16 h-16 border-4 border-sky-400 border-t-transparent border-t-4 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full border-l border-r border-gray-400 min-h-screen">
      <div className="h-16 bg-black flex justify-start items-center">
        <div className="flex items-center">
          <ArrowLeft
            className="ml-1.5 cursor-pointer"
            size={20}
            onClick={() => {
              router.push("/home");
            }}
          />
        </div>
        <div className="ml-6 text-md">
          <h1 className="text-lg font-bold">{userInfo.username}</h1>
          <p className="text-gray-500 text-sm">
            {userInfo.posts?.length} posts
          </p>
        </div>
      </div>
      <div className="w-full h-48 bg-gray-600">
        {userInfo.headerPhoto && (
          <img
            src={userInfo.headerPhoto}
            alt="Header Photo"
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="flex justify-between px-4 h-20">
        <div className="relative h-32 w-32 bottom-16 rounded-full bg-gray-700 border-4 border-black">
          {userInfo.photo ? (
            <img
              src={userInfo.photo}
              alt="Profile Photo"
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            <div className="h-full w-full font-semibold flex justify-center items-center text-4xl p-5 mt-1.5">
              {userInfo.username?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        <Button className="rounded-full bg-transparent border border-gray-500 font-bold mt-2">
          Edit Profile
        </Button>
      </div>
      <div className="flex flex-col justify-start p-4">
        <div>
          <h1 className="text-xl font-bold">{userInfo.username}</h1>
          <h4 className="text-gray-500 text-md">@Alpha17120</h4>
        </div>
        <div className="text-md font-normal mt-2.5">{userInfo.bio}</div>
        <div className="flex items-center text-gray-600 text-md mt-2.5">
          <Calendar size={20} />
          <p className="ml-1.5">Joined May 2023</p>
        </div>
        <div className="flex items-center text-sm text-gray-500 gap-3 mt-1.5">
          <div className="cursor-pointer hover:underline">
            <span className="font-semibold text-white">
              {userInfo.followings?.length}
            </span>{" "}
            Following
          </div>
          <div className="cursor-pointer hover:underline">
            <span className="font-semibold text-white">
              {userInfo.followers?.length}
            </span>{" "}
            Followers
          </div>
        </div>
      </div>
      <ProfileTabs
        posts={userInfo.posts}
        username={userInfo.username}
        photo={userInfo.photo}
      />
    </div>
  );
}
