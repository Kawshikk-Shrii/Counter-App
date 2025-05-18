import React from 'react';
import './App.css';
import { useState } from 'react';
import Counter from './counter';

function App() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <Counter
        num ={ num }
        setNum = { setNum }/>
    </div>
  );
}

export default App;
