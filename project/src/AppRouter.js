// import { Routes, Route } from "react-router-dom";
// import AppRoutes from "./Config/AppRoutes";
// import Path from "./Constants/Path";

// const AppRouter = () => {
//   return (
//     <Routes>
//       {AppRoutes.map((route) => {
//         if (Path.Guard) {
//           return (
//             <Route
//               key={route.path}
//               path={route.path}
//               element={
//                 <Path.Guard>
//                   <Path.Component />
//                 </Path.Guard>
//               }
//             />
//           );
//         }
//         return (
//           <Route
//             key={route.path}
//             path={route.path}
//             Component={route.Component}
//           />
//         );
//       })}
//     </Routes>
//   );
// };
// export default AppRouter;

import { Routes, Route } from "react-router-dom";
import AppRoutes from "./Config/AppRoutes";

const AppRouter = () => {
  return (
    <Routes>
      {AppRoutes.map((route) => {
        if (route.Guard) {
          // Check for the existence of the Guard component in the route.
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
