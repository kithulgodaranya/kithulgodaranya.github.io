import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Events from "./Events";
import Home from "./Home";
import NavBar from "./NavBar";

const App = () => (
  <>
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route path="/events" component={Events} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} exact />
        </Switch>
      </main>
    </Router>
  </>
);

export default App;
