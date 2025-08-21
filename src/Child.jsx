import React from "react";

const Child = ({ parentMessage, sendDataToParent }) => {
  return (
    <div style={styles.child}>
      <h2>Child Component</h2>
      <p>Message from Parent: {parentMessage}</p>

      <button onClick={() => sendDataToParent("Hello Parent, I'm your Child!")}>
        Send Data to Parent
      </button>
    </div>
  );
};

const styles = {
  child: { padding: "20px", border: "2px solid green", margin: "20px" },
};

export default Child;
