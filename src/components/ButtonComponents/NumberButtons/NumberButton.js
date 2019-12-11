import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {
        <button 
        className='button' 
        onClick = { 
          () => props.buttonClick(props.buttonName)}>
          {props.buttonName}
      </button>}
    </>
  );
};

export default NumberButton