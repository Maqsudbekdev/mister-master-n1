import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [click, setclick] = useState(false);
  const style = {
    navbar: "m-[8px] w-full h-[60px] fixed flex items-center justify-between",
    nav_logo: "pl-[20px] font-extrabold text-white",
    menu: "mr-[20px] font-extrabold text-white lg:hidden",
    sidebar: `z-10 origin-top-right w-full h-[550px] bg-green-600 absolute right-0 top-[80px] 
        ${
          click ? "translate-x-[0] scale-[1]" : "translate-x-[500px] scale-[0] "
        } duration-[0.3s]`,
  };
  return (
    <div className={style.navbar}>
      <h1 className={style.nav_logo}>MISTER_MASTER_N1</h1>
      <div className={style.menu}>
        <AiOutlineMenu onClick={() => setclick(click ? false : true)} />
      </div>
      <div className={style.sidebar}></div>
    </div>
  );
}

export default Navbar;
