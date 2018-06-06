import React, { Component } from 'react';
import './App.css';

class SummonerInfo extends Component{

    state= {
        totalMasteryInt: ""
    }

    async handleSearch(){
        const endPoint = "https://euw1.api.riotgames.com/lol/champion-mastery/v3/scores/by-summoner/" + this.props.summonerData.id + "?api_key=" + this.state.key;
        const fetched = await fetch(endPoint);
        const data = await fetched.json();
        console.log("total masteries are", data)
        this.setState({
          totalMasteryInt: data
        });
      }

    render(){

        const profileIcon = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/" + this.props.summonerData.profileIconId + ".png"

        return(
            <div className="summonerInfo">
                <img src={profileIcon} className="championImg" alt="" />
                <span>{this.state.totalMasteryInt}</span>
                <span>{this.props.summonerData.summonerLevel}</span>
                <p>{this.props.summonerData.name}</p>
            </div>
        )
    }
}

export default SummonerInfo
