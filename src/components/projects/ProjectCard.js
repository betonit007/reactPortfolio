import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';

const ProjectCard = ({item: { deployedLink, githubUrl, imgUrl , projectName}}) => {
 

  return (


    <div>
      <img src={imgUrl} alt='project' />
    </div>

    // <div className="h-64 w-64 flex overflow-hidden flex-shrink" onMouseLeave={() => changeBoolState()} onMouseEnter={() => changeBoolState()} >
    //   <a.div className='c w-64 h-64 bg-norepeat bg-cover ' style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
    //     <img className='h-64 w-64' src={imgUrl} alt={projectName}/>
    //     </a.div>
    //   <a.div className='c w-64 h-64 bg-yellow-400' style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
    //     <div className="text-xl">{projectName}</div>
    //     <a href={githubUrl} target='_blank' rel="noopener noreferrer">Project Link</a>
    //     <a href={deployedLink} target='_blank' rel="noopener noreferrer">Github Link</a>
    //   </a.div>
    // </div>

  )
}

export default ProjectCard
