import { Routes, Route } from "react-router-dom";
import AppRoutes from "./Config/AppRoutes";

const AppRouter = () => {
  return (
    <Routes>
      {AppRoutes.map((route) => {
        if (route.Guard) {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <route.Guard>
                  <route.Component />
                </route.Guard>
              }
            />
          );
        }
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.Component />}
          />
        );
      })}
    </Routes>
  );
};

export default AppRouter;
