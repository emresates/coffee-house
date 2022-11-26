import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarItems } from '../data/NavbarData';

function Navbar() {
  return (
    <div className="navbar">
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
