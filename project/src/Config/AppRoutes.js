import Path from "../Constants/Path";
import Detail from "../Pages/Detail/Detail";
import HelpCenter from "../Pages/HelpCenter/HelpCenter";
import Home from "../Pages/Home/Home";
import Review from "../Pages/Review/Review";
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
  {
    path: Path.Review,
    Component: Review,
  },
  {
    path: Path.ReviewDetail,
    Component: Detail,
  },
];

export default AppRoutes;
