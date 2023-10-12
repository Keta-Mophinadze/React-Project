import Path from "../Constants/Path";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

const AppRoutes = [
  {
    path: Path.Home,
    Component: Home,
  },
  {
    path: Path.Sign_Up,
    Component: SignUp,
  },
  {
    path: Path.Sign_In,
    Component: SignIn,
  },
];

export default AppRoutes;
