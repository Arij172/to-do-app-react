import React from "react";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";

const App = () => {
  return (
    <div>
      <h1>ToDo Application</h1>
      <AddTask />
      <h2>All Tasks</h2>
      <ListTask />
      <h2>Done Tasks</h2>
      <ListTask filter="done" />
      <h2>Not Done Tasks</h2>
      <ListTask filter="notDone" />
    </div>
  );
};

export default App;

