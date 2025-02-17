/*

import logo from './logo.svg';
import './App.css';
import Header from './components/Navbar';
import About from './components/About';
import BasicCard from './components/skills';

function App() {
  return (
    <div className="App">
      

      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>

      
        <Header></Header>  
        <div style={{ paddingTop: "64px" }}>
        <About></About>
        </div>

        <div style={{ padding: '20px' }}>
        <BasicCard />
      </div>


    </div>
  );
}

export default App;

*/



import React from "react";
import "./App.css";
import Header from "./components/Navbar";
import About from "./components/About";
import BasicCard from "./components/skills";
import MultiActionAreaCard from "./components/projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ paddingTop: "64px" }}>
        <section id="about">
          <About />
        </section>
      </div>

      <div style={{ padding: "20px" }}>
        <section id="skills">
          <BasicCard />
        </section>
      </div>

     <div>
      <section id="projects">
    <MultiActionAreaCard />
    </section>
    </div>
 
<div>
  <section id="contact">
  <Contact/>
  </section>
</div>

    </div>
  );
}

export default App;
