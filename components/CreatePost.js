import Image from "next/image";
import React from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";

const CreatePost = () => {
  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
      <div className="flex p-4 space-x-2 items-center">
        <Image
          src="https://avatars.dicebear.com/api/open-peeps/:seed.svg"
          height={40}
          s
          width={40}
          className="rounded-full cursor-pointer"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4"
            type="text"
            placeholder={`What's on your mind, Shabbir Dawoodi?`}></input>
        </form>
      </div>
      <div className="flex justify-evenly">
        <div className="flex items-center">
          <HiOutlineVideoCamera className="h-8 w-8 text-gray-500" />
          <p>Live</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
