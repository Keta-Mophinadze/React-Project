import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import "./SignIn.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BarLoader } from "react-spinners";
import { SignInFetch } from "../../API/Auth";
import { useAppContext } from "../../Context/Provider";
import { signInAction } from "../../Context/ActionCreators";
import Path from "../../Constants/Path";

const SignIn = () => {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  function inputFunc(e) {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const SignInHandler = (e) => {
    e.preventDefault();
    setIsPending(true);
    SignInFetch(user)
      .then((data) => {
        dispatch(signInAction(data.token));
        navigate(Path.Review);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsPending(false);
      });
  };

  const location = useLocation();
  return (
    <div className="SignUpWrapper">
      {location?.state?.success && (
        <p className="congratsText">
          Congrats! You have successfully joined. Please, sign in.
        </p>
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
                onChange={inputFunc}
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
                onChange={inputFunc}
                type="password"
                name="password"
                placeholder="Enter Your Password"
              />
            </label>
          </div>

          <button onClick={SignInHandler} className="SignUpBTN">
            Sign In
          </button>
        </form>
      </div>
      {isPending && (
        <div className="loaderContainer">
          <h2>
            <BarLoader color="#EBCD23" />
          </h2>
        </div>
      )}
      {error && <h2>404: {error}</h2>}
    </div>
  );
};

export default SignIn;
