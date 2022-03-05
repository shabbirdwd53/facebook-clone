import React from "react";
import Sidebaritem from "./Sidebaritem";
import { ImUsers } from "react-icons/im";
import { MdGroups } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="py-2 pl-2 max-w-xl xl:min-w-[320px] bg-blue-300">
      <Sidebaritem Icon={ImUsers} value="Friends" />
      <Sidebaritem Icon={ImUsers} value="Friends" />
    </div>
  );
};

export default Sidebar;
