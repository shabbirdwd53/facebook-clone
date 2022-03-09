import React from "react";
import CreatePost from "./CreatePost";

const Feed = () => {
  return (
    <div className="flex-grow h-screen pt-6 mr-6 bg-red-100 overflow-y-auto">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-xl">
        {/* Create Box */}
        <CreatePost />
        {/* Posts */}
      </div>
    </div>
  );
};

export default Feed;
