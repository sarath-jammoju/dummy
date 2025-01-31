import React, { Fragment } from "react";
import dummy_hero from '../assets/heroSection_Images/dummy_hero_original.webp'
import Carousel from "../components/Carousel";
import Products from "../components/Products";
import WhyChooseUs from "../components/WhyChooseUs";
import Clients from "../components/Clients";
import ReviewsData from "../components/ReviewsData";
import GoogleMapEmbed from "../components/GoogleMapEmbed";
import Dialougebox from "../components/Dialougebox";

const Computers = () => {
  return (
    <Fragment>
      <div className="HeroSection-container">
        <img src = {dummy_hero} alt='Computers Hero Section' />
        {/* <h2>Hero Section</h2> */}
      </div>
      <Carousel />
      <Products />
      {/* <WhyChooseUs /> */}
      {/* <Clients /> */}
      {/* <ReviewsData /> */}
      {/* <GoogleMapEmbed /> */}
      <Dialougebox />
    </Fragment>
  );
};

export default Computers;
