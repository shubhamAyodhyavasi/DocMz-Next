import React from "react";
import  Dent  from "../assets/toothfill";
import  Cardio  from "../assets/heartbeat";
import  Vitamin  from "../assets/drug";
import  Drug  from "../assets/pipette";
const UpcomingCards = props => {
  return (
    <>
      <div
        className={
          props.type !== "dent"
            ? "upcard-container-grey mx-5 mt-3 mb-5"
            : "upcard-container mx-5 mt-5 mb-4"
        }
      >
        <div className="upcard-icon">
          {props.type === "dent" ? (
            <Dent />
          ) : props.type === "vitamin" ? (
            <Vitamin />
          ) : props.type === "drug" ? (
            <Drug />
          ) : (
            <Cardio />
          )}
        </div>
        <div className="upcard-info">
          <div className="upcard-info-primary">Dentist</div>
          <div className="upcard-info-secondary">8:00-9:00</div>
          <div className="upcard-info-secondary">
            Dr.Alex Bengimin <span className="upcard-info-tertiary"></span>(Cab
            39)
          </div>
        </div>
      </div>
    </>
  );
};
export default UpcomingCards;
