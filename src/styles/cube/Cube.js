import React from 'react'
import './cube.css';
import plane from '../images/plane.png'

const Cube = () => {
    return (
        <div className="wrap pt-32">
            <div className="cube">
                <div className="front"></div>
                <div className="back"></div>
                <div className="top"></div>
                <div className="bottom"></div>
                <div className="left flex items-center justify-end"> 
                  <img className='w-32 h-32' alt='rotating airplane' src={plane} />
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}

export default Cube
