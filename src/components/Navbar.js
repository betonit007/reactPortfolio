import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useSpring, animated as a } from 'react-spring';

const Navbar = ({ inView }) => {

  const [divView, setDiv] = useState(true);


  const divWatch = new IntersectionObserver(([entries]) => {  // class IntersectionObserver monitors targeted div (#nav) to see if it intersects viewport
    switch (entries.target.id) {
      case 'extra':
        setDiv('extra')
        break;
      case 'portfolio':
        setDiv('portfolio')
        break;
      case 'contact':
        setDiv('contact')
        break;
      default:
        setDiv(true)
    }
  }, { threshold: [.80] })

  useEffect(() => {
    // window.addEventListener('scroll', handleScroll);
    divWatch.observe(document.querySelector("#extra"));
    divWatch.observe(document.querySelector("#contact"));
    divWatch.observe(document.querySelector("#portfolio"));
  }, [])

  // const handleScroll = (val = true) => {
  //   setScrolled(val)
  // }

  // const navAnimation = useSpring({
  //   to: async (next, cancel) => {
  //     await next({
  //       position: inView ? 'static' : 'sticky',
  //       top: -100,
  //       zIndex: 10
  //     })
  //     await next({
  //       top: 0,
  //       config: {
  //         mass: 5,
  //         tension: 50,
  //         friction: 50,
  //         delay: 50,
  //         duration: 100
  //       }
  //     })

  //   }
  // });

  return (

    // <a.div id='nav' style={navAnimation} className='bg-white w-full h-12 p-2'>
      <div id="nav" className={`${!inView ? 'navAnima sticky z-10 top-0' : ''} bg-white w-full h-12 p-2`}>
      <ul className="flex">
        <li className="mr-6">
          <HashLink smooth to="/#about">Home</HashLink>
        </li>
        <li className="mr-6">
          {divView === 'portfolio' ? <div className="text-red-700">Projects</div> : <HashLink smooth to="/#portfolio">Projects</HashLink>}
        </li>
        <li className="mr-6">
          {divView === 'contact' ? <div className="text-red-700">Contact</div> : <HashLink smooth to="/#contact">Contact</HashLink>}
        </li>
        <li className="mr-6">
          {divView === 'extra' ? <div className='text-red-700'>Extra</div> : <HashLink smooth to="/#extra">Extra</HashLink>}
        </li>
      </ul>
    </div>
    //</a.div>
  )
}

export default Navbar;
