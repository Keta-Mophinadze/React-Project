import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div>
      <h2>Contact Us</h2>

      <div className="contactUsWrapper">
        <form>
          <div className="formWrapper">
            <label htmlFor="email">Your Email</label>
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="formWrapper">
            <label htmlFor="text">Your Message</label>
            <textarea
              cols="30"
              rows="15"
              placeholder="Let us know what you think..."
            ></textarea>
          </div>

        </form>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default ContactUs;
