// const express = require('express');
// const app = express();
// const PORT = 5000;


// app.use((req, res, next) => {
//     console.log(`request sent`);
//     next();
// })

// app.get('/', (req, res) => {
//     res.send("hello world!!")
// })

// app.listen(PORT  => {
//     console.log(`server is starting on port ${PORT}`)
// })

// CustomHook(count, increment,decrement);


import { useState }  from 'react';
const useCount = (initialCount = 0) => {

    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(prevCount => prevCount -1)
    }

    return { count, increment, decrement}
}

export default useCount;




import React from 'react';
import useCount from './useCount';

const CounterComponent = () => {
  const { count, increment, decrement } = useCount(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;




// In this example:

// useCount is imported and used to initialize the counter state.

// count, increment, and decrement are destructured from the useCount hook.

// The count state is displayed, and the increment and decrement functions are tied to their respective buttons.