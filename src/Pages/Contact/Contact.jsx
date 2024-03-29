import React, { useRef } from 'react';
// import ReactDom from 'react-dom';
// import MessengerCustomerChat from 'react-messenger-customer-chat';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const Contact = () => {
  useTitle('Contact');

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_36vclrk',
        'template_uib0ack',
        form.current,
        'y3HJdYXyeuv1sR5i4'
      )
      .then(
        (result) => {
          //     console.log(result.text);
          toast.success('Congrats! Successfully sent message');
        },
        (error) => {
          //     console.log(error.text);
          toast.error(error.message);
        }
      );
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h3 className='sub-title'>Get In Touch</h3>
      <h1>Contact Me</h1>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h3>Email</h3>
            <h4>nurul.cse7@gmail.com</h4>
            <a
              href='mailto:nurul.cse7@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Send an email
            </a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon' />
            <h3>Messenger</h3>
            <h4>facebook</h4>
            <a
              href='https://www.facebook.com/nurul.bd.775'
              target='_blank'
              rel='noopener noreferrer'
            >
              Send a message
            </a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h3>WhatsApp</h3>
            <h4>+8801601915577</h4>
            <a
              href='https://api.whatsapp.com/send?phone=+8801601915577'
              target='_blank'
              rel='noopener noreferrer'
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input
            type='address'
            name='address'
            placeholder='Your Address'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <input
            type='number'
            name='phone'
            placeholder='Your Mobile Number'
            required
          />
          <textarea
            name='message'
            rows='7'
            placeholder='Type your message here'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary ml-2'>
            Send Message
          </button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
// 109422248585811
// 1552485545263244 
// <MessengerCustomerChat
//   pageId='109422248585811'
//   appId='1552485545263244'
//   //   htmlRef="<REF_STRING>"
// />;
