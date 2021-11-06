import React from "react";
import { connect } from "react-redux";
// import { getStockData } from "../../redux/store.js";
import Revenues from "./Revenues"

const RevenuesContainer = (props) => {
    return <Revenues 
        revenues={props.revenues} 
        // hasData={props.hasData} 
        // isError={props.isError}
        />
};

const mapStateToProps = (state) => {
    return {
        // stockData: state.stockData, 
        // hasData: state.hasData,
        // isError: state.isError,
        revenues: state.revenues,
    };
};

export default connect(mapStateToProps)(RevenuesContainer);