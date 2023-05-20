import React from "react";
import { RiHome7Line } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
//import { GrNotification } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import { RiFileListLine } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import {RiNotificationLine} from 'react-icons/ri'
import logo from '../assets/Logo.png'
const Sidebar = () => {
  return (
    <div className="hidden lg:block w-1/4 p-8">
      <ul className="text-2xl grid">
        <li className="py-3 px-8 rounded-full flex space-x-2">
          <img src={logo} alt="" className="w-8"/>
        </li>
        <li className="py-3 px-8 rounded-full flex space-x-2 ">
          <RiHome7Line className="mt-1"/>
          <span>Home</span>
        </li>
        <li className="py-3 px-8 rounded-full flex space-x-2">
          <RiNotificationLine className="mt-1" />
          <span>Notifications</span>
        </li>
        <li className="py-3 px-8 rounded-full flex space-x-2">
          <CiMail className="mt-1"/>
          <span>Messages</span>
        </li>
        <li className="py-3 px-8 rounded-full flex space-x-2">
          <RiFileListLine className="mt-1"/>
          <span>List</span>
        </li> 
        <li className="py-3 px-8 rounded-full flex space-x-2">
          <HiOutlineUser className="mt-1" /> 
          <span>Profile</span> 
        </li> 
        <li className="py-3 px-8 rounded-full flex space-x-2">
          <CgMoreO className="mt-1"/>
          <span>More</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
