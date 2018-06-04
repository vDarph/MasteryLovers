import React, { Component } from 'react';
import './App.css';
import Result from './Result'

class App extends Component {
  
  state = {
     key: "RGAPI-b1ea7dbc-ee31-4be0-99aa-ebe684280793",
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
    if (this.state.data.id !== ""){
      resultJSX = <Result keyCode={this.state.key} summonerData={this.state.data}/>
    }

    return (
      <div className="summoners">
        <input 
          className="search"
          onKeyDown={this.enterPressed.bind(this)}
          onChange={this.handleKey.bind(this)}
        />
        <button ref="btnSearch" onClick={this.handleSearch.bind(this)}> Click </button>
        <p>{this.state.data.id}</p>
          {resultJSX}
        </div>
    );
  }
}

export default App;
