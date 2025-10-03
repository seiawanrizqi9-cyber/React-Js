import React from 'react';

function Card(props) {
  return (
    <div style={{ border: '1px solid black', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      {props.children} {/* Ini akan me-render semua yang ada di antara tag <Card> */}
    </div>
  );
}

export default Card;