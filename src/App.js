import logo from './logo.svg';
import './App.css';

//Import useState Hook from react
import React, { useState } from 'react';

// 引入NavLink组件
import { NavLink, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NavLink
          to="/page/todolist"
          className='nav-link'
          activeClassName='active'
        >
          todolist
        </NavLink>
        <Link to="/page/todolist2">todolist-function</Link>
        <Link to="/page/todolist3">todolist-reducer</Link>
      </header>
    </div>
  );
}

export default App;
