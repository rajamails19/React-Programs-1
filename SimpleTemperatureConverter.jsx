import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const fahrenheit = celsius ? (celsius * 9/5 + 32).toFixed(2) : '';

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Temperature Converter</h2>
      <input
        type="number"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        placeholder="Enter Celsius"
      />
      <p>Fahrenheit: {fahrenheit}</p>
    </div>
  );
};

export default TemperatureConverter;
