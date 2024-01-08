import { useState } from "react";
import ContactUs from "../ContactUs/ContactUs";
import FAQ from "../FAQ/FAQ";

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
    <section>
      <div className="py-10 mx-8 text-secondary">
        <h2 className="font-bold text-2xl mb-2">Help Center</h2>
        <div className="max-w-7xl w-full">
          <p className="md:text-lg">
            Welcome to our Help Center! We understand that you may have
            questions, encounter issues, or simply need guidance on how to make
            the most of our platform. That&#39;s where our Help Center comes in.
          </p>
        </div>
        <div className="max-w-7xl w-full">
          <p className="md:text-lg">
            This Help Center is your go-to resource for finding answers to
            common questions, troubleshooting issues, and discovering how to
            navigate and utilize our website effectively. Whether you&#39;re a
            new user just getting started or a seasoned veteran looking to
            explore advanced features, you&#39;ll find valuable information
            here.
          </p>
        </div>

        <div className="max-w-md flex flex-col md:flex-row justify-between items-center my-12 mx-auto">
          <button
            className={`w-40 h-8 rounded-sm font-base tracking-normal cursor-pointer text-lg mb-2 md:mb-0 ${
              faqClicked && "bg-accent text-primary"
            }`}
            onClick={toggleFAQ}
          >
            FAQ
          </button>
          <button
            className={`w-40 h-8 rounded-sm font-base tracking-normal cursor-pointer text-lg  ${
              contactClicked && "bg-accent text-primary"
            }`}
            onClick={toggleContact}
          >
            Contact Us
          </button>
        </div>

        {showFAQ && <FAQ />}
        {showContact && <ContactUs />}
      </div>
    </section>
  );
};

export default HelpCenter;
