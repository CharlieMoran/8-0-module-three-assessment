import React, { Component } from "react";
import "./Locations.css";
import {withRouter} from 'react-router';

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
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.setState({
					fetchdata: data.locations,
					searchValue: "",
					toggle: false,
				});
			});
	};
	
	hide = () => {
		let locations = document.getElementById("locations");
		if (locations.style.display === "block") {
		  this.setState({
			hide: "on",
		  });
		  locations.style.display = "none";
		  return (
			console.log("🐶"),
			(
			  <div
				id="locations"
				style={{
				  display: "none",
				}}
			  ></div>
			)
		  );
		} else if (locations.style.display === "none") {
		  this.setState({
			hide: "off",
		  });
		  locations.style.display = "block";
		  
	}
};

	render() {
	
			return (
				<div>
					<h1 className="list" id="list">List of Locations</h1>
					<div className="loc-btn" id="loc-btn">
						<button onClick={this.hide} className="loc-btn" id="loc-btn">Show Locations</button>
					</div>
					
					<div className="locations" id="locations" style={{
           				 display: "none",
        					  }}>
								  {this.state.searchValue}
					</div>
				</div>
			);
	}
}

export default withRouter(Locations);