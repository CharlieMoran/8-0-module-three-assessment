import React, { Component } from "react";
import "./Locations.css";

export default class Locations extends Component {
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
					<div className="ghi">
						<div onClick={style=""}>
							
						</div>
					</div>
					<h1>List of Locations</h1>
					<button onClick={this.hide}>Show Locations</button>
					<div className="locations">{this.state.searchValue}</div>
				</div>
			);
	}
}