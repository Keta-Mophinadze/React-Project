import { useState } from "react";
import ContactUs from "../ContactUs/ContactUs";
import FAQ from "../FAQ/FAQ";
import "./HelpCenter.css";

const HelpCenter = () => {
  const [showFAQ, setShowFAQ] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [faqClicked, setFAQClicked] = useState(false);
  const [contactClicked, setContactClicked] = useState(false);

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
    setShowContact(false);
    setFAQClicked(true);
    setContactClicked(false);
  };

  const toggleContact = () => {
    setShowContact(!showContact);
    setShowFAQ(false);
    setContactClicked(true);
    setFAQClicked(false);
  };

  return (
    <div className="helpCenterWrapper">
      <h2>Help Center</h2>
      <div className="helpCenterText">
        <p>
          Welcome to our Help Center! We understand that you may have questions,
          encounter issues, or simply need guidance on how to make the most of
          our platform. That&#39;s where our Help Center comes in.
        </p>
      </div>
      <div className="helpCenterText">
        <p>
          This Help Center is your go-to resource for finding answers to common
          questions, troubleshooting issues, and discovering how to navigate and
          utilize our website effectively. Whether you&#39;re a new user just
          getting started or a seasoned veteran looking to explore advanced
          features, you&#39;ll find valuable information here.
        </p>
      </div>

      <div className="btnWrapper">
        <button
          className={`btn ${faqClicked && "btn-clicked"}`}
          onClick={toggleFAQ}
        >
          FAQ
        </button>
        <button
          className={`btn ${contactClicked && "btn-clicked"}`}
          onClick={toggleContact}
        >
          Contact Us
        </button>
      </div>

      {showFAQ && <FAQ />}
      {showContact && <ContactUs />}
    </div>
  );
};

export default HelpCenter;
