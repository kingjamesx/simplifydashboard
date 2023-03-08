import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
const Layout = ({ children }) => {
  const state = useSelector((state) => state.nav.state);
  return (
    <div>
      <Header />
      <section className="flex">
        <div
          className={`${
            state
              ? "fixed h-full overflow-y-scroll bg-white w-[70%] pb-28"
              : "hidden "
          }  w-[18%] p-5  lg:block `}
        >
          <SideBar />
        </div>
        <div className="w-[100%] lg:w-[82%] ">{children}</div>
      </section>
    </div>
  );
};

export default Layout;
