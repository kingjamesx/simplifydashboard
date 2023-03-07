import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { data } from "@/data";
import Darrow from "../public/icons/arrow-down.png";
import Uarrow from "../public/icons/arrow-up.png";
import { useDispatch } from "react-redux";
import { shownav } from "@/features/Nav/navSlice";
const SideBar = () => {
  const dispatch = useDispatch();
  const handleClick = (i) => {
    const arr = [2, 3, 4, 5, 8];
    if (!arr.includes(i)) {
      dispatch(shownav());
    }
  };
  return (
    <div>
      <p className="text-[#1D242D] font-bold">POS Monitoring</p>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id} className="mt-[22px] text-[#909DAD]">
              <Link href={item.link} onClick={() => handleClick(item.id)}>
                {" "}
                <List
                  icon={item.icon}
                  title={item.title}
                  submenu={item.subBar}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;

export const List = ({ icon, title, submenu }) => {
  const [isopen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isopen);
    console.log("opened");
  };
  return (
    <>
      <div onClick={handleOpen} className="flex items-center gap-2">
        <span>
          <Image src={icon} alt={title} />
        </span>
        <span>{title}</span>
        {submenu && (
          <span>
            {isopen ? (
              <Image src={Uarrow} alt="up-arrow" />
            ) : (
              <Image src={Darrow} alt="down-arrow" />
            )}
          </span>
        )}
      </div>

      {isopen && (
        <div>
          <ul className="ml-7">
            {submenu?.map((item, index) => {
              return (
                <li key={index} className="mt-2">
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
