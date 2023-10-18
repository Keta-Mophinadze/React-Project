import React from "react";
import { useAppContext } from "../../Context/Provider";
import { signOut } from "../../Context/ActionCreators";
import { useNavigate } from "react-router-dom";
import Path from "../../Constants/Path";

const SignOut = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Log Out</h1>
      <button
        onClick={() => {
          dispatch(signOut());
          navigate(Path.Sign_In);
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default SignOut;
