import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ inView }) => {
  
  return (
    <div id='nav' className={!inView ? 'bg-white w-full fixed z-10 top-0' : 'bg-white w-full'}>
      <ul className="flex">
        <li className="mr-6">
          <HashLink smooth to="/#about">Home</HashLink>
        </li>
        <li className="mr-6">
        <HashLink smooth to="/#portfolio">Portfolio</HashLink>
        </li>
        <li className="mr-6">
        <HashLink smooth to="/#contact">Contact</HashLink>
        </li>
        <li className="mr-6">
        <HashLink smooth to="/#extra">Extra</HashLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
