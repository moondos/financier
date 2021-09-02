import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import RadioListContainer from './components/RatioList/RatioListContainer';

class App extends Component {

  render() {

    return (
      <div className="App">
        <SearchBar />
        <RadioListContainer />
      </div>
    );
  }
}

export default App;
