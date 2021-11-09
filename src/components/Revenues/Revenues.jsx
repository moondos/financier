import React from "react";
import "./Revenues.css";
import {Bar} from 'react-chartjs-2';


const Revenues = ({ revenues, hasRevenues }) => {
  


  return (
    
    <div className="revenue_container">
      
      {hasRevenues && (
          <Bar 
          data={{
            // labels: Object.keys(revenues)
            labels: Object.keys(revenues),
            datasets: [
              {
                label: '# of Votes',
                data: Object.keys(revenues).map(function(key){
                  return revenues[key];
              }),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  
                ],
                borderWidth: 1,
              },
            ],
          }
        } 
          // width={100}
          // height={50}
          options={{maintainAspectRatio: false}} 
        />
      )}
      
      
    </div>
  );
};

export default Revenues;
