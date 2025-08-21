import React, { useState, useEffect, useRef, createContext, useContext } from "react";
const ThemeContext = createContext();
function Ex() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  return (
    <ThemeContext.Provider value="blue">
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>React Hooks Example</h1>
        <StateExample count={count} setCount={setCount} />
        <EffectExample />
        <ContextExample />
        <RefExample countRef={countRef} />
      </div>
    </ThemeContext.Provider>
  );
}

function StateExample({ count, setCount }) {
  return (
    <div>
      <h2>useState Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function EffectExample() {
  useEffect(() => {
    console.log("print the cons !");
  }, [] );

  return <h2>useEffect Example ()</h2>;
}

function ContextExample() {
  const theme = useContext(ThemeContext);
  return <h2>useContext Example: Theme is {theme}</h2>;
}

function RefExample({ countRef }) {
  const [, forceRender] = useState(0); 

  const handleIncrease = ()   => {
    countRef.current += 1;
    forceRender((prev) => prev + 1); 
  };

  return (
    <div>
      <h2>useRef Example</h2>
      <p>Ref Count: {countRef.current}</p>
      <button onClick={handleIncrease}>Increase Ref</button>
    </div>
  );
}

export default Ex;