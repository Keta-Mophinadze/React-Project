import { useAppContext } from "../../Context/Provider";
import { signOut } from "../../Context/ActionCreators";
import { useNavigate } from "react-router-dom";
import Path from "../../Constants/Path";

const SignOut = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  return (
    <section>
      <div className="px-4">
        <div className="max-w-xl w-full mx-auto text-center text-secondary text-base md:text-lg bg-dark p-16 rounded-sm mt-16">
          <h3>Would you like to leave the page?</h3>
          <button
            onClick={() => {
              dispatch(signOut());
              navigate(Path.Sign_In);
            }}
            className="max-w-52 w-full rounded-sm text-primary bg-accent hover:bg-hover mt-6 py-1 px-4"
          >
            Sign Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignOut;
