import React from "react";
import   Cardio  from "../assets/cardiology";
import   Tooth  from "../assets/tooth";
import   Hearts  from "../assets/lungs";

const Cards = props => {
  return (
    <>
      <div className="cards-container">
        <div className="cards-body">
          <div className="cards-icon">
            {props.procedure === "Cardio" ? (
              <Cardio />
            ) : "Dentistry" ? (
              <Tooth />
            ) : (
              <Hearts />
            )}
          </div>
          <div className="cards-info">{props.procedure}</div>
          <div className="cards-quote">3 appoinments</div>
        </div>
      </div>
    </>
  );
};

export default Cards;
