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
        <Navigate to={Path.Sign_Up} state={{ from: "review" }} />
      </div>
    );
  }
  return <>{children}</>;
};

export default AuthGuard;
