import axios from "axios";

// const api = axios.create({
//     baseURL: "https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=c3d3o6iad3i868doqfag",
    
//     // headers: { 
//     //   "Content-Type": "application/json",
//     //   "X-Finnhub-Token" : "c3d3o6iad3i868doqfag",
//     // }
//   });

const instance = () => {
    return axios.create({
        baseURL: "https://finnhub.io/api/v1",
        
    });
};

const financialModel = () => {
    return axios.create({
        baseURL: "https://financialmodelingprep.com/api/v3",
        
    });
};
  
export const casesAPI = {
    getBasicFinancials(ticker) {
        return instance()
            .get("/stock/metric?symbol=" + ticker + "&metric=all&token=c3d3o6iad3i868doqfag")
            .then((response) => (response));
    },
    getRevenues(ticker) {
        return financialModel()
            .get("/income-statement/" + ticker + "?apikey=f32f50f80135a155e4cfb668d6bd68fe")
            .then((response) => (response));
    }

};