import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BarLoader } from "react-spinners";
import { SignInFetch } from "../../API/Auth";
import { useAppContext } from "../../Context/Provider";
import { signInAction } from "../../Context/ActionCreators";
import Path from "../../Constants/Path";

const SignIn = () => {
  const { dispatch } = useAppContext();
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
    <section>
      <div className="max-w-80 w-full mx-auto px-2">
        {location?.state?.success && (
          <p className="text-lg mb-2 text-accent text-center">
            Congrats! You have successfully joined. Please, sign in.
          </p>
        )}
        <h3 className="text-secondary text-xl font-bold mb-8 text-center">
          Sign In
        </h3>

        <div className=" text-secondary">
          <div className="w-full bg-dark mb-4 flex justify-center items-center rounded-sm cursor-pointer p-3">
            <span className="mr-2">Continue with </span>
            <FaGoogle />
          </div>
          <div className="w-full bg-dark mb-4 flex justify-center items-center rounded-sm cursor-pointer p-3">
            <span className="mr-2">Continue with </span>
            <FaFacebook />
          </div>
          <div className="w-full bg-dark mb-4 flex justify-center items-center rounded-sm cursor-pointer p-3">
            <span className="mr-2">Continue with </span>
            <FaApple />
          </div>
        </div>

        <div className="mt-6 mb-3">
          <p className="relative text-center text-secondary text-sm">
            <span className="absolute left-0 top-1/2 w-1/3 border-b border-gray-300"></span>
            OR
            <span className="absolute right-0 top-1/2 w-1/3 border-b border-gray-300"></span>
          </p>
        </div>
        <div>
          <form>
            <div className="mb-4">
              <label htmlFor="userName" className="text-secondary">
                User Name
              </label>
              <input
                onChange={inputFunc}
                type="text"
                name="userName"
                placeholder="Enter Your Name"
                className="w-full outline-none rounded-sm h-10 pl-2 mt-1 placeholder:text-sm placeholder:text-input"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="text-secondary">
                Password
              </label>
              <input
                onChange={inputFunc}
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="w-full outline-none rounded-sm h-10 pl-2 mt-1 placeholder:text-sm placeholder:text-input "
              />
            </div>

            <button
              onClick={SignInHandler}
              className="w-full h-10 rounded text-sm my-5 bg-accent hover:bg-hover text-primary tracking-wide cursor-pointer"
            >
              Sign In
            </button>
          </form>
        </div>
        {isPending && (
          <div className="flex justify-center items-center">
            <h2>
              <BarLoader color="#EBCD23" />
            </h2>
          </div>
        )}
        {error && <h2 className="text-secondary text-center">{error}</h2>}
      </div>
    </section>
  );
};

export default SignIn;
