import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/headers';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
