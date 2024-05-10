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