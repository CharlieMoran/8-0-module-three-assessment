import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";
import People from "./components/People";
import { Component } from "react";

class App extends Component {
 constructor(){
   super()
   this.state={
     
   }
 }
  render(){
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Movies">
          <Movies />
        </Route>
        <Route path="/People">
          <People />
        </Route>
      </Switch>
      <Route path="/Locations">
          <People />
        </Route>
    </div>
  );
  }
}

export default App;