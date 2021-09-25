import React from "react";
import { Switch, Redirect } from "react-router-dom";

import CustomRoute from "./CustomRoute";

import { HomePage, MostPage, MoviePage } from "../pages";

const Routes = () => {
  return (
    <Switch>
      <CustomRoute path="/home" exact component={HomePage} />
      <CustomRoute path="/most" exact component={MostPage} />
      <CustomRoute path="/movie" exact component={MoviePage} />
      <Redirect from="*" to="/home" />
    </Switch>
  );
};

export default Routes;
