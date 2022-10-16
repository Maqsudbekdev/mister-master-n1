import React from "react";

function Banner() {
  const style = {
    banner: "w-full h-[100vh] banner_back flex items-center justify-center",
    texts: "mt-[390px]",
    banner_name: "font-extrabold text-[25px] pb-[10px] text-white",
    banner_username: "pb-[10px] font-bold text-[18px] text-white",
    banner_username2: "font-bold text-[18px] text-white",
  };
  return (
    <div className={style.banner}>
      <div className={style.texts}>
        <h1 className={style.banner_name}>MISTER-MASTER_N1</h1>
        <p className={style.banner_username}>
          Direktor: <span>Mahmudjon Mamadjanov</span>
        </p>
        <p className={style.banner_username2}>
          Kasbi: <span>Val shilpovkachi</span>
        </p>
      </div>
    </div>
  );
}

export default Banner;
