import React, { useState } from 'react';
import { Transition } from 'react-spring/renderprops';
import ProjectNav from '../components/projects/ProjectNav';
import ProjectCard from './projects/ProjectCard';
import allProjects from '../utils/projects.json';

const Portfolio = () => {

  const [pFilter, setPFilter] = useState('A');

  return (
    <div id='portfolio' className="h-screen bg-green-300 w-full pt-16">
      <ProjectNav setPFilter={setPFilter} />

    </div>
  )

}

export default Portfolio
