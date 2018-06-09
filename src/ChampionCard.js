import React, { Component } from 'react';
import './App.css';

class ChampionCard extends Component{

    render(){
            let championData = this.props.championData
            
            const championImage = "https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/" + championData.image.full

        return(
            <div className="championCard">
                <img src={championImage} className="championImg" alt="" />
                <p>{championData.name}</p>
                <p>POINTS: {this.props.masteryData.championPoints}</p>
            </div>
        )
    }
}

export default ChampionCard
