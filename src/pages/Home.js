import React from "react";
import Adversting from "../components/Adversting";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const Home = () => {
  const style = {
    Home: "relative",
  };
  return (
    <div className={style.Home}>
      <Navbar />
      <Banner />
      <Adversting />
    </div>
  );
};

export default Home;
