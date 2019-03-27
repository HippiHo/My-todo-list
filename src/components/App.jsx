import React, { Component } from "react";
import Header from "./Header";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header tagline="Whatcha gonna do? Whatcha gonna do when they come for you?" />
        <TodoList />
      </div>
    );
  }
}

export default App;
