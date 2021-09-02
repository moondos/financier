import React from "react";
import { connect } from "react-redux";
// import { getStockData } from "../../redux/store.js";
import RadioList from "./RatioList"

const RadioListContainer = (props) => {
    return <RadioList 
        stockData={props.stockData} 
        hasData={props.hasData} 
        isError={props.isError}/>
};

const mapStateToProps = (state) => {
    return {
        stockData: state.stockData, 
        hasData: state.hasData,
        isError: state.isError,
    };
};

export default connect(mapStateToProps)(RadioListContainer);