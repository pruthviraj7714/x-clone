"use client";
import { ImageIcon, SmileIcon, XIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRef, useState } from "react";
import data from "@emoji-mart/data";
import { Picker, PickerStyles } from "emoji-mart";

export default function Twitte({
  username,
  photo,
}: {
  username: string;
  photo: string;
}) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);
  const filePickerRef = useRef<HTMLInputElement>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const addEmoji = (emojiObject: any) => {
    console.log(emojiObject); // This should now log the emoji object
    setText((prevText) => prevText + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const maxLength = 200;
  const percentage = Math.min((text.length / maxLength) * 100, 100);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(URL.createObjectURL(file));
      setFileType(file.type.startsWith("video") ? "video" : "image");
    }
  };

  const removeSelectedFile = () => {
    setSelectedFile(null);
    setFileType(null);
  };

  return (
    <div className="w-full flex-1 h-auto p-4 border-b border-gray-700">
      <div className="text-pink-800">{selectedFile}</div>
      <div className="flex gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-600 flex justify-center items-center text-white">
          {photo ? (
            <img
              src={photo}
              alt="Profile Photo"
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            username && username.length > 0 && username.charAt(0).toUpperCase()
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
          <ImageIcon
            onClick={() => filePickerRef.current?.click()}
            className="cursor-pointer hover:text-sky-500"
          />
          <input
            type="file"
            ref={filePickerRef}
            hidden
            accept="image/*,video/*"
            onChange={handleFileChange}
          />
          <SmileIcon
            className="cursor-pointer hover:text-sky-500"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          />
        </div>
        <div className="flex gap-2 items-center">
          {text.length >= maxLength ? (
            <div className="h-10 w-10 border-2 text-xs p-1 font-sans border-red-500 text-red-500 flex justify-center items-center">
              {`-${text.length - maxLength}`}
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

      {selectedFile && (
        <div className="relative mt-4">
          <XIcon
            className="cursor-pointer absolute right-3 top-3 z-10 bg-gray-800 text-white rounded-full p-1"
            onClick={removeSelectedFile}
          />
          {fileType === "image" ? (
            <img
              src={selectedFile}
              alt="Selected"
              className="w-full object-contain rounded-lg"
            />
          ) : (
            <video
              src={selectedFile}
              controls
              className="w-full object-contain rounded-lg"
            />
          )}
        </div>
      )}
    </div>
  );
}
