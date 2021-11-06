import React, { Component } from 'react';
import "./SearchBar.css";
import { getStockData, getStockRevenue } from "../../redux/store.js";
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
        
class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
        inputValue:'',
    
        }
    }
    
    onChangeInput = (event) => {
        // console.log('event', event.target.value);
        this.setState({
          inputValue: event.target.value.toUpperCase(),
        })
    };
      

    // onSubmit = () => {
    //     const {inputValue} = this.state;
    //     console.log(inputValue);
    //     getStockData(inputValue);
    // };

    
    
    
    render() {
        const { inputValue } = this.state;
        return (
        <div className="App">
            <h1>Financier</h1>
        
            <input onChange={this.onChangeInput}></input>
            {/* <button onClick={getStockData(inputValue)}>Stock Data</button> */}
            <button onClick={getStockRevenue(inputValue)}>5Y Revenue</button>
        </div>
        );
    }
    }

const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps, { getStockData })(SearchBar);
