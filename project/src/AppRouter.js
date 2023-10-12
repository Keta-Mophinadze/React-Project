import { Routes, Route } from "react-router-dom";
import AppRoutes from "./Config/AppRoutes";

const AppRouter = () => {
  return (
    <Routes>
      {AppRoutes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.Component} />
      ))}
    </Routes>
  );
};
export default AppRouter;
