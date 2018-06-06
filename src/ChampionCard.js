import React, { Component } from 'react';
import './App.css';

class ChampionCard extends Component {



    render() {
        const championImage = "https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/" + this.props.championData.image.full

        return (
            <div className="championCard">
                <img src={championImage} alt="" />
                <p>{this.props.championData.name}</p>
                <p>Points {this.props.masteryData.championPoints}</p>
            </div>
        )
    }
}

export default ChampionCard
