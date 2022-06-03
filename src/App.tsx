import React from "react";
import ReactDOM from "react-dom";

const App = (): JSX.Element => (
  <div id="root">
    <h1>Woop woop woop</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
