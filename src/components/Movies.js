import React, {Component} from "react";

export default class Movies extends Component {
	constructor(){
		super();
		this.state= {
		}
	}
	render(){
		let moobies = this.props.state.film;
		let optionItems = moobies.map((ghi) =>
		<option key={ghi.title}>{ghi.title}</option>
		);
		return (
			<div>
				<h1 className="prompt-text" id="prompt-text">Select a Movie</h1>
				<select>
					{optionItems}
				</select>
			</div>
		)
	}
}