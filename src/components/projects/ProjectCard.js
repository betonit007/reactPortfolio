import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';

const ProjectCard = ({ img }) => {

    const [testBool, setTestBool] = useState(true);

    const contentProps = useSpring({
        opacity: testBool ? 0 : 1,
        marginTop: testBool ? -500 : 0
        
    });

    const changeBoolState = () => {
        setTestBool(!testBool);
    } 

    return (
       
           <div className="bg-norepeat bg-cover h-32 w-32 flex overflow-hidden" onMouseLeave={()=>changeBoolState()} onMouseEnter={()=>changeBoolState()} style={{backgroundImage: `url('https://picsum.photos/id/1/200/300')`}}>
              <a.div className="h-16 w-16 m-2 overflow-hidden bg-yellow-400" style={contentProps}>
                  
              </a.div>
           </div>
          
    )
}

export default ProjectCard
