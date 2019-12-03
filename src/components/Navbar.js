import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ inView }) => {

  return (
    <div id='nav' className={`${!inView ? 'navAnima sticky z-10 top-0' : ''} bg-white w-full h-12 p-2`}>
      <ul className="flex">
        <li className="mr-6">
          <HashLink smooth to="/#about">Home</HashLink>
        </li>
        <li className="mr-6">
          <HashLink smooth to="/#portfolio">Projects</HashLink>
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

export default Navbar;
