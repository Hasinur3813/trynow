import React from "react";
import Header from "../components/Header/Header/Header";
import MainNavbar from "../components/MainNavbar/MainNavbar";
import HeroArea from "../components/HeroArea/HeroArea";

const Home = () => {
  return (
    <div className="bg-primary">
      <Header />
      <MainNavbar />
      <HeroArea />
    </div>
  );
};

export default Home;
