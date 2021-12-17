import React, {Component} from "react";
import {withRouter} from "react-router";
import film from "./MovieSearch";

class Movies extends Component {
	constructor(){
		super();
		this.state= {
			films: film,
			moobies: [],
			movies: {},
			output: "",
		}
	}
	componentDidMount() {
		fetch(`curl https://ghibliapi.herokuapp.com/films/`)
		.then(response => response.json())
		.then(films => {
			this.setState({ movies: films});
			films.forEach((movie) => {
			let firstMovies = this.state.movies;
			firstMovies[movie.title] = movie;
			this.setState({
				moobies: [...this.state.moobies,
				<option value={movie.title}>{movie.title}</option>,
			],
				movies: firstMovies,
			});
		})
			
		});
}

selection = (e) => {
	if (e.target.value === "") {
		this.setState({output: ""});
	} else {
		this.setState({
			output: (
			<div className="center">
				<h1>Title: {this.state.movies[e.target.value].title}</h1>
				<p>
					Release Date: {this.state.movies[e.target.value].release_date}
				</p>
				<p>
					Description: {this.state.movies[e.target.value].description}
				</p>
			</div>)
		})
	}
}

render(){
	return (
			<div className="bg" id="bg">
				<div className="center">
			<h1 className="prompt-text">Select a Movie</h1>
			<select className="center" onChange={this.selection}>
				<option value=""></option>
				{this.state.moobies}
			</select>
				{this.state.output}
			</div>
			</div>
		)
	}
}

export default withRouter(Movies);