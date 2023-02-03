import React from 'react';
import IMG1 from '../../../assets/resale/furniture1.jpg';
import IMG2 from '../../../assets/resale/furniture2.jpg';
import IMG3 from '../../../assets/resale/furniture3.jpg';

import useTitle from '../../../hooks/useTitle';

const Resale = () => {
  useTitle('Resale');

  return (
    <div className='max-w-[1440px] mx-auto mt-8'>
      <h3 className='text-2xl text-center text-green-500'>
        Welcome to resale furniture detail page
      </h3>
      <h1 className='text-center text-secondary'>Resale Furniture</h1>

      <div className='p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <img src={IMG1} className='rounded-xl' alt='Recipe Asada' />
          <img src={IMG2} className='rounded-xl' alt='Recipe Greek-Ribs' />
          <img src={IMG3} className='rounded-xl' alt='Recipe Vegetable-Soup' />
        </div>
        <div className='my-6'>
          <h3 className='text-xl'>Project Description:</h3>
          <p>
            ✔ In this project implement for Resale Furniture. Here buyers can purchase with various categories, Seller can sell and advertise their products.
          </p>
          <p>✔ Admin can manage, user, buyer, seller, dashboard, and the whole website systems.</p>
          
          <p>
            ✔ The user can't take a buy without login and login form also validation is implemented, such as a full name is required, the password must be 6 characters, need the uppercase (CAPITAL LETTER), need the lowercase (small letter) and a unique character (!@#$&*), etc.
          </p>
          <p>
            ✔ Everyone can buy and pay with Stripe (payment gateway). Anyone can contact with admin by using the contact form.
          </p>
          <p>✔ Also user can report any products/ furniture that are good or bad.</p>
          <p>✔ Implement CRUD operation</p>
          <p>✔ Storage data in mongodb database such as categories, furniture, orders, payments, reports, users, etc.</p>
          <p>✔ Deploy frontend in Firebase (Client)</p>
          <p>✔ Deploy backend in Vercel (server)</p>
        </div>
        <div className='my-6'>
          <a
            href='https://resale-furniture-bd-com.web.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='btn  capitalize mr-3 my-3'
          >
            Live Website
          </a>
          <a
            href='https://github.com/nurulcse7/resale-furniture-frontend'
            target='_blank'
            rel='noopener noreferrer'
            className='btn  capitalize mr-3 my-3'
          >
            Front-end Code
          </a>
          <a
            href='https://github.com/nurulcse7/resale-furniture-server'
            target='_blank'
            rel='noopener noreferrer'
            className='btn  capitalize mr-3 my-3'
          >
            Back-end Code
          </a>
          <a
            href='https://github.com/nurulcse7/resale-furniture-frontend#readme'
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

export default Resale;
// <a href='https://www.youtube.com/'  target='_blank' rel="noopener noreferrer" className='btn  capitalize mr-3 my-3'>Video Preview</a>
