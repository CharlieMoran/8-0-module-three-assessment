import React, { Component } from "react";
import "./Home.css";

export default class People extends Component {
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
			`curl https://ghibliapi.herokuapp.com/people/`
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.setState({
					fetchdata: data.items,
					searchValue: "",
					toggle: false,
				});
			});
	};

	render() {
		let ghibli = this.state.fetchdata.map((ghi) => {
			return (
				<div>
					<div className="ghi">
						<div onClick={() => this.props.updateVideoObject(ghi)}>
							
						</div>
					</div>
					<div className="title">{ghi.snippet.title}</div>
				</div>
			);
		});
		return (
			<div>
				<div id="form-container">
					<form onSubmit={this.fetchGhibli}>
						<span>
							<input
								className="search"
								onInput={this.setSearch}
								placeholder="Find Your Person"
								type="text"
								id="search"
								name="search"
								value={this.state.searchValue}
								autoComplete="off"
							/>
						</span>
						<span>
							<button className="submit" type="submit">
								Submit
							</button>
						</span>
					</form>
				</div>
				<div
					id="no-results"
					style={{ display: this.state.toggle ? "block" : "none" }}
				>
					{"Not Found"}
				</div>
				<div id="display-container" className="ghibli-container">
					<div id="ghibli">{ghibli}</div>
				</div>
			</div>
		);
	}
}