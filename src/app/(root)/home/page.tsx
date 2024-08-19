"use client";
import Twitte from "@/components/Twitte";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [userInfo, setUserInfo] = useState<any>({});

  const { toast } = useToast();
  const getUserInfo = async () => {
    try {
      const res = await axios.get("/api/user/info");
      setUserInfo(res.data.user);
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
  }, []);

  return (
    <div className="border-l border-r p-2 border-gray-400 bg-black text-white flex flex-col">
      <Twitte />
      Hi there
    </div>
  );
}
