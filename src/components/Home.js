import React, { Component } from "react";
import "./Home.css";
import {withRouter} from 'react-router';

class Home extends Component {
	constructor() {
		super();
		this.state = {
		};
	}

render() {
	return(
	<div>	
		<div></div>
		<h1 className="welcome" id="welcome">Welcome To GhibliApp</h1>
	</div>)
}
}

export default withRouter(Home);