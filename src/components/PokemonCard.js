import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
	toggleImage = event => {
		if (event.target.src === this.props.pokemon.sprites.front) {
			return (event.target.src = this.props.pokemon.sprites.back);
		} else {
			return (event.target.src = this.props.pokemon.sprites.front);
		}
	};

	render() {
		const pokemonHp = this.props.pokemon.stats.find(
			pokemon => pokemon.name === "hp"
		);
		return (
			<Card>
				<div>
					<div className="image">
						<img
							key={this.props.pokemon.id}
							src={this.props.pokemon.sprites.front}
							onClick={this.toggleImage}
							alt="oh no!"
						/>
					</div>
					<div className="content">
						<div className="header">{this.props.pokemon.name}</div>
					</div>
					<div className="extra content">
						<span>
							<i className="icon heartbeat red" />
							{pokemonHp.value}
						</span>
					</div>
				</div>
			</Card>
		);
	}
}

export default PokemonCard;
