import React, { Component } from 'react';
import './App.css';
import Result from './Result'

class App extends Component {
  
  state = {
     key: "RGAPI-a656a11d-14c0-4cd5-b1c4-9a7bd57eada6",
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
        <form
          className="search-form">
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
        </form>
          {resultJSX}
      </div>
    );
  }
}

export default App;
