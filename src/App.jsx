import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Archiving from './sections/Archiving';
import Projects from './sections/Projects';
import Career from './sections/Career';
import Contact from './sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Archiving />
      <Projects />
      <Career />
      <Contact />
    </Layout>
  );
}

export default App;
