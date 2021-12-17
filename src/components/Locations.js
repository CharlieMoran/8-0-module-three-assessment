import React, { Component } from "react";
import {withRouter} from "react-router";
import "./Locations.css";

class Locations extends Component {
	constructor() {
		super();

		this.state = {
			searchValue: "",
			fetchdata: [],
			toggle: true,
		};
	}

	setSearch = (e) => {
		this.setState({
			searchValue: e.target.value,
		});
	};

	fetchGhibli = (e) => {
		e.preventDefault();
		fetch(
			`curl https://ghibliapi.herokuapp.com/locations/`
		)
			.then((res) => { res.json();
			})
			.then((data) => {
				data.forEach((location) => {
					this.setState({
						fetchdata: [...this.state.locations,
						<li>
							<p>Name: {location.name}</p>
							<p>Climate: {location.climate}</p>
							<p>Terrain: {location.terrain}</p>
						</li>
						],
						searchValue: "",
						toggle: false,
					});
				})
				
			});
	};

	hide = () => {
		this.setState({toggle: !this.state.toggle})
	}

	render() {
	
			return (
				<div>
					<h1 className="list" id="list">List of Locations</h1>
					<div className="loc-btn" id="loc-btn">
						<button onClick={this.hide} className="loc-btn" id="loc-btn">{this.state.toggle ? "Hide Locations" : "Show Locations"}</button>
					</div>
					
					<div className="locations" id="locations" style={{
           				 display: "none",
        					  }}>
								  {this.state.toggle ? <ul>{this.state.fetchdata}</ul>: ""}
					</div>
				</div>
			);
	}
}

export default withRouter(Locations);