import React from "react";
var isDone = false;
function Strike() {
  // document.getElementById("root").style.textDecoration="line-through"
  isDone = false;
}
function unStrike() {
  // document.getElementById("root").style.textDecoration="none"
  isDone = true;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      {/* <p>Buy Milk</p> */}
      {/* the below buttons dont work because of the concept of hooks */}
      <button onClick={Strike}>Strike</button>
      <button onClick={unStrike}>unStrike</button>
    </div>
  );
}

export default App;
