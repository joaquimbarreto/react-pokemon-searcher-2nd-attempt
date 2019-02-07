import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

const pokemonsUrl = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {
	state = {
		pokemons: [],
		value: ""
	};

	fetchApi = () => {
		return fetch(pokemonsUrl).then(response => response.json());
	};

	componentDidMount = () => {
		this.fetchApi().then(data =>
			this.setState({
				pokemons: data
			})
		);
	};

	handleSearchChange = (e, { value }) => this.setState({ value });

	render() {
		const filteredPokemons = this.state.pokemons.filter(pokemon =>
			pokemon.name.includes(this.state.value)
		);
		return (
			<div>
				<h1>Pokemon Searcher</h1>
				<br />
				<Search
					onSearchChange={_.debounce(this.handleSearchChange, 500)}
					showNoResults={false}
				/>
				<br />
				<PokemonCollection pokemons={filteredPokemons} />
				<br />
				<PokemonForm />
			</div>
		);
	}
}

export default PokemonPage;
