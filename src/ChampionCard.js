import React, { Component } from 'react';
import './App.css';

class ChampionCard extends Component{

    

    render(){
            let championData = this.props.championData
            
            const championImage = "https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/" + this.props.championData.image.full

        return(
            <div>
                <img src={championImage} alt=""/>
                <p>{this.props.championId} {this.props.championData.name}</p> 
            </div>
        )
    }
}

export default ChampionCard
