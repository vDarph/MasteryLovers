import React, { Component } from 'react';
import './App.css';

class ChampionCard extends Component{

    

    render(){



        return(
            <div>
            <p>CHAMPION CARD {this.props.masteryData}</p>
            </div>
        )
    }
}

export default ChampionCard
