import React, { useEffect, useState } from 'react';
import AboutMe from './AboutMe';
import Navbar from './Navbar';
import ContactMe from './ContactMe';
import Portfolio from './Portfolio';
import Extra from './Extra';

const Main = () => {

  useEffect(() => {
    const whatIDo = document.getElementById('extra');
    elementInViewport(whatIDo);

    // console.log(whatIDo)
    // whatIDo.scrollIntoView();

    // window.addEventListener("scroll", () => console.log(Navbar.body.scrollIntoView));
  }, [])

  const elementInViewport = (el) => {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
     
    console.log( top, left, width, height );
    }
  

  const [ scrolledTo, setScrolledTo ] = useState(false);

  return (
    <>
      <AboutMe />
      <Navbar />
      <Portfolio />
      <ContactMe />
      <Extra />
    </>
  )
}

export default Main
