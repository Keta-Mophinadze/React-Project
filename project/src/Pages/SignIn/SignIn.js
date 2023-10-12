import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import "./SignIn.css";
import { useLocation } from "react-router-dom";

const SignIn = () => {
  const location = useLocation();
  return (
    <div className="SignUpWrapper">
      {location?.state?.success && (
        <h1>
          Congrats! You have successfully joined.
          <span>Please, sign in</span>
        </h1>
      )}
      <h3>Sign In</h3>

      <div className="iconWrapper">
        <div className="icon">
          <span>Continue with </span>
          <FaGoogle />
        </div>
        <div className="icon">
          <span>Continue with </span>
          <FaFacebook />
        </div>
        <div className="icon">
          <span>Continue with </span>
          <FaApple />
        </div>
      </div>

      <div className="pTag">
        <p>OR</p>
      </div>
      <div>
        <form>
          <div className="inputWrapper">
            <label htmlFor="userName">
              User Name
              <input
                type="text"
                name="userName"
                placeholder="Enter Your Name"
              />
            </label>
          </div>

          <div className="inputWrapper">
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
              />
            </label>
          </div>

          <button className="SignUpBTN">Sign In</button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default SignIn;
