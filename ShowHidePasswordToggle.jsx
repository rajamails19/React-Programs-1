import React, { useState } from 'react';

const PasswordToggle = () => {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  return (
    <div style={{ textAlign: 'center' }}>
      <input
        type={show ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={() => setShow(!show)} style={{ marginLeft: '10px' }}>
        {show ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default PasswordToggle;
