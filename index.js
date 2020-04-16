import React from "react";
import ReactDOM from "react-dom";
import HelloMessage from "./src/HelloMessage";

class App extends React.Component {
  render() {
    return <HelloMessage name="Jane" />;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
