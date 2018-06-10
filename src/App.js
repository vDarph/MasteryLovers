import React, { Component } from 'react';
import './App.css';
import Result from './Result'

class App extends Component {
  
  state = {
      keyCode: "RGAPI-6082c292-31df-4165-9a93-ae2ad53f4529",
      query: "",
      summonerData: {
      id: ""
      }
  }

  async componentWillMount(){
    let endPoint = 
            "https://euw1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&champListData=image&dataById=true&api_key=" 
            + this.state.keyCode;
    let fetched = await fetch(endPoint);
    let championData = await fetched.json();
    this.setState({
      championData
    });
  }

  async handleSearch(){
    let endPoint = "https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + this.state.query + "?api_key=" + this.state.keyCode;
    let fetched = await fetch(endPoint);
    let summonerData = await fetched.json();
    this.setState({
      summonerData
    });
  }

  handleKey(event) {
    let searched = event.target.value;
    this.setState({
      query: searched
    });
  }

  enterPressed(event) {
    var code = event.keyCode || event.which;
    if(code === 13) { 
      this.refs.btnSearch.click();
    } 
  }  
  
  render() {
    let resultJSX = null

    if (this.state.summonerData.id !== ""){
      resultJSX = 
        <Result 
          keyCode={this.state.keyCode} 
          summonerData={this.state.summonerData}
          championData={this.state.championData}
        />
    }

    return (
      <div className="summoners">
        <div className="search-form">
          <input 
            className="search-form_input"
            placeholder="Submit a Summoner Name..."
            onKeyDown={this.enterPressed.bind(this)}
            onChange={this.handleKey.bind(this)}
          />
          <button 
            ref="btnSearch"
            className="search-form_button"
            onClick={this.handleSearch.bind(this)}
          > 
            SEARCH
          </button>
        </div>
        {resultJSX}
      </div>
    );
  }
}

export default App;
