import React from 'react';
import IMG1 from '../../../assets/dental/services-1.jpg';
import IMG2 from '../../../assets/dental/services-2.jpg';
import IMG3 from '../../../assets/dental/services-3.jpg';
import IMG4 from '../../../assets/dental/services-4.jpg';
import IMG5 from '../../../assets/dental/services-5.jpg';
import IMG6 from '../../../assets/dental/services-6.jpg';


import useTitle from '../../../hooks/useTitle';

const Dental = () => {
  useTitle('Dental');

  return (
    <div className='max-w-[1440px] mx-auto mt-8'>
      <h3 className='text-2xl text-center text-green-500'>
        Welcome to Dental Care project detail page
      </h3>
      <h1 className='text-center text-secondary'>Dental Care Project</h1>

      <div className='p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <img src={IMG1} className='rounded-xl' alt='ImageBody'/>
          <img src={IMG2} className='rounded-xl' alt='ImageBody'/>
          <img src={IMG3} className='rounded-xl' alt='ImageBody'/>
          <img src={IMG4} className='rounded-xl' alt='ImageBody'/>
          <img src={IMG5} className='rounded-xl' alt='ImageBody'/>
          <img src={IMG6} className='rounded-xl' alt='ImageBody'/>
        </div>
        <div className='my-6'>
        <h3 className='text-xl'>Project Description:</h3>
        <p>✔ This project implements dental care services that need a specialist Dentist. Here people can take a dental service in their flexible time slot with service categories. Also, he/she can do one more service in a day but not at the same time</p>
        <p>✔ The user can't take a service without login and login form also validation implemented, such as full name is required, password must be 6 characters, need a uppercase (CAPITAL) and a special character (!@#$&*).</p>
        <p>✔ Admin can manage the whole website, and also he manages users, Doctors like to add or delete.</p>
        <p>✔ Anyone can contact with admin by using the contact form.</p>
        <p>✔ Authentication with Firebase and Authorization with JSON WEB TOKEN (JWT)</p>
        <p>✔ Deploy frontend in Firebase (Client)</p>
          <p>✔ Deploy backend in Vercel (server)</p>
        </div>
        <div className='my-6'>
        <a href='https://dental-care-com.web.app/' target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Live Website</a>
        <a href='https://github.com/nurulcse7/dental-care-client' target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Front-end Code</a>
        <a href='https://github.com/nurulcse7/dental-care-server' target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Back-end Code</a>
        <a
            href='https://github.com/nurulcse7/dental-care-client#readme'
            target='_blank'
            rel='noopener noreferrer'
            className='btn  capitalize mr-3 my-3'
          >
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dental;
// <a href='https://www.youtube.com/'  target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Video Preview</a>