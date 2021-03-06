import React from "react";
import { Redirect, Route } from "react-router-dom";
import getDataFromLocalhost from "../config/GetLocalhostData";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        getDataFromLocalhost("user") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
