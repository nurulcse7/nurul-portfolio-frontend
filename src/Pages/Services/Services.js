import React from 'react';
import './Services.css'
import { BsCheckLg } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h3 className='sub-title'>What I Offer</h3>
            <h1>Services</h1>
            <div className='container services_container'>
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX/Web Design</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Pure CSS with Media query responsive web design</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Bootstrap responsive web design</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>ReactBootstrap responsive web design</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Tailwind CSS component responsive web design</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>daisyUI Tailwind CSS component responsive web design</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>MATERIAL-UI responsive web design</p>
                        </li>
                    </ul>
                </article>
                {/* End of UI/UX Design area  */}

                <article className="service">
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>JavaScript Web Applications</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>ReactJS Web Applications</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>NextJS Web Applications</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>TypeScrip Web Applications</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>NodeJS Web Applications</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>MongoDB Database Web Applications</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Font-end Web Applications</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Backend Web Applications</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Full-stack Web Applications</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Migrate your app to React</p>
                        </li>
                    </ul>
                </article>
                {/* End of Web development area  */}

                <article className="service">
                    <div className="service_head">
                        <h3>Apps Development</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Website to Mobile Apps Service with Java</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Website to Tablet Apps Service with Java</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>React Native Apps development</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>With React Native an excellent choice for creating mobile apps that can be deployed on Google Play</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>With React Native an excellent choice for creating mobile apps that can be deployed on App store</p>
                        </li>
                    </ul>
                </article>
                {/* End of Apps Development area  */}



            </div>
        </section>
    );
};

export default Services;