"use client";
import Twitte from "@/components/TwitteBox";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [userInfo, setUserInfo] = useState<any>({});
  const [posts, setPosts] = useState<any[]>([]);
  const [Loading, setLoading] = useState(true);
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

  if (Loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black">
        <div className="w-16 h-16 border-4 border-sky-400 border-t-transparent border-t-4 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="border-l border-r p-2 border-gray-400 bg-black text-white flex flex-col">
      <Twitte photo={userInfo?.photo} username={userInfo?.username} />
      Hi there
    </div>
  );
}
