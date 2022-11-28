import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarItems } from '../data/NavbarData';

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return (
    <div className={scrollPosition > 100 ? 'navbar active' : 'navbar'}>
      <h1>Coffeverse</h1>
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
    </div>
  );
}

export default Navbar;
