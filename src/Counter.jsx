import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);
  
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
    </div>
  );
};

export default Counter;
