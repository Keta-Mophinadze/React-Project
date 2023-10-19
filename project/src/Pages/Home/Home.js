import React from "react";
import ContactInfo from "../../Components/Contact-Info/ContactInfo";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Slider from "../../Components/Slider/Slider";
import FilmOfTheDay from "../../Components/FilmOfTheDay/FilmOfTheDay";
import CookieConsent from "react-cookie-consent";

const Home = () => {
  return (
    <div>
      <CookieConsent
        location="bottom"
        expires={182}
        style={{ background: "#00111d", padding: "12px 4px" }}
        buttonText="I GOT YOU"
        buttonStyle={{
          color: "#00192a",
          fontWeight: "900",
          width: "100px",
          height: "30px",
          background: "#EBCD23",
          fontSize: "13px",
          border: "none",
          borderRadius: "2px",
        }}
      >
        We use cookies to ensure you get the best experience on our website.
      </CookieConsent>
      <Slider />
      <FilmOfTheDay />
      <NewsLetter />
      <ContactInfo />
    </div>
  );
};

export default Home;
