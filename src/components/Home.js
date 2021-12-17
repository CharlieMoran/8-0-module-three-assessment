import React, { Component } from "react";
import {withRouter} from "react-router";
import "./Home.css";

class Home extends Component {
render() {
	return(
		<div className="home">
			<div>
			<h1 className="welcome" id="welcome">Welcome To GhibliApp</h1>
			</div>
		</div>
		)
	}
}

export default withRouter(Home);