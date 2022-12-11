import React from 'react';
import Resume from '../../assets/Resume of Nurul Islam.pdf';
import CV from '../../assets/Cover-Letter of Nurul Islam.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} download className='btn'>
        Download Resume
      </a>
      <a href='#contact' className='btn'>
        Let's Talk
      </a>
      <a href={CV} download className='btn'>
        Download CV
      </a>
    </div>
  );
};

export default CTA;
