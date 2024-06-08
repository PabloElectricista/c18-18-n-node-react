import React, { useState, useEffect } from 'react';
import LogosFooter from "./LogosFooter";
import logo from "../../assets/logonew.png";
import "./footer.css";

const DesktopFooter = () => {
  return (
    <div className='footerGral'>
      <img src={logo} alt='logoOrganizacion' className='logo' />
      <LogosFooter />
      <div className='divHoraFooter'>
        <p className='pFooter'>© All rights reserved.</p>
      </div>
    </div>
  );
};

const MobileFooter = () => {
  return (
    <div className='footerGralMobile'>
      <img src={logo} alt='logoOrganizacion' className='logoMobile' />
      <LogosFooter />
      <div className='divHoraFooterMobile'>
        <p className='pFooter'>© All rights reserved.</p>
      </div>
    </div>
  );
};

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? <MobileFooter /> : <DesktopFooter />;
};

export default Footer;
