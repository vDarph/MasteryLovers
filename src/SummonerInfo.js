import React, { Component } from 'react';
import './App.css';

class SummonerInfo extends Component{

    state= {
        totalMasteryInt: ""
    }

    async componentWillMount(){
        const endPoint = "https://euw1.api.riotgames.com/lol/champion-mastery/v3/scores/by-summoner/" + this.props.summonerData.id + "?api_key=" + this.props.keyCode;
        const fetched = await fetch(endPoint);
        const data = await fetched.json();
        console.log("total masteries are", data)
        console.log(data)
        this.setState({
          totalMasteryInt: data
        });
      }

    render(){

        const profileIcon = "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/profileicon/" + this.props.summonerData.profileIconId + ".png"

        return(
            <div className="summonerInfo">
                <img src={profileIcon} className="championImg" alt="" />
                <span className="profileInfo">{this.state.totalMasteryInt}</span>
                <span className="profileInfo">{this.props.summonerData.summonerLevel}</span>
                <span className="profileInfo">{this.props.summonerData.name}</span>
            </div>
        )
    }
}

export default SummonerInfo
