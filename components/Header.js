import React from "react";
import Menu from "../public/icons/menu.png";
import Logo from "../public/icons/logo.png";
import Search from "../public/icons/search.png";
import Profile from "../public/icons/Profile.png";
import Notif from "../public/icons/notification.png";
import Image from "next/image";
// Redux stuff
import { useDispatch } from "react-redux";
import { shownav } from "@/features/Nav/navSlice";
const Header = () => {
  const dispatch = useDispatch();
  const handleMenu = () => {
    if (window.innerWidth < 1024) {
      dispatch(shownav());
    }
  };
  return (
    <div className="flex justify-between items-center shadow p-5 sticky top-0 z-50 bg-white">
      <section className="flex items-center gap-10">
        <span onClick={handleMenu}>
          <Image src={Menu} alt="menu" />
        </span>
        <span>
          <Image src={Logo} alt="logo" />
        </span>

        <div className=" hidden border border-[#1D242D] md:flex items-center h-[50px] md:w-[40%]  lg:w-[544px] p-1  rounded">
          <span>
            <Image src={Search} width="24" alt="search " />
          </span>
          <input
            placeholder="Search"
            className="rounded h-[40px] w-[510px] px-2 outline-none z-10"
          />
        </div>
      </section>
      <section className="flex items-center gap-4">
        <span>
          <Image src={Notif} alt="notification-bell" />
        </span>
        <span>
          <Image src={Profile} alt="user-image" />
        </span>
      </section>
    </div>
  );
};

export default Header;
