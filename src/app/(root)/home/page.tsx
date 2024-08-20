"use client";
import PostBox from "@/components/PostBox";
import Twitte from "@/components/TwitteBox";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [userInfo, setUserInfo] = useState<any>({});
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

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
  const getPosts = async () => {
    try {
      const res = await axios.get("/api/post/all");
      setPosts(res.data.posts);
      console.log(res.data);
    } catch (error: any) {
      toast({
        title: error.response.data.message,
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    getUserInfo();
    getPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black">
        <div className="w-16 h-16 border-4 border-sky-400 border-t-transparent border-t-4 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="border-l border-r p-2 border-gray-400 bg-black text-white flex flex-col">
      <Twitte photo={userInfo?.photo} username={userInfo?.username} />
      <PostBox
        image="https://i.pinimg.com/474x/48/04/66/4804665f6810994c650a7172ba81ad39.jpg"
        video=""
      />
      <PostBox
        image="https://i.pinimg.com/474x/bf/dd/3c/bfdd3ce8b53717e0d94cd8c0f6a3f5e7.jpg"
        video=""
      />
      <PostBox
        image="https://i.pinimg.com/474x/2c/b4/34/2cb434075bc8058d829a46400e962599.jpg"
        video=""
      />
      <PostBox
        image="https://i.pinimg.com/236x/d2/39/89/d239895bee7a6ad28a25524e5547856d.jpg"
        video=""
      />
      <PostBox image="" video="https://x.com/i/status/1825441643387826401" />
    </div>
  );
}
