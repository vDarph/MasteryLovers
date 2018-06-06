import React, { Component } from 'react';
import './App.css';
import Result from './Result'

class App extends Component {
  
  state = {
     key: "RGAPI-598b98cf-61d3-4a0f-ba7b-f96c0bfda25a",
     query: "",
      data: {
      accountId: "",
      id: "",
      name: "",
      profileIconId: "",
      revisionDate: "",
      summonerLevel: ""
    }
  }

  async handleSearch(){
    const endPoint = "https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/" + this.state.query + "?api_key=" + this.state.key;
    const fetched = await fetch(endPoint);
    const data = await fetched.json();
    this.setState({
      data: data
    });
    console.log("this are summoner data", data)
  }

  handleKey(event) {
      let searched = event.target.value;
      this.setState({
        query: searched
      });
      console.log(searched)
  }

  enterPressed(event) {
    var code = event.keyCode || event.which;
    if(code === 13) { 
      this.refs.btnSearch.click();
    } 
  }  
  
  render() {
    let resultJSX = null
    if (this.state.data.id !== ""){
      resultJSX = 
        <Result 
          keyCode={this.state.key} 
          summonerData={this.state.data}
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
            onClick={this.handleSearch.bind(this)}> 
            CLICK
          </button>
        </div>
        {resultJSX}
      </div>
    );
  }
}

export default App;
