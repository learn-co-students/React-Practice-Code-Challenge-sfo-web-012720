import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    displayIndex: 0,
    money: 20,
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushiData => this.setState({sushis: sushiData}))
  }

  showFour = () => {
    return this.state.sushis.slice(this.state.displayIndex, this.state.displayIndex+4)
  }

  viewMore = () => {
    if (this.state.displayIndex < this.state.sushis.length) {
      let newDisplayIndex = this.state.displayIndex + 4

      this.setState({
        displayIndex: newDisplayIndex
      })
    }
    else {
      this.setState({displayIndex: 0})
    }

  }

  eatSushi = (sushi) => {
    if (this.state.money > sushi.price) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: this.state.money - sushi.price})
    }
    else {
      return <p>"Not enough money!"</p>
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.showFour()} viewMore={this.viewMore} 
        eatSushi={this.eatSushi}
        eaten={this.state.eaten}
        money={this.state.money}/>
        <Table money={this.state.money} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;