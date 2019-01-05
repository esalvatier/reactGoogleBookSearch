import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Saved} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/search" component={Search} />
          </Wrapper>
          <Footer />
        </div>
        </Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
