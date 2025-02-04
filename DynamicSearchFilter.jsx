import React, { useState } from 'react';

const names = ['John', 'Michael', 'Sarah', 'Jessica', 'David', 'Emily'];

const SearchFilter = () => {
  const [search, setSearch] = useState('');

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Search Filter</h2>
      <input 
        type="text" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Search names..."
      />
      <ul>
        {names.filter(name => name.toLowerCase().includes(search.toLowerCase()))
          .map((name, index) => <li key={index}>{name}</li>)}
      </ul>
    </div>
  );
};

export default SearchFilter;
