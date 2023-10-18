import Path from "../Constants/Path";
import AuthGuard from "../Guard/AuthGuard";
import Detail from "../Pages/Detail/Detail";
import HelpCenter from "../Pages/HelpCenter/HelpCenter";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/PageNotFound/NotFound";
import Review from "../Pages/Review/Review";
import SignIn from "../Pages/SignIn/SignIn";
import SignOut from "../Pages/SignOut/SignOut";
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
    Guard: AuthGuard,
  },
  {
    path: Path.ReviewDetail,
    Component: Detail,
  },
  {
    path: Path.Page_Not_Found,
    Component: NotFound,
  },
  {
    path: Path.Sign_Out,
    Component: SignOut,
  },
];

export default AppRoutes;
