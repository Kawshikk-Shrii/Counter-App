import React from 'react'

const Counter = ({num, setNum}) => {
  return (
    <div>
        <h1>-:Counter App:-</h1>
        <h2>{num}</h2>
        <button className="Increment" 
        onClick={() => setNum(num+1)}>Increment</button>
        <button className="Decrement" 
        onClick={() => setNum(num - 1)}
        disabled={num === 0}>Decrement</button>
        <button className='Reset'
        onClick={() => setNum(num = 0)}
        disabled={num === 0}>Reset</button>
    </div>
  )
}

export default Counter
