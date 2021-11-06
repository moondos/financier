import React from "react";
import "./Revenues.css";


const Revenues = ({ revenues }) => {
  
  return (
    <div className="revenue_container">
      
            <div className="data_table">
              {revenues.map((item,index) => {
                  return (
                    <div key={index}>
                      <span>{item.date}: </span>
                      <span>{item.revenue}</span>
                    </div>
                  )
                })}
              
                
            </div>

      
    </div>
  );
};

export default Revenues;
