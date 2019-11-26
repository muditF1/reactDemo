import React, { Component } from 'react';
import CardList from '../components/CardList';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (!robots.length) {
      return (
        <h1 className='tc'>Loading...</h1>
      );
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robots: users })
      })
    // .then(users => {})
  }
}

export default App;
