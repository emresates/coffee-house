import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarItems } from '../data/NavbarData';

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };
  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.2 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: 'linear', duration: 0.5 }}
      className={scrollPosition > 100 ? 'navbar black' : 'navbar'}
    >
      <div
        className={state ? 'menu-open active' : 'menu-open'}
        onClick={handleClick}
      >
        <div className="menu-line menu-line-1"></div>
        <div className="menu-line menu-line-2"></div>
        <div className="menu-line menu-line-3"></div>
      </div>

      <h1>Coffeeverse</h1>
      <ul>
        {NavbarItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? item.cName + ' active' : item.cName
                }
                to={item.url}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

export default Navbar;
