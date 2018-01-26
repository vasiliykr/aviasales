import React, { Component } from 'react';
import logo from './App__logo.svg';
import './App.css';

import FilterGroup from './FilterGroup/FilterGroup';
import Tickets from './Tickets/Tickets';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
      currentFilters: [],
    };
  }

  componentDidMount() {
    fetch('./tickets.json')
      .then(response => response.json())
      .then((responseData) => {
        this.setState({ tickets: responseData.tickets });
      })
      .catch(error => console.log(`Error fetching and parsing data\n${error}`));
  }

    handleFilterChange = (filters) => {
      this.setState({
        currentFilters: filters,
      });
    }

    render() {
      return (
        <div className="App">
          <header className="App__header">
            <img src={logo} className="App__logo" alt="logo" />
          </header>
          <div className="App__content">
            <FilterGroup
              filters={this.state.currentFilters}
              filterChange={this.handleFilterChange}
            />
            <Tickets
              filters={this.state.currentFilters}
              tickets={this.state.tickets}
            />
          </div>
        </div>
      );
    }
}

export default App;
