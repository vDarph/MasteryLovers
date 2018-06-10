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

        this.setState({
          totalMasteryInt: data
        });
      }

    render(){
        let summonerLevel = this.props.summonerData.summonerLevel
        let levelBorder

        switch(true){
            case (summonerLevel < 30):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/001.png";
                break;
            case (summonerLevel < 50):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/030.png";
                break;
            case (summonerLevel < 75):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/050.png";
                break;
            case (summonerLevel < 100):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/075.png";
                break;
            case (summonerLevel < 125):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/100.png";
                break;
            case (summonerLevel < 150):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/125.png";
                break;
            case (summonerLevel < 175):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/150.png";
                break;
            case (summonerLevel < 200):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/175.png";
                break;
            case (summonerLevel < 225):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/200.png";
                break;
            case (summonerLevel < 250):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/225.png";
                break;
            case (summonerLevel < 275):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/250.png";
                break;
            case (summonerLevel < 300):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/275.png";
                break;
            case (summonerLevel < 325):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/300.png";
                break;
            case (summonerLevel < 350):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/325.png";
                break;
            case (summonerLevel < 375):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/350.png";
                break;
            case (summonerLevel < 400):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/375.png";
                break;
            case (summonerLevel < 425):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/400.png";
                break;
            case (summonerLevel < 450):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/425.png";
                break;
            case (summonerLevel < 475):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/450.png";
                break;
            case (summonerLevel < 500):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/475.png";
                break;
            case (summonerLevel < 520):
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/500.png";
                break;
            default:
                levelBorder = process.env.PUBLIC_URL + "/Assets/Img/summonerLevel/001.png";
                break;    
        }
        
        const profileIcon = "http://ddragon.leagueoflegends.com/cdn/8.11.1/img/profileicon/" + this.props.summonerData.profileIconId + ".png"

        let profileIconStyle = {
            backgroundImage: "url(" + profileIcon + ")",
            width: '125px',
            height: '125px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            borderRadius: "50%",
            textAlign: 'center'
        };

        return(
            <div className="summonerInfo">
                <div className="profileIconContainer">
                    <div
                        style={profileIconStyle}
                    >
                        <img src={levelBorder} className="levelBorderStyle" />
                        <p className="levelStyle">{this.props.summonerData.summonerLevel}</p>
                    </div> 
                </div>
                <p className="profileInfo">{this.props.summonerData.name}</p>
                <p className="profileInfo">TOTAL MASTERY SCORE: {this.state.totalMasteryInt}</p>
            </div>
        )
    }
}

export default SummonerInfo
