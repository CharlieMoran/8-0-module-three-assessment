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
				<div id="leMovies">
					<Link to="/Movies">Movies</Link>
					<div id="lePeople">
					<Link to="/People">People</Link>
					</div>
					<div id="leLocations">
					<Link to="/Locations">Locations</Link>
					</div>
					
				</div>
			</nav>
		);
	}
}