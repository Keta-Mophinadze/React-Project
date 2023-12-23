import { Link } from "react-router-dom";
import Path from "../../Constants/Path";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section>
      <div className="errorWrapper">
        <h1>
          404 Error: It appears we&#39;ve entered a wormhole, and this page is
          lost in the vastness of interstellar space. Our search for it
          continues...
        </h1>
        <p>
          In the meantime, you can go back to the{" "}
          <Link className="webLink" to={Path.Home}>
            website
          </Link>{" "}
          and watch &#34;Interstellar&#34;, for instance :)
        </p>
      </div>
    </section>
  );
};
export default NotFound;
