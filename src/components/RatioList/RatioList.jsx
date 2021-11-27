import React from "react";
import "./RatioList.css";


const RadioList = ({ ticker, stockData, hasData, isError }) => {
  
  return (
    <div className="data_container">
      
        {hasData && (
            <div className="data_table">
                <p>Ticker: {ticker}</p>
                <p>Current Ratio: {stockData.currentRatio}</p>
                <p>Asset Turnover: {stockData.assetTurnover}</p>
                <p>ROE: {stockData.roe}</p>
                <p>D/E: {stockData.debtEquity}</p>
                <p>P/B: {stockData.pbRatio}</p>
                <p>P/S: {stockData.psRatio}</p>
                <p>P/E: {stockData.peRatio}</p>
            </div>
          )}

        {isError && (
            <div className="error_msg">
                <p>NO DATA FOUND</p>
                
            </div>
          )}        
    </div>
  );
};

export default RadioList;
