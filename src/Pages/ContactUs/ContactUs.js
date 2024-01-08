const ContactUs = () => {
  return (
    <section>
      <div>
        <h2>Contact Us</h2>

        <div className="max-w-80 w-full text-dark">
          <form>
            <div className="flex flex-col">
              <label htmlFor="email">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="outline-none rounded-sm w-full py-2 px-2 placeholder:tracking-wide text-sm mt-2 mb-6"
                />
              </label>
            </div>
            <div>
              <label htmlFor="text">
                <textarea
                  cols="30"
                  rows="15"
                  placeholder="Let us know what you think..."
                  className="outline-none rounded-sm w-full pt-1 px-2 placeholder:tracking-wide text-sm"
                ></textarea>
              </label>
            </div>
          </form>
          <button className="text-dark bg-accent hover:bg-hover py-1 px-4 rounded-sm mt-2">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
