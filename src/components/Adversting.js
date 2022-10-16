import React from "react";

function Adversting() {
  const style = {
    Adversting: "w-full h-[100vh] flex flex-col items-center bg-[#cbbcbc]",
    first_card:
      "w-[80%] h-[150px] mt-[70px] flex flex-col justify-center items-center",
    Adversting_img: "w-[60%] h-[120px] mb-[20px]",
    text_img_wrap: "font-bold text-[20px]",
  };
  return (
    <div className={style.Adversting}>
      <div className={style.first_card}>
        <img
          className={style.Adversting_img}
          src="https://cdn.pixabay.com/photo/2018/04/25/21/11/motorcycle-3350600_960_720.png"
          alt=""
        />
        <h1 className={style.text_img_wrap}>Val Shilpovchik</h1>
      </div>
      <div className={style.first_card}>
        <img
          className={style.Adversting_img}
          src="https://svgsilh.com/svg_v2/2187580.svg"
          alt=""
        />
        <h1 className={style.text_img_wrap}>Galofka Shilpovchik</h1>
      </div>
      <div className={style.first_card}>
        <img
          className={style.Adversting_img}
          src="https://svgsilh.com/svg/1925498.svg"
          alt=""
        />
        <h1 className={style.text_img_wrap}>Gilza Shilpovkachi</h1>
      </div>
    </div>
  );
}

export default Adversting;
