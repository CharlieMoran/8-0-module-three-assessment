import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "./images/logo.jpeg";

export default class Nav extends Component {
	render() {
		return (
			<nav>
				<div id="logo-container">
					<Link className="logo" exact to="/">
						<img src={logo} alt="logo" />
					</Link>
				</div>
				<div id="leAnchor">
					<Link to="/About">Movies</Link>
					<Link to="/People">People</Link>
					<Link to="/People">Locations</Link>
				</div>
			</nav>
		);
	}
}