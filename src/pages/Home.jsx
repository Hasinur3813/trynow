import React from "react";
import Header from "../components/Header/Header/Header";
import MainNavbar from "../components/MainNavbar/MainNavbar";
import HeroArea from "../components/HeroArea/HeroArea";
import CategoriesSection from "../components/CategoriesSection/CategoriesSection";

const Home = () => {
  return (
    <div className="bg-primary">
      <Header />
      <MainNavbar />
      <HeroArea />
      <CategoriesSection />
    </div>
  );
};

export default Home;
