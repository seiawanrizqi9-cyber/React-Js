import {memo} from 'react';

const ButtonDisplay = ({ onClick, label }) => {
  console.log('ButtonDisplay dirender');
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded font-medium transition"
    >
      {label}
    </button>
  );
};

export default memo(ButtonDisplay);