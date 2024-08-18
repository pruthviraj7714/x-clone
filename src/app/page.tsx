"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import SignInDialog from "@/components/SignInDialog";
import CreateAccountDialog from "@/components/CreateAccountDialog";

export default function Home() {
  const [isCreateAccountDialogOpen, setIsCreateAccountDialogOpen] =
    useState<boolean>(false);
  const [isSignInOpen, setIsSignInOpen] = useState<boolean>(false);
  const session = useSession();
  const router = useRouter();

  if (session && session.status === "loading") {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black">
        <div className="animate-pulse">
          <Image src={"/logo.jpg"} alt="Logo" width={200} height={200} />
        </div>
      </div>
    );
  }

  if (session && session.status === "authenticated") {
    router.push("/home");
    return;
  }

  return (
    <div className="flex justify-evenly items-center py-11 bg-black h-screen">
      <div className="bg-transparent">
        <Image
          src="/logo.jpg"
          alt="Logo"
          className="border-0"
          width={580}
          height={580}
        />
      </div>

      <div className="flex flex-col mt-10 space-y-6">
        <h1 className="font-extrabold text-7xl text-white">Happening now</h1>
        <h4 className="font-extrabold text-4xl text-white mt-4 text-left">
          Join today.
        </h4>

        <Button
          onClick={() => {
            setIsCreateAccountDialogOpen(true);
          }}
          className="mt-6 bg-sky-600 text-white rounded-full w-[360px] py-3 hover:bg-sky-500"
        >
          Create Account
        </Button>
        <CreateAccountDialog
          open={isCreateAccountDialogOpen}
          onOpenChange={setIsCreateAccountDialogOpen}
        />

        <p className="text-sm mt-4 text-gray-400 font-light max-w-[360px]">
          By signing up, you agree to the{" "}
          <span className="text-blue-500 underline cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-blue-500 underline cursor-pointer">
            Privacy Policy
          </span>
          , including Cookie Use.
        </p>

        <div className="mt-10">
          <h1 className="font-bold text-white mb-4">
            Already have an account?
          </h1>
          <Button
            onClick={() => setIsSignInOpen(true)}
            className="bg-transparent text-sky-500 font-semibold border border-gray-500 rounded-full px-10 py-2 hover:bg-gray-900 transition-all"
          >
            Sign in
          </Button>
          <SignInDialog open={isSignInOpen} onOpenChange={setIsSignInOpen} />
        </div>
      </div>
    </div>
  );
}
