import React, { Component } from 'react';
import './App.css';
import Masonry from 'react-masonry-component';
import ChampionCard from './ChampionCard'
import SummonerInfo from './SummonerInfo'

class Result extends Component{

    state = {
        masteryData: {
            championId: ""
        }
    }

    async componentWillMount(){

        this.ChampionCardJSX = []
        
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
        this.setState({
            championData,
            masteryData
        })
      }

    
    render(){

        let ChampionCardJSX = []
        let personalMasteryData = this.state.masteryData
        for(let i = 0; i < personalMasteryData.length; i++){
            let championId = personalMasteryData[i].championId;
            ChampionCardJSX.push(
                <ChampionCard 
                    championId={championId}
                    masteryData={personalMasteryData[i]}
                    championData={this.state.championData.data[championId]}
                />
            )
        }

        if (this.props.keyCode == null){
            this.contenutoJSX = null;
            this.SummonerInfo = null
        }


        return(
            <div className="results">
                <SummonerInfo 
                    summonerData={this.props.summonerData}
                    keyCode={this.props.keyCode}
                />
                <Masonry
                    elementType={'ul'}
                >
                    {ChampionCardJSX}
                </Masonry>
            </div>
        )
    }
}

export default Result

