import React from "react";
import { Route } from "react-router-dom";

import { Header } from "../components";

const CustomRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Header />
          <Component {...props} />
        </>
      )}
    />
  );
};

export default CustomRoute;
