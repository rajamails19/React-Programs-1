import React, { useState } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ 
      background: darkMode ? '#333' : '#fff', 
      color: darkMode ? '#fff' : '#000', 
      height: '100vh', 
      textAlign: 'center',
      padding: '20px'
    }}>
      <h2>{darkMode ? 'Dark Mode' : 'Light Mode'}</h2>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
