import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';

const ProjectCard = ({item: { Description, deployedLink, githubUrl, imgUrl , projectName}}) => {
  
  const [testBool, setTestBool] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: testBool ? 1 : 0,
    transform: `perspective(600px) rotateX(${testBool ? 180 : 0}deg)`,
    config: { 
      mass: 5, 
      tension: 500, 
      friction: 80,
      // delay: 1000,
      // duration: 5000 
    }
  })

  const changeBoolState = () => {
    setTestBool(!testBool);
  }
       
  return (

    <div className="flex flex-shrink" onMouseLeave={() => changeBoolState()} onMouseEnter={() => changeBoolState()} >
      <a.div className='' style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
        <img src={imgUrl} alt={projectName}/>
        </a.div>
      <a.div className='c  bg-yellow-400' style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
        <div className="text-xl">{projectName}</div>
        <a href={githubUrl} target='_blank' rel="noopener noreferrer">Project Link</a>
        <a href={deployedLink} target='_blank' rel="noopener noreferrer">Github Link</a>
      </a.div>
    </div>

  )
}

export default ProjectCard
