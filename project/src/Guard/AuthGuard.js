import React from "react";
import { useAppContext } from "../Context/Provider";
import { Navigate } from "react-router-dom";
import Path from "../Constants/Path";

const AuthGuard = ({ children }) => {
  const {
    state: { isUserLoggedIn },
  } = useAppContext();

  if (!isUserLoggedIn) {
    return (
      <div>
        <Navigate to={Path.Sign_In} />
        <h1>Please, sign in first to have access.</h1>
        {/* I can not see this */}
      </div>
    );
  }
  return <>{children}</>;
};

export default AuthGuard;
