import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import RadioListContainer from './components/RatioList/RatioListContainer';
import RevenuesContainer from './components/Revenues/RevenuesContainer';

class App extends Component {

  render() {

    return (
      <div className="App">
        <SearchBar />
        <RadioListContainer />
        <RevenuesContainer />
      </div>
    );
  }
}

export default App;
