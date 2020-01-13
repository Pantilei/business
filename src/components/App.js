import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";
import Footer from "./Footer";
import SomePage from "./SomePage";

import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Router history={history}>
          <Route path="/" exact component={Home} />
          <Route path="/any" exact component={SomePage} />
        </Router>
        <Footer />
      </div>
    );
  }
}
export default App;
