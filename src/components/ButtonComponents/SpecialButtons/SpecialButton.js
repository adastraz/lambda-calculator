import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button 
        className='button' 
        onClick = { 
          () => props.buttonClick(props.buttonName)}>
          {props.buttonName}
      </button>
    </>
  );
};
export default SpecialButton