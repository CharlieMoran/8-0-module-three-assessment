import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "./images/logo.jpeg";

export default class Nav extends Component {
	render() {
		return (
			<nav>
				<div id="logo-container">
					<Link className="logo" to="/">
						<img src={logo} alt="logo" className="photo"/>
					</Link>
				</div>
				<div id="leAnchor">
					<Link to="/Movies"><strong>Movies</strong></Link>
					<Link to="/People"><strong>People</strong></Link>
					<Link to="/Locations"><strong>Locations</strong></Link>
				</div>
			</nav>
		);
	}
}