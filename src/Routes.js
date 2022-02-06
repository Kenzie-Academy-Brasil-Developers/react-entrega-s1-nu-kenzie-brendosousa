import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import UserPage from "./components/UserPage";

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/userpage" component={UserPage} />
    </Router>
  );
}
