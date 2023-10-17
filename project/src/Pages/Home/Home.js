import React from "react";
import ContactInfo from "../../Components/Contact-Info/ContactInfo";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Slider from "../../Components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <NewsLetter />
      <ContactInfo />
    </div>
  );
};

export default Home;
