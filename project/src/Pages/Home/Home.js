import React from "react";
import ContactInfo from "../../Components/Contact-Info/ContactInfo";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Slider from "../../Components/Slider/Slider";
import FilmOfTheDay from "../../Components/FilmOfTheDay/FilmOfTheDay";

const Home = () => {
  return (
    <div>
      <Slider />
      <FilmOfTheDay />
      <NewsLetter />
      <ContactInfo />
    </div>
  );
};

export default Home;
