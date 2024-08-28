import React, { useState, useEffect } from "react";
// import Folder from "./components/Folder";
// import explorer from "./data/folderData";
// import ComponentFunction from "./components/ComponentFunction";
// import ComponentClass from "./components/ComponentClass";

const Counter = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("counter");
    return savedCount !== null ? parseInt(savedCount, 10) : 0; //Base 10 is the standard numbering system we use in everyday life (decimal system). By specifying 10, we tell parseInt to interpret the string as a base-10 number.
  });

  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0); // To prevent negative count
  };
  // const [explorerData, setexplorer] = useState(explorer);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
