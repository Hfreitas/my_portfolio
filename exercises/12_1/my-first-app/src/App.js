import React from 'react';
import './App.css';
import todoTasks from './tasks';

const createTaskList = (array) => {
  return array.map((task) => <li>{task}</li>);
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">My First React ToDo List</header>
      <ol className="task-list">{createTaskList(todoTasks)}</ol>
    </div>
  );
};

export { App, createTaskList };
