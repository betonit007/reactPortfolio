import React from 'react';
import Cube from '../styles/cube/Cube'
import cloud from '../styles/images/cloud.png'


const AboutMe = () => {

    const styles = {
    
        backgroundImage: `url(${cloud}`,
        backgroundPosition: '0px 0px',
        backgroundRepeat: 'repeat-x',
    
        animation: 'animatedBackground 40s linear infinite'
    }

    return (
        <div id='about' style={styles} className="h-screen flex justify-center pb-2">
           <Cube />
        </div>
    )
}

export default AboutMe
