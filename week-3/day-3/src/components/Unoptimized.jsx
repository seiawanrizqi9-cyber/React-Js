import React from 'react';

export default function UnoptimizedChild({ count }) {
  console.log('UnoptimizedChild di-render');
  return (
    <div className="p-3 text-black">
      Unoptimized: {count}
    </div>
  );
}