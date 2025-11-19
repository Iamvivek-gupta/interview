
Basic Questions

# What is React?
React is a JavaScript library for building user interfaces, particularly single-page applications. 
It allows developers to create reusable UI components.

# What is JSX?
JSX stands for JavaScript XML. 
It allows you to write HTML elements in JavaScript and place them in the DOM without using functions like createElement() or appendChild().

# What are components in React?
Components are the building blocks of a React application. 
They can be either class-based or functional and are used to create reusable pieces of UI.


# What is the difference between state and props?
State is a local data storage that is local to the component only and cannot be passed to other components. Props (short for properties) are used to pass data from one component to another.

# What are hooks in React?
Hooks are simple functions in React Application that allow us to use state variables and other React features in functional components. Examples include useState, useEffect, and useContext.

# What is the Virtual DOM?
The Virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize updates and rendering, making the application faster.


# What are higher-order components (HOCs)?
HOCs are functions that take a component and return a new component. They are used for reusing component logic.

# What is Redux, and how does it work with React?
Redux is a state management library for JavaScript applications, often used with React. 
It provides a centralized store for managing the state of your application, making it easier to share data between components and manage complex state logic.

# What are React lifecycle methods?
Lifecycle methods are hooks that allow you to run code at specific points in a component’s life. Examples include componentDidMount, componentDidUpdate, and componentWillUnmount.

Absolutely, here are some simple definitions for you:

1. **`componentDidMount`**: This lifecycle method is called once, immediately after a component is added to the DOM. It's a great place to initiate data fetching or set up any subscriptions.

2. **`componentDidUpdate`**: This lifecycle method is called right after the component updates, meaning whenever there's a change in the state or props. It's useful for performing operations based on the component's updated state or props.

3. **`componentWillUnmount`**: This lifecycle method is called just before the component is removed from the DOM. It's the right place to clean up any subscriptions, timers, or other resources created during the component's lifecycle.

Here’s a quick example to illustrate these:

```javascript
import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    console.log('Component mounted!');
    // Initiate data fetching or subscriptions here
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated!');
    // Operations based on updated state or props here
  }

  componentWillUnmount() {
    console.log('Component will unmount!');
    // Clean up resources here
  }

  render() {
    return <div>My Component</div>;
  }
}

export default MyComponent;
```

Each method logs a message to the console when it’s called, helping you see when each part of the component lifecycle occurs. Let me know if you need more details or have other questions!


# Lazy Loading: 
Lazy loading in React means loading components only when they are needed, which helps reduce the initial load time of the app. 
This makes the react application faster and more efficient.

# Code Splitting: 
Code splitting in React means breaking down the large application's code into smaller chunks, These chunks are loaded on demand, rather than loading the entire app at once.
This ensures that only the necessary parts of the app are loaded, improving performance.




Sure, here's a simple example of lazy loading and code splitting using React and Webpack:

### Step 1: Setup Webpack

First, you'll need to set up Webpack in your project. Create a `webpack.config.js` file and add the following configuration:

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
```

### Step 2: Create React Components

Next, create some React components. Let's create two components: `Home.js` and `About.js`.

`src/components/Home.js`:
```javascript
import React from 'react';

const Home = () => <div>Home Component</div>;

export default Home;
```

`src/components/About.js`:
```javascript
import React from 'react';

const About = () => <div>About Component</div>;

export default About;
```

### Step 3: Lazy Load Components

Now, let's lazy load these components in your main `App.js` file using React's `lazy` and `Suspense`.

`src/App.js`:
```javascript
import React, { lazy, Suspense } from 'react';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));

const App = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
      <About />
    </Suspense>
  </div>
);

export default App;
```

### Step 4: Entry Point

Finally, make sure you have an entry point for your application.

`src/index.js`:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

### Step 5: Run Webpack

Now you can run Webpack to bundle your code. If you have everything set up correctly, this should create a bundle that lazy loads the `Home` and `About` components.

```bash
webpack --mode production
```

And that's it! You now have a simple example of lazy loading and code splitting using React and Webpack. Let me know if you need any further assistance!



# Here are some key reasons why function-based components are often preferred over class-based components in ReactJS:

### 1. **Simplicity and Readability**
Function components are simpler and more concise. They use plain JavaScript functions, which makes them easier to read and write compared to class components.

### 2. **Hooks**
With the introduction of React Hooks, function components can now manage state and side effects. Hooks like `useState` and `useEffect` allow function components to handle state and lifecycle methods, which were previously only available in class components¹.

### 3. **Less Boilerplate**
Function components require less boilerplate code. You don't need to use the `this` keyword or bind methods, which reduces the amount of code you have to write and maintain².

### 4. **Performance**
Function components are generally more performant. They avoid the overhead associated with class components, such as the creation of instances and the use of the `this` context³.

### 5. **Future-Proof**
The React team is focusing more on function components and hooks. This means new features and improvements are more likely to be added to function components in the future⁴.

### Example


**Class Component:**
```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
```

**Function Component:**
```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```



# Diffrence Between UseCallback and UseMemo.?

Sure! Here's a simple explanation of the difference between `useCallback` and `useMemo` hooks in React:

- **`useCallback`**: This hook is used to memoize a function. 
It returns a memoized version of the callback function that only changes if one of the dependencies has changed. 
This is useful when you pass a callback to a child component and want to prevent unnecessary re-renders.

  ```jsx
  const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  }, [a, b]);
  ```

- **`useMemo`**: This hook is used to memoize a value. 
It returns a memoized value that only recalculates if one of the dependencies has changed. 
This is useful for optimizing expensive calculations so they don't run on every render.

  ```jsx
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

In short:
- **`useCallback`** memoizes functions.
- **`useMemo`** memoizes values.

Both hooks help improve performance by avoiding unnecessary recalculations or re-creations.



# Diffrence Between React.memo and UseMemo.?


Sure! Here's a simple explanation of the difference between `memo` and `useMemo` hooks in React:

- **`React.memo`**: This is a higher-order component (HOC) is used to memoize entire functional component. 
It helps to optimize performance by memoizing the component. This means that the component will only re-render if its props change. 
It's useful for preventing unnecessary re-renders of child components.

  ```jsx
  const MemoizedComponent = React.memo((props) => {
    return <div>{props.value}</div>;
  });
  ```

- **`useMemo`**: This is a hook that you use inside a functional component to memoize a value. 
It recalculates the value only when one of its dependencies changes. 
This is useful for optimizing expensive calculations that shouldn't run on every render.

  ```jsx
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

In short:
- **`React.memo`** is used to memoize entire components.
- **`useMemo`** is used to memoize values within a component.

Both are tools to help improve performance by avoiding unnecessary recalculations or re-renders⁴⁵.









# Custom Hook fetch data example


In React, custom hooks provide a way to extract reusable logic from components. You can create a custom hook to handle data fetching, which encapsulates the logic for calling an API, managing loading states, and handling errors.

Here’s a step-by-step guide to creating a custom hook for fetching data:

### 1. Create the Custom Hook (`useFetch`)

```js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
```

### 2. Using the `useFetch` Hook in a Component

Now that the custom hook `useFetch` is ready, you can use it in any component to fetch data.

```js
import React from 'react';
import useFetch from './useFetch'; // Path to the custom hook

const UsersList = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
```

### Explanation:
- **`useState`**: We use three state variables to manage the `data`, `loading`, and `error`.
- **`useEffect`**: Fetches data whenever the `url` changes.
- **Axios**: Handles HTTP requests. You can also use `fetch()` if you prefer.
- **Error Handling**: The hook gracefully handles errors and displays appropriate messages.

### 3. Example with Multiple API Endpoints

You can reuse this hook to fetch data from any endpoint by simply passing a different URL.

```js
const PostsList = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts List</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
```

### Additional Enhancements
- **Caching**: You could add caching logic to prevent multiple requests for the same data.
- **Pagination or Infinite Scroll**: Pass additional parameters to the hook to handle pagination or scrolling.
- **Post Requests**: Extend the hook to support other HTTP methods like `POST`, `PUT`, or `DELETE`.

This approach makes it easier to manage data fetching across multiple components without duplicating logic.











# Redux ToolKit Example


**Redux Toolkit** (RTK) is the official, recommended toolset for writing Redux logic. It simplifies common Redux tasks like store setup, creating reducers, handling asynchronous logic, and more, by providing a set of utilities to streamline these processes.

### Why Use Redux Toolkit?
- **Boilerplate Reduction**: Reduces the need for writing repetitive boilerplate code.
- **Opinionated Defaults**: Provides good default configurations, such as using the `redux-thunk` middleware by default.
- **Better Dev Experience**: Automatically sets up Redux DevTools and supports features like time travel debugging.

### Key Features of Redux Toolkit

1. **`configureStore()`**: Simplifies store creation, automatically sets up best practices like combining reducers and middleware (including `redux-thunk` by default).
2. **`createSlice()`**: Combines actions and reducers into one function, reducing boilerplate.
3. **`createAsyncThunk()`**: Simplifies the handling of async logic like API calls.
4. **`createReducer()`**: Allows creating reducers without directly mutating the state, thanks to `immer` integration.
5. **`createAction()`**: Automatically creates action creators.

---

### How to Use Redux Toolkit

#### 1. Install Redux Toolkit

```bash
npm install @reduxjs/toolkit react-redux
```

#### 2. Create a Store

With `configureStore()`, you can quickly set up your Redux store without manually writing reducers or middleware setup.

```js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

#### 3. Create a Slice (Action + Reducer Combined)

Using `createSlice()` simplifies the process of defining reducers and actions. 

```js
import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  value: 0,
};

// Create a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export the actions generated by createSlice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer to configureStore
export default counterSlice.reducer;
```

#### 4. Dispatch Actions in Components

Now, you can dispatch actions and access the state in your React components using `useDispatch()` and `useSelector()` from `react-redux`.

```js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
}

export default Counter;
```

#### 5. Handling Asynchronous Logic with `createAsyncThunk()`

`createAsyncThunk()` simplifies working with asynchronous operations like API calls.

```js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Create an async thunk for fetching user data
export const fetchUserById = createAsyncThunk('user/fetchById', async (userId) => {
  const response = await axios.get(`/api/user/${userId}`);
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: { entity: null, loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.entity = action.payload;
      });
  },
});

export default userSlice.reducer;
```

### Benefits of Using Redux Toolkit

- **Less Boilerplate**: You don't have to write action types or action creators manually.
- **Immutability**: Thanks to the built-in `immer`, you can write code that looks like you're mutating the state, but it stays immutable.
- **Asynchronous Actions**: Simplifies asynchronous actions like API requests.
- **Best Practices Built-in**: RTK enforces best practices in state management and store configuration.

In summary, Redux Toolkit is a powerful and efficient way to work with Redux, especially as applications scale in complexity. It drastically reduces the setup effort while encouraging best practices.










# Example for Lazy Loading and Code splitting

Sure, here’s a simple example using React to demonstrate lazy loading and code splitting:

First, install the necessary dependencies:

npm install react react-dom

Then, create your components:

MyComponent.js


import React from 'react';

const MyComponent = () => {
  return <div>Hello, I’m lazily loaded!</div>;
};

export default MyComponent;


App.js

import React, { Suspense, lazy } from 'react';

const MyComponent = lazy(() => import('./MyComponent'));

const App = () => {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </Suspense>
    </div>
  );
};

export default App;





In this example, MyComponent is lazy-loaded using React.lazy and React.Suspense. The fallback prop in Suspense is shown while the component is being loaded. When the component is fully loaded, it replaces the fallback.

This setup ensures that MyComponent is only loaded when needed, reducing the initial load time of your application.





# Diff between controled and uncontrolled component

Okay, imagine filling out a form:

**Uncontrolled Component:** Think of a regular HTML `<input>`. When you type something, the input element itself internally keeps track of the value. React doesn't directly control it. To get the value, you usually use a `ref` to access the DOM element.

**Example (Uncontrolled):**

```jsx
import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You typed: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

Here, the `<input>` manages its own state. We use `useRef` to get a reference to the DOM node and access its `value` when the form is submitted. React isn't actively involved in every change.

**Controlled Component:** Now, imagine the form where React is the "boss" of the input's value. The input's value is tied to a piece of state in your React component. Every time the input's value changes, React is notified, and it re-renders the component if needed. To change the input's value, you update the React state.

**Example (Controlled):**

```jsx
import React, { useState } from 'react';

function ControlledInput() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You typed: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Submit</button>
      <p>You are typing: {inputValue}</p> {/* React state controls the display */}
    </form>
  );
}
```

In this controlled example:

* We use `useState` to create a `inputValue` state variable.
* The `<input>`'s `value` prop is bound to this `inputValue` state.
* The `onChange` handler is called whenever the input's value changes, and we update the `inputValue` state using `setInputValue`. This causes React to re-render the component, and the input's displayed value reflects the state.

**In Simple Interview Terms:**

* **Uncontrolled:** The DOM element manages its own state. You use a `ref` to get the value when you need it.
* **Controlled:** React state is the single source of truth for the input's value. You use the `value` prop to set it and `onChange` to update the state.

**When to use which?**

* **Controlled components** are generally preferred because they make it easier to implement input validation, conditionally disable buttons, and have more control over the data as it changes.
* **Uncontrolled components** can be simpler for very basic forms where you only need the value on submit.

Does this easy example help explain the difference for an interviewer? It's Saturday night here in Lucknow!





# What is Reconciliation in React?
Reconciliation is the process in React uses to compare the current Virtual DOM with the new Virtual DOM (after a state or props change), and then efficiently update the real DOM with only what changed.
________________________________________
### 🧠 How it Works (Conceptually):
1.	You update state or props
2.	React creates a new Virtual DOM tree
3.	It compares (diffs) the new tree with the previous one
4.	It figures out what actually changed
5.	Then it updates the real DOM with just those changes (using the least number of operations)
________________________________________
### ⚡ Why is Reconciliation Important?
•	It helps React make updates fast and efficient
•	Avoids re-rendering the entire DOM
•	Leads to better performance and responsiveness


# Props Drilling
**Props drilling** in React means passing data through many layers of components, even when only the deepest child needs it, which makes code harder to maintain.

## Problem Example

Suppose `Parent` needs to send `data` to `Grandchild`, but it must go through `Child`:

```jsx
function Parent() {
  const data = "Hello";
  return <Child data={data} />;
}

function Child(props) {
  return <Grandchild data={props.data} />;
}

function Grandchild(props) {
  return <div>{props.data}</div>;
}
```
Here, `Child` doesn't use `data`—it just passes it down, which is props drilling.[3][5]

## How to Overcome

Use **React Context** to avoid props drilling:

```jsx
import React, { createContext, useContext } from 'react';

const DataContext = createContext();

function Parent() {
  const data = "Hello";
  return (
    <DataContext.Provider value={data}>
      <Child />
    </DataContext.Provider>
  );
}

function Child() {
  return <Grandchild />;
}

function Grandchild() {
  const data = useContext(DataContext);
  return <div>{data}</div>;
}
```
Now, `Grandchild` can access `data` directly from context, no matter how deeply nested it is.[7][1]

**Summary:**  
- **Props drilling** is passing props through many layers unnecessarily.  
- Use **React Context** to share data directly with deeply nested components and avoid this issue.[1][3]





# useState & useEffect
**useState** is for managing state (data) inside a component, while **useEffect** is for handling side effects like fetching data, updating the DOM, or setting timers after rendering.[3][5][7]

## Key Differences
- **useState:** Stores and updates local state.
- **useEffect:** Runs code in response to state/prop changes or after component mounts.

## Simple Example

```jsx
import React, { useState, useEffect } from "react";

function Example() {
  // useState for counter value
  const [count, setCount] = useState(0);

  // useEffect to update document title after each render
  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
- Here, **useState** creates and updates `count`.
- **useEffect** updates the browser tab title whenever `count` changes.[1][5]

**Summary:**  
- **useState = track state.**  
- **useEffect = run side effects after render.**[5][6]



# React Counter example
```
import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  function increment() {
    if (count < 10) setCount(count + 1);
  }
  function decrement() {
    if (count < 10) setCount(count - 1);
  }
  return (
    <div className="">
      <h1>Counter App {count}</h1>
      <button onClick={increment}>Increment Counter</button>
      <div>
        <button onClick={decrement}>Decrement Counter</button>
      </div>
    </div>
  );
}
```


- only with one function
```
import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const Handlecounter = (type) => {
    setCount((prev) => {
      if (type === 'inc' && count < 10) {
        return prev + 1;
      } else if (type === 'dec' && count > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={() => Handlecounter('inc')}>increment</button>
      <button onClick={() => Handlecounter('dec')}>Drecrement</button>
    </>
  );
};

export default App;
```

# React Fiber 
- React Fiber is the core engine that makes React’s rendering more flexible and efficient.
- Instead of updating the whole UI in one go, Fiber breaks work into small “units of work” (fibers). 
- This lets React pause, prioritize, and resume rendering updates—making animations, large lists, and high-interaction UIs much smoother.


### React Fiber Example
- If an app needs to update a huge list and handle a button click at the same time, Fiber allows React to pause the list update, process the click (higher priority), then 
  resume the list. This prevents the UI from freezing.

### Summary:
- Fiber enables fine-grained scheduling and prioritization of updates.
- It improves user experience during heavy or concurrent UI changes.
- Makes features like Suspense and concurrent rendering possible.




# Difference in useLayout and useEffect in react
The `useLayoutEffect` and `useEffect` Hooks in React are used for side effects in function components, but differ in **when they run**:

***

### useEffect
- Runs **after** the browser paints the UI (asynchronously).
- Does **not block** rendering—best for API calls, subscriptions, timers, logging, or side effects that don’t affect immediate visuals.
- Example:
  ```js
  useEffect(() => {
    fetchData();
  }, []);
  ```

### useLayoutEffect
- Runs **synchronously after React updates the DOM but before the browser paints** (blocks paint).
- Used for **measuring/layout manipulation** and DOM changes that need to happen before the user sees them (prevents flicker).
- Example:
  ```js
  useLayoutEffect(() => {
    const width = ref.current.offsetWidth;
    setWidth(width); // Set state before paint
  }, []);
  ```

***

### Table of Differences

| Feature         | useEffect                   | useLayoutEffect              |
|-----------------|----------------------------|------------------------------|
| Timing          | After paint (async)         | Before paint (sync)          |
| Performance     | Non-blocking, preferred     | Can block UI, use sparingly  |
| Use cases       | Data-fetch, logging         | Layout, DOM measurement      |
| Example         | API requests                | Animation, tooltip position  |

***

**Summary:**  
- Use `useEffect` for async side effects that don’t affect layout.
- Use `useLayoutEffect` for DOM reads or changes that must be applied before rendering, such as animations or position fixes.[1][3][4][5][7][9]



# what is propsType in react?

**Interview-ready answer (short & clean):**

> **Prop types** in React are a way to **define and validate the expected data types for props a component should receive**. This helps catch bugs early and documents your component’s API.  
> Example (using PropTypes):
> ```js
> import PropTypes from 'prop-types';
> 
> function User({ name, age }) {
>   return <div>{name} is {age} years old</div>;
> }
> 
> User.propTypes = {
>   name: PropTypes.string.isRequired,
>   age: PropTypes.number.isRequired,
> };
> ```
>  
> In TypeScript, you’d use interfaces or types for compile-time checking instead.


# how you will implement component will unmount in functional component?
- In a React functional component, **componentWillUnmount** is implemented using the `useEffect` Hook with a cleanup function.

> **Interview answer:**  
> In functional components, cleanup logic for unmounting is placed inside the return statement of `useEffect`. The return function runs when the component unmounts.

**Example:**
```js
useEffect(() => {
  // setup code (runs on mount)
  return () => {
    // cleanup code (runs on unmount, e.g., remove event listeners)
  };
}, []);
```

This is the direct equivalent of `componentWillUnmount` from class components, keeping resource management clean and efficient.







// what is useLayout hook?
// what is react fiber 
// what is props types
// shall we use useSelector in class component
// how you will implement component unmount in fuctional component?