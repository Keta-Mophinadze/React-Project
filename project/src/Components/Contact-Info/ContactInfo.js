import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <section>
      <div>
        <div className="imageWrapper">
          <h1>Contact</h1>
        </div>
        <div className="emailWrapper">
          <p>
            {" "}
            General
            <a href="mailto:hello@mubi.com">hello@mubi.com</a>
          </p>
          <p>
            {" "}
            Support
            <a href="mailto:support@mubi.com">support@mubi.com</a>
          </p>
          <p>
            {" "}
            Jobs
            <a href="mailto:jobs@mubi.com">jobs@mubi.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
