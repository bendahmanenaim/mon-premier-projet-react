import React from "react";
import Navigation from "../components/Navigation";
//import Logo from "../components/Logo";
import Offres from "../components/Offres";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Thumb from "../components/Thumb";

const Home = () => {
  return (
    <div>
      
      <Navigation />
      <Banner/>
      <Offres/>
      <Thumb/>
      <Footer/>
      
    </div>
  );
};

export default Home;