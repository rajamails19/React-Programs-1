12

import React, { useState } from 'react';

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

const BackgroundChanger = () => {
  const [bgColor, setBgColor] = useState('white');

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', textAlign: 'center', paddingTop: '20px' }}>
      <h2>Click the button to change background color</h2>
      <button onClick={() => setBgColor(colors[Math.floor(Math.random() * colors.length)])}>
        Change Color
      </button>
    </div>
  );
};

export default BackgroundChanger;
