import { Link } from "react-router-dom";
import Path from "../../Constants/Path";

const NotFound = () => {
  return (
    <section>
      <div className="max-w-5xl w-full mx-auto text-center p-8 md:p-20">
        <h1 className="tracking-wide text-xl text-[#990000]">
          404 Error: It appears we&#39;ve entered a wormhole, and this page is
          lost in the vastness of interstellar space. Our search for it
          continues...
        </h1>
        <p className="text-secondary text-lg tracking-wide mt-6 cursor-pointer">
          In the meantime, you can go back to the{" "}
          <Link className="text-accent" to={Path.Home}>
            website
          </Link>{" "}
          and watch &#34;Interstellar&#34;, for instance :)
        </p>
      </div>
    </section>
  );
};
export default NotFound;
