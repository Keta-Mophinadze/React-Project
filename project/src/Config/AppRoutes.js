import Path from "../Constants/Path";
import HelpCenter from "../Pages/HelpCenter/HelpCenter";
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
  {
    path: Path.Help_Center,
    Component: HelpCenter,
  },
];

export default AppRoutes;
