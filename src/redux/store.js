import { createStore } from 'redux';
import { casesAPI } from '../api/api.js'
// STORE -> GLOBALIZED STATE

const initialState = {
  stockData: {
    ticker:"INMD",
    currentRatio:2.0,
    assetTurnover:0.7,
    roe:0.34,
    debtEquity:0,
    pbRatio:15,
    psRatio:20,
    peRatio:49,
  },
  hasData: false,
  isError: false,
};

// ACTION
const addStockData = (newStockData) => {
  return {
    type: 'ADD_STOCK_DATA',
    payload: newStockData
  }
};

const addMetricOnly = (newStockData) => {
  return {
    type: 'ADD_METRIC_ONLY',
    payload: newStockData
  }
};

const noStockData = () => {
  return {
    type: 'NO_STOCK_DATA',
    
  }
};

// REDUCER
const stockReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_STOCK_DATA":
      
      const newStockData = action.payload;
      return {
          ...state,
          stockData: {ticker : newStockData.symbol, 
                      currentRatio : newStockData.metric.currentRatioAnnual,
                      assetTurnover: newStockData.metric.assetTurnoverAnnual, 
                      roe: newStockData.metric.roeRfy,
                      debtEquity: newStockData.series.annual.totalDebtToEquity[0].v,
                      pbRatio: newStockData.metric.pbAnnual,
                      psRatio: newStockData.metric.psAnnual,
                      peRatio: newStockData.metric.peInclExtraTTM,
                      },
          hasData: true,
          isError: false,
        }
    case "ADD_METRIC_ONLY":
  
      const MetricOnlyData = action.payload;
      return {
          ...state,
          stockData: {ticker : MetricOnlyData.symbol, 
                      currentRatio : MetricOnlyData.metric.currentRatioAnnual,
                      assetTurnover: MetricOnlyData.metric.assetTurnoverAnnual, 
                      roe: MetricOnlyData.metric.roeRfy,
                      debtEquity: "None",
                      pbRatio: MetricOnlyData.metric.pbAnnual,
                      psRatio: MetricOnlyData.metric.psAnnual,
                      peRatio: MetricOnlyData.metric.peInclExtraTTM,
                      },
          hasData: true,
          isError: false,
        }
                
    case "NO_STOCK_DATA":  
        return {
          ...state,
          hasData: false,
          isError: true, 
        };
    
    default:
        return state;
  }
};

const store = createStore(
    stockReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

// Display it in the console 

store.subscribe(() => console.log(store.getState()));

// DISPATCH

// store.dispatch(increment());

export const getStockData = (ticker) => (dispatch) => {
  console.log(ticker)
  // store.dispatch(addStockData(ticker));
  casesAPI
    .getBasicFinancials(ticker)
    .then((res)=> { if (Object.keys(res.data.metric).length !== 0 && Object.keys(res.data.series).length !== 0) {
          store.dispatch(addStockData(res.data))
        }
        else if (Object.keys(res.data.metric).length !== 0 && Object.keys(res.data.series).length === 0) {
          store.dispatch(addMetricOnly(res.data)) 
        }
        else {
          store.dispatch(noStockData())  
        }
    })
    .catch((req)=> console.log(req));
    
};

export const getStockRevenue = (ticker) => (dispatch) => {
  console.log(ticker)
  // store.dispatch(addStockData(ticker));
  casesAPI
    .getRevenues(ticker)
    .then((res)=> console.log(res.data))
    .catch((req)=> console.log(req));
    
};

export default store;