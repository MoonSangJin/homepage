import React from 'react';

import Header from './components/Header';
import Home from './section/Home';
import About from './section/About';
import Skill from './section/Skill';
import Contact from './section/Contact';

export default function App() {
  return (
    <>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skill">
        <Skill />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
