import React from 'react';
import CV from '../../assets/20220717-Resume.pdf';
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Check Out My Resume</a>
        <a href="#contact" className='btn btn-primary'>Message Me</a>
    </div>
    
  )
}

export default CTA
