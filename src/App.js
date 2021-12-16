import "./App.css";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { Component } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

class App extends Component {
  render(){
  return (
    <div>
      <Nav />
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Movies" component={Movies} />
        <Route path="/People" component={People} />
        <Route path="/Locations" component={Locations} />
      </Switch>
        </BrowserRouter>
    </div>
  );
  }
}

export default App;