import React from "react";
import ReactDOM from "react-dom";
import Test, { A } from "modules/Test";

function App(): JSX.Element {
  return (
    <>
      <h1>Woop woop woop {A}</h1>
      <Test />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
