import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";
import { Component } from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

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
      <BrowserRouter>
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
          <Locations />
        </Route>
        </BrowserRouter>
    </div>
  );
  }
}

export default App;