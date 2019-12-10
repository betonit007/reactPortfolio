import React, { useState } from 'react';
import { Transition } from 'react-spring/renderprops';
import ProjectCard from './projects/ProjectCard';
import allProjects from '../utils/projects.json';

const Portfolio = () => {

  const [pFilter, setPFilter] = useState('A');

  return (
    <div id='portfolio' className="h-screen bg-green-300 pt-12 overflow-hidden">
      <div className="w-full flex justify-around w-5/6">
        <div className="cursor-pointer" onClick={() => setPFilter('A')}>All</div>
        <div className='cursor-pointer' onClick={() => setPFilter('Node')}>Node.js</div>
        <div className='cursor-pointer' onClick={() => setPFilter('javascript')}>Javascript</div>
        <div className='cursor-pointer' onClick={() => setPFilter('jquery')}>JQuery</div>
        <div className='cursor-pointer' onClick={() => setPFilter('React')}>React</div>
      </div>
      <div className="h-screen flex justify-center">
        <Transition
          items={pFilter}
          from={{ position: 'absolute', opacity: 0, marginTop: 500 }}
          enter={{ opacity: 1, marginTop: 0 }}
          leave={{ position: 'absolute', opacity: 0, marginTop: -500 }}
        >
          {pFilter =>
            props => <div className={`${pFilter === 'A' ? 'grid': 'flex-wrap'} flex self-center justify-center w-full pb-12`} style={props}>
              {allProjects.filter(p => p.Description.includes(pFilter)).map(p => <ProjectCard item={p} />)}
            </div>
          }
        </Transition>
      </div>
    </div>

  )
  
}

export default Portfolio
