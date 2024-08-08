import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-evenly items-center mt-16 max-h-screen">
      <div className="bg-black">
        <Image
          src={"/logo.jpg"}
          alt="Logo"
          className="border-2 border-transparent bg-transparent "
          width={580}
          height={580}
        />
      </div>
      <div className="flex flex-col  mt-10">
        <h1 className="font-extrabold text-7xl">Happening now</h1>
        <h4 className="font-extrabold text-4xl mt-10 text-left">Join today.</h4>
        <button className="px-10 py-2 mt-6 bg-sky-600 text-white rounded-full w-[360px] hover:bg-sky-500">
          Create Account
        </button>
        <p className="text-sm text-gray-400 font-extralight max-w-[360px]">
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
        <div className="flex flex-col justify-cente my-10r">
          <h1 className="font-bold text-white my-5">
            Already have an account?
          </h1>
          <button className="bg-transparent text-sky-500 font-semibold border border-gray-300 max-w-[330px] rounded-full px-10 py-2 hover:bg-gray-950">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
