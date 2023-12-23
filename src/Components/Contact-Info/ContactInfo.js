const ContactInfo = () => {
  return (
    <section>
      <div>
        <div
          className="bg-no-repeat bg-cover bg-center w-full h-[470px] flex justify-center items-center"
          style={{ backgroundImage: "url(1.jpg)" }}
        >
          <h1 className="text-accent text-center text-4xl md:text-6xl">
            Contact
          </h1>
        </div>
        <div className="max-w-[300px] mt-4 w-full mx-auto flex flex-col justify-between items-center">
          <p className="text-secondary flex flex-col items-center">
            {" "}
            General
            <a
              className="text-secondary border-b-2 border-transparent hover:border-accent  mt-1 transition-colors duration-300"
              href="mailto:hello@mubi.com"
            >
              hello@mubi.com
            </a>
          </p>
          <p className="my-6 text-secondary flex flex-col items-center">
            {" "}
            Support
            <a
              className="text-secondary border-b-2 border-transparent hover:border-accent  mt-1 transition-colors duration-300"
              href="mailto:support@mubi.com"
            >
              support@mubi.com
            </a>
          </p>
          <p className="text-secondary flex flex-col items-center">
            {" "}
            Jobs
            <a
              className="text-secondary border-b-2 border-transparent hover:border-accent  mt-1 transition-colors duration-300"
              href="mailto:jobs@mubi.com"
            >
              jobs@mubi.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
