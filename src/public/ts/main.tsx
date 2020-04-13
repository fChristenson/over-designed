import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Page } from "./Original";
import { Page2 } from "./Refactor";

const App = () => (
  <BrowserRouter>
    <Route exact path="/" render={() => <Page />} />
    <Route exact path="/2" render={() => <Page2 />} />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
