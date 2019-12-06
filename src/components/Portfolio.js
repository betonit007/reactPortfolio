import React, { useState } from 'react';
import { Transition } from 'react-spring/renderprops';
import ProjectCard from './projects/ProjectCard';
import allProjects from '../utils/projects.json';

const Portfolio = () => {

  const [pFilter, setPFilter] = useState(true);

  return (
    <div id='portfolio' className="h-screen bg-green-300 pt-12">
      <div className="w-full flex justify-around w-5/6">
        <div className="cursor-pointer" onClick={() => setPFilter(!pFilter)}>All</div>
        <div className='cursor-pointer' onClick={() => setPFilter('Node')}>Node.js</div>
        <div className='cursor-pointer' onClick={() => setPFilter('javascript')}>Javascript</div>
        <div className='cursor-pointer' onClick={() => setPFilter('jquery')}>JQuery</div>
        <div className='cursor-pointer' onClick={() => setPFilter('React')}>React</div>
      </div>
      <div className="h-screen flex justify-center">
        <Transition
          items={pFilter}
          from={{ position: 'absolute', opacity: 0, marginTop: 500 }}
          enter={{ opacity: 1, marginTop: 0}}
          leave={{ position: 'absolute', opacity: 0, marginTop: -500 }}
          >
          {pFilter =>
            pFilter
              ? props => <div className='flex flex-wrap justify-center' style={props}>
                {allProjects.filter(p => p.Description.includes('A')).map(p => <ProjectCard item={p} />)}
              </div>
              : 
              props => <div className='flex flex-wrap justify-center' style={props}>
                {allProjects.filter(p => p.Description.includes('React')).map(p => <ProjectCard item={p} />)}
              </div>
          }
        </Transition>

      </div>
    </div>

  )

}

export default Portfolio
