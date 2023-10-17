import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsLetterWrapper">
      <div>
        <h2>Subscribe To Our Newsletter</h2>
        <p>
          Are you a true cinephile who can&#39;t get enough of the cinematic
          world? Do you want to stay in the know about all the exciting
          developments, latest releases, and behind-the-scenes insights in the
          cinematic industry? If so, you&#39;re in the right place.
        </p>
        <p>
          We&#39;re here to keep you informed and entertained. By subscribing to
          our newsletter, you&#39;ll never miss a beat when it comes to the
          movies you love.
        </p>
        <div className="newLetterEmail">
          <form>
            <label htmlFor="email">
              <input type="email" placeholder="Enter Your Email" />
            </label>
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
