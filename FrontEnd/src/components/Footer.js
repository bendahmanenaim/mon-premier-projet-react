import React from "react";
import Logo from '../assets/img/logokasa.png';


const Footer= () => {
  return (
    <>
   <footer className='footer'>
            <img src={Logo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
   </>
  );
};

export default Footer;