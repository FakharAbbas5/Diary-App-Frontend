import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { history } from "../../helpers/history";
import { routing } from "../../helpers/routing";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

const Routing = () => {
  return (
    <Router history={history}>
      <Routes>
        {routing.map(item => (
          <Route
            path={item.path}
            element={
              !item.isPrivate ? (
                <item.component />
              ) : (
                <PrivateRoute>
                  <item.component />
                </PrivateRoute>
              )
            }
            key={item.path}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default Routing;
