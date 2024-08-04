import Image from "next/image";

export default function Loading() {
    return(
        <div className="min-h-screen flex justify-center items-center bg-black">
            <Image src={"/logo.jpg"} alt="Logo" width={100} height={100} />
        </div>
    )
}