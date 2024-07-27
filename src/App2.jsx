import React, { useState, useRef } from 'react';

const App2 = () => {
  const [name, setName] = useState('');
  const prevNameRef = useRef('');

  const handleClick = () => {
    prevNameRef.current = prevNameRef.current
      ? `${prevNameRef.current}, ${name}`
      : name;
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Type Text'
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={handleClick}>Log Input Element</button>
      <p>current name: {name}</p>
      <p>prev name: {prevNameRef.current}</p>
    </div>
  );
};

export default App2;
