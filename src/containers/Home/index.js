import React from 'react';

import Header from '../Header';
import Projects from '../Projects';
import About from '../About';
import Work from '../Work';
import Footer from '../Footer';

const Home = props => {
  return (
    <React.Fragment>
      <Header />
      <Projects />
      <About />
      <Work />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
