import React, { useState } from 'react';
import './css_assets/socialMenu.css'; // Import your CSS file
import { IoLogoFacebook, IoLogoLinkedin, IoLogoInstagram, IoLogoGithub, IoLogoYoutube } from 'react-icons/io';
import { IoAddSharp } from "react-icons/io5";
// ...


    // <li style="--i:1;--clr:#25d366">
    //   <a href="#"><ion-icon name="logo-whatsapp"></ion-icon></a>
    // </li>
    // <li style="--i:2;--clr:#1da1f2">
    //   <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
    // </li>
    //  <li style="--i:3;--clr:#FF5733">
    //   <a href="#"><ion-icon name="logo-reddit"></ion-icon></a>
    // </li>
    // <li style="--i:4;--clr:#0a66c2">
    //   <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
    // </li>
    // <li style="--i:5;--clr:#c32aa3">
    //   <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
    // </li>
    // <li style="--i:6;--clr:#fff">
    //   <a href="#"><ion-icon name="logo-github"></ion-icon></a>
    // </li>
    // <li style="--i:7;--clr:#ff0000">
    //   <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
    // </li>

const SocialMenu = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <div className={`menu ${menuActive ? 'active' : ''}`}>
      <div className="toggle" onClick={toggleMenu}>
        <IoAddSharp />
      </div>
      <ul>
        <li style={{ '--i': 0, '--clr': '#1877f2' }}>
          <a href="https://www.facebook.com/eraiitkanpur/" target="_blank"><IoLogoFacebook /></a>
        </li>
        <li style={{ '--i': 1, '--clr': '#1da1f2' }}>
          <a href = "https://instagram.com/era.iitk?igshid=MzRlODBiNWFlZA==" target="_blank"><IoLogoInstagram /></a>
        </li>
        <li style={{ '--i': 2, '--clr': '#FF5733' }}>
          <a href="https://www.github.com/ERA-IITK" target="_blank"><IoLogoGithub /></a>
        </li>
        <li style={{ '--i': 3, '--clr': '#0a66c2' }}>
        <a href= "https://www.youtube.com/channel/UCaaEga5jSCEN6ph6w9E9TVQ" target="_blank"><IoLogoYoutube /></a>
        </li>
        <li style={{ '--i': 4, '--clr': '#c32aa3' }}>
          <a href="https://www.linkedin.com/company/era-iitk/about/" target="_blank"><IoLogoLinkedin /></a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMenu;
