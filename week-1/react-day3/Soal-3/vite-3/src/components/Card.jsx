import React from "react";

function Card (props) {
  return (
    <div style={{border: '1px solid white', padding: '20px', margin: '10px', borderRadius: '8px'}}>
      {props.children}
    </div>
  )
}

export default Card;