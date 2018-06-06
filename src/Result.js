import React, { Component } from 'react';
import './App.css';
import ChampionCard from './ChampionCard'
import SummonerInfo from './SummonerInfo'

class Result extends Component{

    state = {
        masteryData: {
            championId: ""
        }
    }

    async componentWillMount(){
        
        let endPoint = 
            "https://euw1.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/" 
            + this.props.summonerData.id 
            + "?api_key=" 
            + this.props.keyCode;
        let fetched = await fetch(endPoint);
        let masteryData = await fetched.json();

        endPoint = 
            "https://euw1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&champListData=image&dataById=true&api_key=" 
            + this.props.keyCode;
        fetched = await fetch(endPoint);
        let championData = await fetched.json();
        console.log(championData)
        this.setState({
            championData,
            masteryData
        })
      }

    
    render(){

        let ChampionCardJSx = []
        let personalMasteryData = this.state.masteryData
        console.log(personalMasteryData)
        for(let i = 0; i < personalMasteryData.length; i++){
            let championId = personalMasteryData[i].championId;
            ChampionCardJSx.push(
                <ChampionCard 
                    championId={championId}
                    masteryData={personalMasteryData[i]}
                    championData={this.state.championData.data[championId]}
                />
            )
        }

        if (this.props.keyCode == null){
            this.contenutoJSX = null
        }

        return(
            <div>
                <SummonerInfo />
                {ChampionCardJSx}
            </div>
        )
    }
}

export default Result

