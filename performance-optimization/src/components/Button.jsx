import React from "react";

 function Button({ children, handleClick }) {
    console.log(`rendering button ${children}`);
    
  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}

export default Button