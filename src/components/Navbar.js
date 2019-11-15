import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <>
      <ul className="flex">
        <li className="mr-6">
          <HashLink smooth to="/contact#hi">Active</HashLink>
        </li>
        <li className="mr-6">
        <HashLink smooth to="/contact#hello">Active</HashLink>
        </li>
        <li className="mr-6">
        <HashLink smooth to="/contact#ollah">Active</HashLink>
        </li>
        <li className="mr-6">
        <HashLink smooth to="/contact#hey">Active</HashLink>
        </li>
      </ul>
    </>
  )
}

export default Navbar
