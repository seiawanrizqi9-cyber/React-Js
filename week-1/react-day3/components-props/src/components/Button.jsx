import React from 'react';

// Dengan destructuring di parameter fungsi
function Button({ onClick, text, color }) {
  return (
    <button onClick={onClick} style={{ backgroundColor: color, color: 'white', padding: '10px' }}>
      {text}
    </button>
  );
}

export default Button;