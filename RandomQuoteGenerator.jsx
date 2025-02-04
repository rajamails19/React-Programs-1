import React, { useState } from 'react';

const quotes = [
  "Believe in yourself!",
  "Every moment is a fresh beginning.",
  "Dream big and dare to fail.",
  "You are stronger than you think.",
  "Act as if what you do makes a difference. It does."
];

const RandomQuote = () => {
  const [quote, setQuote] = useState(quotes[0]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{quote}</h2>
      <button onClick={() => setQuote(quotes[Math.floor(Math.random() * quotes.length)])}>
        Get Random Quote
      </button>
    </div>
  );
};

export default RandomQuote;
