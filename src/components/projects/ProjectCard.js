import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';

const ProjectCard = ({item: { Description, deployedLink, githubUrl, imgUrl , projectName}}) => {
  
  const [testBool, setTestBool] = useState(false);

  // const contentProps = useSpring({
  //   config: { duration: 1000 },
  //   opacity: testBool ? 0 : 1,
  //   marginTop: testBool ? -500 : 0
  // });

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

    <div className="h-64 w-64 flex overflow-hidden" onMouseLeave={() => changeBoolState()} onMouseEnter={() => changeBoolState()} >
      <a.div className='c w-64 h-64 bg-norepeat bg-cover ' style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
        <img className='h-64 w-64' src={imgUrl} alt={projectName}/>
        </a.div>
      <a.div className='c w-64 h-64 bg-yellow-400' style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
        <div className="text-xl">{projectName}</div>
        <a href={githubUrl} target='_blank' rel="noopener noreferrer">Project Link</a>
        <a href={deployedLink} target='_blank' rel="noopener noreferrer">Github Link</a>
      </a.div>
    </div>

  )
}

export default ProjectCard
