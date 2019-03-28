import React, { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import { getRandomTagline } from "../helpers";
import uuid from "uuid/v4";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: {}
    };
  }

  componentWillMount() {
    this.setState({
      headline: getRandomTagline()
    });
  }

  addToDo = text => {
    const task = {
      uuid: uuid(),
      text: text,
      done: false
    };

    this.setState(state => {
      state.tasks[task.uuid] = task;
      return state;
    });
  };

  updateText = (uuid, text) => {
    this.setState(state => {
      state.tasks[uuid].text = text;
      return state;
    });
  };

  toggleDone = e => {
    const checkbox = e.target;
    console.log(checkbox.value);
    console.log("checking");

    this.setState(state => {
      state.tasks[checkbox.value].done = checkbox.checked;
      return state;
    });
  };

  removeTask = uuid => {
    console.log("remove", uuid);
    this.setState(state => {
      delete state.tasks[uuid];
      return state;
    });
  };

  render() {
    return (
      <div className="container">
        <Header tagline={this.state.headline} />
        <Form addToDo={this.addToDo} />
        <TodoList
          tasks={this.state.tasks}
          updateText={this.updateText}
          toggleDone={this.toggleDone}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default App;
