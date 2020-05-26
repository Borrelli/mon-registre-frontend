import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { routes } from "./routes";

export const Router = () => {
  return (
    <BrowserRouter basename={"/"}>
      <Switch>
        {routes.map((route) => (
          <Route key={route.title} exact path={route.url} component={route.component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};
