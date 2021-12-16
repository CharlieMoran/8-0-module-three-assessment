import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "./images/logo.jpeg";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

export default class Nav extends Component {
	render() {
		return (
			<nav>
				<div id="logo-container">
					<BrowserRouter>
					<Link className="logo" to="/">
						<img src={logo} alt="logo" />
					</Link>
					</BrowserRouter>
				</div>
				<div id="leAnchor">
					<BrowserRouter>
					<Link to="/Movies">Movies</Link>
					<Link to="/People">People</Link>
					<Link to="/Locations">Locations</Link>
					</BrowserRouter>
				</div>
			</nav>
		);
	}
}