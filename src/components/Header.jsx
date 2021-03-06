import React from "react";

const Header = props => {
  return (
    <div className="header">
      <h1>Todo List</h1>
      <span>{props.tagline}</span>
    </div>
  );
};

export default Header;
