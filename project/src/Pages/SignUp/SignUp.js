import { useState } from "react";
import Path from "../../Constants/Path";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { SignUpFetch } from "../../API/Auth";
import CookieConsent from "react-cookie-consent";

const SignUp = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  function inputFunc(e) {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signUpHandler = (e) => {
    e.preventDefault();
    setIsPending(true);
    SignUpFetch(user)
      .then(() => {
        navigate(Path.Sign_In, { state: { success: true } });
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsPending(false);
      });
  };
  return (
    <div className="SignUpWrapper">
      <CookieConsent
        location="top"
        expires={182}
        style={{ background: "#00111d" }}
        buttonText="Gotcha!"
        buttonStyle={{
          color: "#00192a",
          background: "#EBCD23",
          fontSize: "13px",
          border: "none",
          borderRadius: "2px",
        }}
      >
        We use cookies to ensure you get the best experience on our website.
      </CookieConsent>

      <h3>Sign Up</h3>
      <div>
        <form>
          <div className="inputWrapper">
            <label htmlFor="userName">
              User Name
              <input
                type="text"
                name="userName"
                placeholder="Enter Your Name"
                onChange={inputFunc}
              />
            </label>
          </div>

          <div className="inputWrapper">
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={inputFunc}
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
                onChange={inputFunc}
              />
            </label>
          </div>
          {isPending && (
            <div className="loaderContainer">
              <h2>
                <BarLoader color="#EBCD23" />
              </h2>
            </div>
          )}
          {error && <h2>404: {error}</h2>}

          <button onClick={signUpHandler} className="SignUpBTN">
            Sign Up
          </button>
        </form>
      </div>
      <div className="accountWrapper">
        <p>Already have an account?</p>
        <Link className="SignInLink" to={Path.Sign_In}>
          Log In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
