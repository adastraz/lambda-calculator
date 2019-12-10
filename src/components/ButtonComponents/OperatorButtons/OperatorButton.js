import React from "react";

const OperatorButton = (props) => {
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

export default OperatorButton