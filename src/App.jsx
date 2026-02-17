import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Awards from './sections/Awards';
import Projects from './sections/Projects';
import Timeline from './sections/Timeline';
import Contact from './sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Awards />
      <Projects />
      <Timeline />
      <Contact />
    </Layout>
  );
}

export default App;
