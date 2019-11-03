import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductCard from './Product-Card'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      counter: 0,
      name: 'Pesho',
      minutes: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      if(this.state.name === 'Pesho') {
        this.state.name = 'Gosho';
      } else {
        this.state.name = 'Pesho';
      }
      this.setState({
        counter: this.state.counter + 1
      })
      this.state.minutes = (this.state.counter / 60).toFixed(2);
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ProductCard />
          {this.state.name}
          <br></br>
          {this.state.counter}
          <p>You were {this.state.minutes} minutes afk!</p>          
        </header>
      </div>
    );
  }
}

export default App;
