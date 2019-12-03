import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'



const Extra = () => {

    const [toggle, setToggle] =useState(false);

    const props = useSpring({
        to: async (next, cancel) => {
            await next({
                opacity: toggle ? 1 : 0,
                color: toggle? 'red' : 'black',
                config: {
                    delay: 1000,
                    duration: 1000
                }
            })
            await next({ opacity: 0, color: 'black' })
        },
        from: { opacity: 1, color: 'black' }
    })

    return (
        <div id='extra' className="h-screen pt-12">
            <animated.div style={props}>I will fade in and out</animated.div>
            <button onClick={()=>setToggle(!toggle)}>click here to toggle</button>
        </div>
    )
}

export default Extra
