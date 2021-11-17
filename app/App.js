import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dash from "./dashboard/dashboard";
export const Samplecontext = createContext();

const Main = () => {
  return (
    <Samplecontext.Provider value={{ data: "something" }}>
      <Router>
        <Switch>
          <Route path="/sample" component={Sample} />
          <Route path="*" component={Sample} />
        </Switch>
      </Router>
    </Samplecontext.Provider>
  );
};

export default Main;

const Sample = () => {
  return <h1>hello</h1>;
};
