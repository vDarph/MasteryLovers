import React, { Component } from 'react';
import './App.css';

class ChampionCard extends Component{

    render(){
        let championData = this.props.championData 
        const championImage = "https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/" + championData.image.full
       
        let championLevel = this.props.masteryData.championLevel 
        console.log(championData.name, championLevel)          
        let levelBanner
            
        switch (true) {
            case championLevel === 1:
                levelBanner = process.env.PUBLIC_URL + "/Assets/Img/masteryLevel/1.png";
                break;
            case championLevel === 2:
                levelBanner = process.env.PUBLIC_URL + "/Assets/Img/masteryLevel/2.png";
                break;
            case championLevel == 3:
                levelBanner = process.env.PUBLIC_URL + "/Assets/Img/masteryLevel/3.png";
                break;
            case championLevel == 4:
                levelBanner = process.env.PUBLIC_URL + "/Assets/Img/masteryLevel/4.png";
                break;
            case championLevel == 5:
                levelBanner = process.env.PUBLIC_URL + "/Assets/Img/masteryLevel/5.png";
                break;
            case championLevel == 6:
                levelBanner = process.env.PUBLIC_URL + "/Assets/Img/masteryLevel/6.png";
                break;
            case championLevel == 7:
                levelBanner = process.env.PUBLIC_URL + "/Assets/Img/masteryLevel/7.png";
                break;
            default:
                levelBanner = process.env.PUBLIC_URL + "/Assets/Img/masteryLevel/1.png";
                break;
        }
        const levelBannerStyle = {
            width: "100px",
            height: "200px",
            backgroundImage: "url(" + levelBanner + ")",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            margin: "0 auto",
            marginTop: "15px"
        }

        return(
            <div className="championCard">
                <div style={levelBannerStyle}>
                    <img src={championImage} className="championImg" alt="" />
                </div>
                <div className="championInfo">
                    <p className="championCardInfo">{championData.name}</p>
                    <span className="masteryPoints_icon"></span> <p className="masteryPoints">{this.props.masteryData.championPoints}</p>
                </div>

            </div>
        )
    }
}

export default ChampionCard
