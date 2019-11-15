import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div className=''>
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
