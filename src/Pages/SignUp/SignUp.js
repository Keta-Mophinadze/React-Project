import { useState } from "react";
import Path from "../../Constants/Path";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { SignUpFetch } from "../../API/Auth";

const SignUp = () => {
  const location = useLocation();

  const isFromReview = location.state && location.state.from === "review";

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
    <section>
      <div className="max-w-80 w-full mx-auto px-2">
        {isFromReview && (
          <h1 className="text-lg tracking-wide text-accent text-center mb-4">
            Registration is required for access. Please, sign up.
          </h1>
        )}

        <h3 className="text-secondary text-xl font-bold mb-8 text-center">
          Sign Up
        </h3>
        <div>
          <form>
            <div className="mb-4">
              <label htmlFor="userName" className="text-secondary">
                User Name
              </label>
              <input
                type="text"
                name="userName"
                placeholder="Enter Your Name"
                onChange={inputFunc}
                className="w-full outline-none rounded-sm h-10 pl-2 mt-1 placeholder:text-sm placeholder:text-input"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-secondary">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={inputFunc}
                className="w-full outline-none rounded-sm h-10 pl-2 mt-1 placeholder:text-sm placeholder:text-input"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-secondary">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                onChange={inputFunc}
                className="w-full outline-none rounded-sm h-10 pl-2 mt-1 placeholder:text-sm placeholder:text-input"
              />
            </div>
            {isPending && (
              <div className="flex justify-center items-center">
                <h2>
                  <BarLoader color="#EBCD23" />
                </h2>
              </div>
            )}
            {error && <h2 className="text-secondary text-center">{error}</h2>}

            <button
              onClick={signUpHandler}
              className="w-full h-10 rounded text-sm my-5 bg-accent hover:bg-hover text-primary tracking-wide cursor-pointer"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="text-secondary">
          <p className="relative text-center text-sm">
            <span className="absolute left-0 top-1/2 w-1/6 border-b border-gray-300"></span>
            Already have an account?
            <span className="absolute right-0 top-1/2 w-1/6 border-b border-gray-300"></span>
          </p>
          <Link
            to={Path.Sign_In}
            className="flex justify-center items-center w-full h-10 rounded text-sm my-5 bg-accent hover:bg-hover text-primary tracking-wide cursor-pointer"
          >
            Log In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
