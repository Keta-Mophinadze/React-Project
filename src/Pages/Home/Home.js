import ContactInfo from "../../Components/Contact-Info/ContactInfo";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Slider from "../../Components/Slider/Slider";
import FilmOfTheDay from "../../Components/FilmOfTheDay/FilmOfTheDay";
import CookieConsent from "react-cookie-consent";
import FilmList from "../../Components/FilmList/FilmList";

const Home = () => {
  return (
    <main>
      <div>
        <CookieConsent
          location="bottom"
          expires={182}
          style={{ background: "#00111d", padding: "12px 4px" }}
          buttonText="I GOT YOU"
          buttonStyle={{
            color: "#00192a",
            width: "100px",
            height: "30px",
            background: "#EBCD23",
            fontSize: "13px",
            border: "none",
            borderRadius: "2px",
          }}
        >
          To enhance your browsing experience, our website uses cookies. By
          continuing to use our site, you agree to our cookie policy.
        </CookieConsent>
        <Slider />
        <FilmOfTheDay />
        <NewsLetter />
        <FilmList />
        <ContactInfo />
      </div>
    </main>
  );
};

export default Home;
