import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
import ProjectCard from './projects/ProjectCard';
import allProjects from '../utils/projects.json';


const Portfolio = () => {

  const [proj, setProj] = useState('');

  const props = useSpring({ opacity: 1, 
                            from: { opacity: 0 },
                            config: { duration: 1000 }
                           });

  return (
    <div id='portfolio' className="h-screen bg-green-300 pt-12">
      <div className="w-full flex justify-around">
        <div onClick={() => setProj('Node')}>Node.js</div>
        <div onClick={() => setProj('javaS')}>Javascript</div>
        <div onClick={() => setProj('jQuery')}>JQuery</div>
        <div onClick={() => setProj('React')}>React</div>
      </div>
      <div className="h-full bg-red-500 flex flex-wrap justify-center">
        {allProjects.slice(0, 6).map((proj, i) =>
          <a.div key={i} style={props}>
            <ProjectCard
              name={proj.projectName}
              img={proj.imgUrl}
              gitLink={proj.githubUrl}
              projLink={proj.deployedLink}
            />
          </a.div>
        )}
      </div>
    </div>
  )
}

export default Portfolio
