import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, logotext} from '../assets';
import { NavLink } from 'react-router-dom';
import { ArrowBackIosNewSharp } from '@mui/icons-material';

const Navbar1 = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.90] xxs:h-[12vh]`}>
        <Link to="/" style={{ position: 'fixed', top: '5vh', left: '5vw', zIndex: '1000000' }}>
            <ArrowBackIosNewSharp style={{ color: 'black' }} />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-4 mt-2" style={{ position: 'fixed', left: '9vw', zIndex: '1000000' }}>
          <Link
            to="/team"
            className={`${
              active === 'team_history' ? 'text-french' : 'text-eerieBlack'
            } hover:text-taupe text-[15px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links`}
            onClick={() => setActive('team_history')}
          >
            Team
          </Link>
          <Link
            to="/projects"
            className={`${
              active === 'projects' ? 'text-french' : 'text-eerieBlack'
            } hover:text-taupe text-[15px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links`}
            onClick={() => setActive('projects')}
          >
            Projects
          </Link>
          <Link
            to="/research"
            className={`${
              active === 'research' ? 'text-french' : 'text-eerieBlack'
            } hover:text-taupe text-[15px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links`}
            onClick={() => setActive('research')}
          >
            Research
          </Link>
          <Link
            to="/learning"
            className={`${
              active === 'learning' ? 'text-french' : 'text-eerieBlack'
            } hover:text-taupe text-[15px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links`}
            onClick={() => setActive('learning')}
          >
            Learning
          </Link>
        </ul>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto flex-row-reverse">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
              
        {/* <div style={{ right: 0 }}> */}
        <img
            src={logotext}
            alt="logo"
            className="sm:w-[26.04166666666vw] sm:h-auto w-[4.427083333333vw] h-auto -ml-[0.6rem] object-contain"
        />
        &nbsp;
        &nbsp;
        &nbsp;
        {/* </div> */}

          {/* if you have text you want besides your logo it comes here.
          Otherwise delete this if you don't need it. */}
          
          <img 
                src={logo} // your logo comes here
                alt="logo"
                className="sm:w-[5.2083333333333vw] sm:h-[5.2083333333333vw] w-[4.6875vw] h-[4.6875vw] object-contain mr-3"
            />
        </Link>
        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? 'menu-open' : 'menu-close'
                }`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end mt-[10rem] -ml-[35px]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
