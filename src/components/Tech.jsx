import React from 'react'

import { BallCanvas } from './canvas';

import { SectionWrapper } from '../HOC';
import { technologies } from '../constants';



const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-18'>
      {technologies.map((technology)=>(
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");