import React from "react";
import { connect } from "react-redux";
// import { getStockData } from "../../redux/store.js";
import Revenues from "./Revenues"

const RevenuesContainer = (props) => {
    return <Revenues 
        ticker={props.ticker}
        revenues={props.revenues} 
        hasRevenues={props.hasRevenues}
        // hasData={props.hasData} 
        // isError={props.isError}
        />
};

const mapStateToProps = (state) => {
    return {
        // stockData: state.stockData, 
        // hasData: state.hasData,
        // isError: state.isError,
        ticker: state.ticker, 
        revenues: state.revenues,
        hasRevenues: state.hasRevenues,
    };
};

export default connect(mapStateToProps)(RevenuesContainer);