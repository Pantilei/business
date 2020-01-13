import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import SomePage from "./SomePage";

import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/any" exact component={SomePage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
