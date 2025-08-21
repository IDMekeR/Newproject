import React, { useState } from "react";
import Child from "./Child"; // Import Child Component

const Parent = () => {
  const [childMessage, setChildMessage] = useState("");

  return (
    <div style={styles.parent}>
      <h1>Parent Component</h1>
      <p>Data from Child: {childMessage}</p>

      <Child 
        parentMessage="Hello Child, I'm your Parent!" 
        sendDataToParent={(message) => setChildMessage(message)} 
      />
      
    </div>
  );
};

const styles = {
  parent: { padding: "20px", border: "2px solid blue", margin: "20px" },
};

export default Parent;
