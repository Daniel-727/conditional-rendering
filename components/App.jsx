import React from "react";
import Login from "./Login";

let isLoggedIn = false;

function App() {
  //with the ternary operator, it is basically the expression form of an if/else statement. So we're able to use it to render different components based on certain conditions.
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
