import React from "react";

const Sidebaritem = ({ Icon, value }) => {
  return (
    <div className="flex items-center space-x-2 py-4 pl-4 bg-red-300 hover:bg-gray-200 rounded-l-xl cursor-pointer ">
      <Icon className="h-8 w-8" />
      <p className="hidden sm:inline-flex font-medium">{value}</p>
    </div>
  );
};

export default Sidebaritem;
