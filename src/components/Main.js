import React, { useEffect, useState } from 'react';

import AboutMe from './AboutMe';
import Navbar from './Navbar';
import ContactMe from './ContactMe';
import Portfolio from './Portfolio';
import Extra from './Extra';

const Main = () => {

  const [inView, setinView] = useState(null);

  const setNavBarStill = (arg) => {
    setinView(arg);
    if (!arg) {
      navBarWatch.disconnect();
      navBarWatch.observe(document.querySelector("#about"))
    }
  }

  const navBarWatch = new IntersectionObserver(([entries]) => {  // class IntersectionObserver monitors targeted div (#nav) to see if it intersects viewport
    setNavBarStill(entries.isIntersecting)
  }, { threshold: [1] })

  useEffect(() => {
    // observing a target element
    navBarWatch.observe(document.querySelector("#nav"));
  }, [])




  return (
    <>
      <AboutMe />
      <Navbar inView={inView} />
      <Portfolio />
      <ContactMe />
      <Extra />
    </>
  )
}

export default Main
