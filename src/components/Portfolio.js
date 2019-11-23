import React from 'react';
import ProjectCard from './projects/ProjectCard';

const testProjects = [1, 2, 3, 4, 5, 6, 7];

const Portfolio = () => {
    return (
        <div id='portfolio' className="h-screen bg-green-300">
          <div className="w-full text-xl text-center p-5">Projects</div>
          <div className="h-full bg-red-500 flex flex-wrap justify-center">
            {testProjects.map(proj=><ProjectCard key={proj} text={proj} />)}
          </div>  
        </div>
    )
}

export default Portfolio
