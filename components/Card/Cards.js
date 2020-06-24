import React from "react";
import   Cardio  from "../assets/cardiology";
import   Tooth  from "../assets/tooth";
import   Hearts  from "../assets/lungs";
import Link from "next/link";
const Cards = ({children,
  icon,
  procedure,
  backgroundColor,
  cardClass,
  link}) => {
  return (
    <Link href={link}>
      <div className="cards-container">
        <div className="cards-body">
          <div className="cards-icon">
            {procedure === "Cardio" ? (
              <Cardio />
            ) : "Dentistry" ? (
              <Tooth />
            ) : (
              <Hearts />
            )}
          </div>
          <div className="cards-info">{procedure}</div>
          <div className="cards-quote">3 appoinments</div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
