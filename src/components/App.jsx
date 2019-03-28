import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import { getRandomTagline } from "../helpers";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoItems: {}
    };
  }

  render() {
    return (
      <div className="container">
        <Header tagline={getRandomTagline()} />
        <Form />
        <TodoList />
      </div>
    );
  }
}

export default App;
