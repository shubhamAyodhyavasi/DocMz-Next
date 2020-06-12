import React from "react";
import Router from "next/router";
import Arrow  from "../assets/chevron";
const Buttons = (props) => {
  console.log(props);
 const onClick= (props) =>{
   console.log(props);
   
    Router.push(props.href);
  }
  return (
    <>
      <button className="buttons-wrapper" onClick={()=>{
        onClick(props)
      }}>
        <div className="button-info">{props.name}</div>
          <div className="button-icon">
            <Arrow />
          </div>
      </button>
    </>
  );
};

export default Buttons;
