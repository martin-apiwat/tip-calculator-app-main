import React from "react";
import "./App.css";

const App = () => {
   return (
      <div className="container">
         <div className="box">
            <div className="box-input">
               <div>
                  <p>Bill</p>
                  <input type="number" />
               </div>
               <div>
                  <p>Select Tip %</p>
                  <button>5%</button>
                  <button>10%</button>
                  <button>15%</button>
                  <button>25%</button>
                  <button>50%</button>
                  <input type="number" placeholder="Custom" />
               </div>
               <div>
                  <p>Number of People</p>
                  <input type="number" />
               </div>
            </div>
            <div className="box-amount"></div>
         </div>
      </div>
   );
};

export default App;
