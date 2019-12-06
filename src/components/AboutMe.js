import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useSpring, animated as a } from 'react-spring';
import Particles from 'react-particles-js';
import { particlesConfig } from '../styles/particlesConfig';
import arrowImg from '../styles/images/arrow.png';

const AboutMe = () => {

  const [testBool, setTestBool] = useState(false);

  // const contentProps = useSpring({
  //   config: { duration: 1000 },
  //   opacity: testBool ? 0 : 1,
  //   marginTop: testBool ? -500 : 0
  // });

  const { transform } = useSpring({
    transform: `rotate(${testBool ? 90 : 0}deg)`,
    config: {
      mass: 10,
      tension: 500,
      friction: 50,
      // delay: 1000,
      // duration: 5000 
    }
  })

  const changeBoolState = () => {
    setTestBool(!testBool);
  }

  return (
    <div id='about' className="h-screen flex justify-center items-center homeBg">
      <Particles className='w-full h-full' params={particlesConfig} />
      <a.div
        className='w-32 h-32 absolute p-8 text-xl flex justify-center'
        style={{ transform }}
        onMouseLeave={() => changeBoolState()}
        onMouseEnter={() => changeBoolState()}
      >
        <div className="w-full">
          <HashLink smooth to="/#portfolio">
            <img src={arrowImg} alt="arrowPointer" />
          </HashLink>
        </div>
      </a.div>
    </div >
  )
}

export default AboutMe
