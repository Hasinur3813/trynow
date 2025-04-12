import React from "react";
import Header from "../components/Header/Header/Header";
import MainNavbar from "../components/MainNavbar/MainNavbar";
import HeroArea from "../components/HeroArea/HeroArea";
import CategoriesSection from "../components/CategoriesSection/CategoriesSection";
import FlashSell from "../components/FlashSell/FlashSell";
import AllProductsSection from "../components/AllProductsSection/AllProductsSection";
import BestSellingSection from "../components/BestSellingSection/BestSellingSection";
import DiscountedPrice from "../components/DiscountedPrice/DiscountedPrice";
import NewArrival from "../components/NewArrival/NewArrival";

const Home = () => {
  return (
    <div className="bg-primary">
      <Header />
      <MainNavbar />
      <HeroArea />
      <CategoriesSection />
      <FlashSell />
      <AllProductsSection />
      <BestSellingSection />
      <DiscountedPrice />
      <NewArrival />
    </div>
  );
};

export default Home;
