import React from "react";
import { connect } from "react-redux";
import { getStockData } from "../../redux/store.js";
import SearchBar from "./SearchBar.jsx"

const SearchBarContainer = (props) => {
    return <SearchBar getStockData={props.getStockData}/>
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, { getStockData })(SearchBarContainer);