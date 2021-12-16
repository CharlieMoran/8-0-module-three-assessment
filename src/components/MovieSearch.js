import React, {Component} from "react";
import Movies from "./Movies";
import ReactDom from "react-dom";
import {Route, withRouter} from "react-router-dom";

class MovieSearch extends Component{
	constructor(){
		super();
		this.state = {
			films: "",
		};
	}

componentDidMount() {
		let film = [];
		fetch(`curl https://ghibliapi.herokuapp.com/films/`)
		.then(response => {
			return response.json();
		}).then(data => {
			film = data.results.map((title) => {
				return title;
			});
			this.setState({
				films: film,
			});
		});
}

render() {
		return (
			<title state={this.state} />
		)
	}
}

export default MovieSearch;
ReactDOM.render(<MovieSearch />, document.getElementById('react-search'));