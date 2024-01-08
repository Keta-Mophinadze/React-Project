const NewsLetter = () => {
  return (
    <section>
      <div className="p-8 my-16">
        <div className="max-w-3xl w-full mx-auto text-center text-secondary">
          <h2 className="text-xl tracking-wide text-accent mb-2">
            Subscribe To Our Newsletter
          </h2>
          <p className="tracking-wide leading-7 text-lg">
            Are you a true cinephile who can&#39;t get enough of the cinematic
            world? Do you want to stay in the know about all the exciting
            developments, latest releases, and behind-the-scenes insights in the
            cinematic industry? If so, you&#39;re in the right place.
          </p>
          <p className="tracking-wide leading-7 mb-3 text-lg">
            We&#39;re here to keep you informed and entertained. By subscribing
            to our newsletter, you&#39;ll never miss a beat when it comes to the
            movies you love.
          </p>
          <div>
            <form className="max-w-xl w-full mx-auto flex flex-col md:flex-row justify-center items-center">
              <label htmlFor="email">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="outline-none w-72 md:w-92 rounded-sm md:rounded-e-none pl-2 py-2 mb-3 md:mb-0"
                />
              </label>
              <button className="w-36 py-2 cursor-pointer text-base text-primary bg-accent hover:bg-hover rounded-sm md:rounded-s-none">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
