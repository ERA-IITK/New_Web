import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  // Tech,
  Projects,
} from './components';
import Sponsors from './components/Sponsors';
import InstaHandle from './components/InstaHandle';
import Research from './components/Research';
import Team_History from './components/Team_History';
import Learning from './components/Learning';

import { Fragment } from 'react';
import { Particles } from './components/Particles';

const App = () => {
  return (
    <BrowserRouter>
      <Particles />
      <Navbar />

      <div className="pt-[64px]">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/team' element={<Team_History />} />
          <Route path='/research' element={<Research />} />
          <Route path='/learning' element={<Learning />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};


const Home = () => (
  <>
    <div>
            <Hero />
          </div>

          <div className="bg-about bg-cover bg-center bg-no-repeat">
            <About />
          </div>
          {/* <Team_History /> */}
          {/* <Projects /> */}
          {/* <Research /> */}
          <Sponsors/>
          
          {/* <div
            className="bg-experience bg-cover bg-center bg-no-repeat 
              rounded-tl-[150px] rounded-br-[150px]">
            <div
              className="bg-experienceLight bg-cover bg-center 
              bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
              <Experience />
            </div>
          </div> */}
          <div>
            <Contact />
          </div>
  </>
);

export default App;
