import React from "react";
// import {
//   BellIcon,
//   ChipIcon,
//   InboxIcon,
//   SearchIcon,
//   UserCircleIcon,
// } from "@heroicons/react/outline";
import BellIcon from "../assests/bell.png"
import CartIcon from "../assests/cart.png"
import UserIcon from "../assests/user.png"
import SearchIcon from "../assests/search.png"


function Header() {
  return (
    <div className=" w-full py-6 bg-[#F0F5F5] items-center justify-between flex px-12">
      {/* search */}
      <div className="w-full lg:flex hidden space-x-4 items-center justify-start py-2   ">
        <img src={SearchIcon} alt="search" className="w-4 h-4"></img>
        <input
          type="text"
          placeholder="Search anything..."
          className="bg-transparent outline-none"
        />
      </div>
      {/* logo */}
      <div className="items-center w-full justify-center flex space-x-4">
        <h1 className="text-xl text-gray-900 font-medium ">MY SITE</h1>
      </div>
      {/* icons */}
      <div className="items-center justify-end space-x-6 flex w-full">
        <img src={BellIcon} alt="bell" className="w-6 h-6 cursor-pointer"></img>
        <img src={CartIcon} alt="cart" className="w-6 h-6 cursor-pointer"></img>
        <img src={UserIcon} alt="user" className="w-6 h-6 cursor-pointer"></img>
      </div>
    </div>
  );
}

export default Header;
