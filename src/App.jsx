import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';

import {
  About,
  Contact,
  // Experience,
  Hero,
  Navbar,
  // Tech,
  Projects,
  Sponsors,
  InstaHandle,
  Research,
  Team_History,
  Learning,
  Particles,
  Timeline,
} from './components';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/team' element={<Team_History />} />
          <Route path='/research' element={<Research />} />
          <Route path='/learning' element={<Learning />} />
          {/* <Route path='/experience' element={<Experience />} /> */}
          {/* <Route path='/tech' element={<Tech />} /> */}

        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

const Home = () => (
  <>
    <Particles />
    <Navbar />
    <Hero />

    <div className="bg-about bg-cover bg-center bg-no-repeat">
      <About />
    </div>

    <Timeline />
    <Sponsors />
    
    <div>
      <Contact />
    </div>
    <div className="InstaHandle">
      <InstaHandle />
    </div>
  </>
);

export default App;
