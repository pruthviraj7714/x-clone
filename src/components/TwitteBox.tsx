"use client";
import { ImageIcon, SmileIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRef, useState } from "react";

export default function Twitte({
  username,
  photo,
}: {
  username: string;
  photo: string;
}) {
  const [text, setText] = useState("");
  const textareaRef = useRef<any>(null);

  const maxLength = 200;
  const percentage = Math.min((text.length / maxLength) * 100, 100);

  const handleTextChange = (e: any) => {
    setText(e.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <div className="w-full flex-1 h-auto p-4 border-b border-gray-700">
      <div className="flex gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-600 flex justify-center items-center text-white">
          {photo  ? (
            <img src={photo} alt="Profile Photo" className="h-full w-full rounded-full object-cover" />
          ) : (
            username && username.length > 0 &&  username.charAt(0).toUpperCase()

          )}
        </div>
        <textarea
          ref={textareaRef}
          className="bg-transparent mt-1 text-white text-lg placeholder-gray-500 w-full h-auto outline-none resize-none"
          placeholder="What's happening?"
          autoFocus
          value={text}
          onChange={handleTextChange}
          style={{
            minHeight: "24px",
            maxHeight: "720px",
            overflow: "hidden",
          }}
        />
      </div>
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-4 text-sky-400">
          <ImageIcon className="cursor-pointer hover:text-sky-500" />
          <SmileIcon className="cursor-pointer hover:text-sky-500" />
        </div>
        <div className="flex gap-2 items-center">
          {text.length >= maxLength ? (
            <div className="h-10 w-10 border-2 text-xs p-1 font-sans border-red-500 text-red-500 flex justify-center items-center">
              {text.length - maxLength === 0
                ? 0
                : `-${text.length - maxLength}`}
            </div>
          ) : (
            <div
              className="relative h-10 w-10 flex items-center justify-center font-sans text-xs p-1"
              style={{
                borderWidth: "3px",
                borderStyle: "solid",
                borderRadius: "50%",
                borderImage: `conic-gradient(skyblue ${percentage}%, gray ${percentage}%) 1`,
              }}
            >
              {maxLength - text.length}
            </div>
          )}
          <Button className="rounded-full bg-sky-400 hover:bg-sky-500 px-5 py-2 text-white font-semibold">
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}
