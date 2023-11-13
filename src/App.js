import React from 'react';
import './App.css';
import  Navbar  from './containers/navbar/Navbar'; 
import  Main  from './containers/main/Main' 
import  About from './containers/about/About'
import  Project from './containers/projects/Projects'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <About/>
      <Project/>
      contact
      footer
    </div>
  );
}

export default App;
