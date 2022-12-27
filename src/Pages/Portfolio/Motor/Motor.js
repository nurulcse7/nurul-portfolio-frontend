import React from 'react';
import IMG1 from '../../../assets/motor/1.jpg';
import IMG2 from '../../../assets/motor/2.jpg';
import IMG3 from '../../../assets/motor/3.jpg';
import IMG4 from '../../../assets/motor/4.jpg';
import IMG5 from '../../../assets/motor/5.jpg';
import IMG6 from '../../../assets/motor/6.jpg';
import useTitle from '../../../hooks/useTitle';

const Motor = () => {
  useTitle('Motor');

  return (
    <div className='max-w-[1440px] mx-auto mt-8'>
      <h3 className='text-2xl text-center text-green-500'>
        Welcome to Motor Mechanic project detail page
      </h3>
      <h1 className='text-center text-secondary'>Motor Mechanic Project</h1>

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
        <p>✔ This project was implemented for Motor, and car servicing. Here anyone can take a service. But you need to SignUp or log in first. The login form also validation implemented, such as a full name is required, the password must be 6 characters, need an uppercase (CAPITAL) and a unique character (!@#$&*), etc.</p>
        <p>✔ Everyone makes a booking and pays with SSLCommerz (payment gateway). SSLCommerz supports Master, Visa, Express card, and other online banking cards. And bKash, Rocket, Nogod, etc mobile banking. Anyone can contact with admin by using the contact form.</p>
        <p>✔ Anyone can contact with admin by using the contact form.</p>
        <p>✔ Authentication with Firebase and Authorization with JSON WEB TOKEN (JWT)</p>
        <p>✔ Deploy frontend in Firebase (Client)</p>
          <p>✔ Deploy backend in Vercel (server)</p>
        </div>
        <div className='my-6'>
        <a href='https://motor-mechanic-com.web.app/' target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Live Website</a>
        <a href='https://github.com/nurulcse7/motor-mechanic-frontend' target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Front-end Code</a>
        <a href='https://github.com/nurulcse7/motor-mechanic-backend' target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Back-end Code</a>
        <a
            href='https://github.com/nurulcse7/motor-mechanic-frontend#readme'
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

export default Motor;
// <a href='https://www.youtube.com/'  target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Video Preview</a>