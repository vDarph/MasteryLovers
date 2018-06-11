import React, { Component } from 'react';
import './App.css';

class ChampionCard extends Component{

    render(){
<<<<<<< HEAD
        const championImage = "https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/" + championData.image.full
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
        let championData = this.props.championData 
        let championLevel = this.props.masteryData.championLevel           
        let levelBanner
            
        switch (true) {
            case championLevel === 1:
                levelBanner = process.env.PUBLIC_URL + "/Assets/Img/masteryLevel/1.png";
                break;
            case championLevel === 2:
                levelBanner = process.env.PUBLIC_URL + "/Assets/Img/masteryLevel/2.png";
                break;
            case championLevel === 3:
                levelBanner = process.env.PUBLIC_URL + "/Assets/Img/masteryLevel/3.png";
                break;
            case championLevel === 4:
                levelBanner = process.env.PUBLIC_URL + "/Assets/Img/masteryLevel/4.png";
                break;
            case championLevel === 5:
                levelBanner = process.env.PUBLIC_URL + "/Assets/Img/masteryLevel/5.png";
                break;
            case championLevel === 6:
                levelBanner = process.env.PUBLIC_URL + "/Assets/Img/masteryLevel/6.png";
                break;
            case championLevel === 7:
                levelBanner = process.env.PUBLIC_URL + "/Assets/Img/masteryLevel/7.png";
                break;
            default:
                levelBanner = process.env.PUBLIC_URL + "/Assets/Img/masteryLevel/1.png";
                break;
        }
=======
            let championData = this.props.championData 
            let championLevel = this.props.masteryData.championLevel           
            const championImage = "https://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/" + championData.image.full
            let levelBanner
            console.log(this.props)
            
            /*switch(true){
                case championLevel == 1:
                    levelBanner = process.env.PUBLIC_URL + "/Assets/Img/masteryLevel/1.png";
                    break;
                case championLevel == 2:
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
            }*/
>>>>>>> parent of 937f20a... fix cambio summoner, bug prima ricerca

        return(
            <div className="championCard">
                <div className="championMastery">
                    <img src={championImage} className="championImg" alt="" />
                </div>
<<<<<<< HEAD
                <p className="championCardInfo">{championData.name}</p>
                <span className="masteryPoints_icon"></span> <p>{this.props.masteryData.championPoints}</p>
=======
                <p>{championData.name}</p>
                <p>POINTS: {this.props.masteryData.championPoints}</p>
>>>>>>> parent of 937f20a... fix cambio summoner, bug prima ricerca
            </div>
        )
    }
}

export default ChampionCard
