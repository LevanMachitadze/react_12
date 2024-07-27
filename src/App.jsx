import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {}, []);

  const logInputElement = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleClick = (event, nextInputRef) => {
    if (event.key == 'Enter') {
      nextInputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <input
          ref={inputRef1}
          type='text'
          placeholder='Type Text'
          onKeyDown={(event) => handleClick(event, inputRef2)}
        />
        <input
          ref={inputRef2}
          type='text'
          placeholder='Type Text'
          onKeyDown={(event) => handleClick(event, inputRef3)}
        />
        <input
          ref={inputRef3}
          type='text'
          placeholder='Type Text'
          onKeyDown={(event) => handleClick(event, inputRef1)}
        />

        <button onClick={logInputElement}>Log Input Element</button>
      </div>
    </>
  );
}

export default App;
