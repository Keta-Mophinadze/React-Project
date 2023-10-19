import "./SignOut.css";
import { useAppContext } from "../../Context/Provider";
import { signOut } from "../../Context/ActionCreators";
import { useNavigate } from "react-router-dom";
import Path from "../../Constants/Path";

const SignOut = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  return (
    <div className="mainWrapper">
      <div className="signOutWrapper">
        <h3>Would you like to leave the page?</h3>
        <button
          onClick={() => {
            dispatch(signOut());
            navigate(Path.Sign_In);
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default SignOut;
