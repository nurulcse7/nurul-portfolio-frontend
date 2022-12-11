import React from 'react';
import './Testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Navigation,  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useTitle from '../../hooks/useTitle';


const data = [
    {
        "id": 1,
        "avatar": Avatar1,
        "name": "Arafat Islam Royal",
        "review": "This was a fantastic experience from start to finish. Nurul Islam is a professional and very skilled at front end React development. We will use Nurul Islam for all our projects."
    },
    {
        "id": 2,
        "avatar": Avatar2,
        "name": "Patrick",
        "review": "Great collaboration. It's not the first time I collaborate with him. Always a professional and very skilled developer. A pleasure to work with him."
    },
    {
        "id": 3,
        "avatar": Avatar3,
        "name": "John",
        "review": "I am in love with my website. It’s so much better than I could imagine. I gave him the content that I wanted and he added photos and developed an amazing website for me. He is kind and patient and delivers an amazing product. Thank you!!! LOVE IT! A+++++"
    },
    {
        "id":4,
        "avatar": Avatar4,
        "name": "Jenifer",
        "review": "It was amazing working with Nurul Islam! So understanding, very responsive and polite and is just all around talented! Cared about my project as much as I did and that’s what I appreciated the most! Please don’t hesitate to utilize him because he will have your work looking amazing!!! I’m glad, I went with him!"
    }
]

const Testimonials = () => {
    useTitle('Testimonial');

    return (
        <section id='testimonials'>
            <h3 className='sub-title'>Review From Clients</h3>
            <h1>Testimonials</h1>

            <Swiper className='container testimonials_container'
                modules={[Navigation, Pagination]} spaceBetween={40}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                >
                {
                    data.map(({id, avatar, name, review }) => {
                        return (
                            <SwiperSlide key={id} className="testimonial">
                                <div className="client_avatar">
                                    <img src={avatar} alt="Avatar One" />
                                </div>
                                <h3 className='client_name'>{name}</h3>
                                <h4 className="client_review">{review} </h4>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper >
        </section >
    );
};

export default Testimonials;