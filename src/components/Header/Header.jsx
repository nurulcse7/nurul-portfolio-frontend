import React from 'react';
import CTA from './CTA';
import './Header.css'
import ME from '../../assets/profile-pic2.png'
import HeaderSocials from './HeaderSocials';
import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
        <header>
            <div className="container header_container">
            <Typewriter
            options={{
              strings: [
                `<h3>Hello I'm</h3>
                <h1>Nurul Islam</h1>
                <h2 className="text-light">Full Stack Web Developer</h2>`
              ],
              autoStart: true,
              loop: true,
            }}
          />
                <CTA></CTA>
                <HeaderSocials></HeaderSocials>
                
                <div className="me">
                    <img src={ME} alt="" />
                </div>

                <a href="#footer" className='scroll_down'>Scroll Down</a>

            </div>
        </header>
    );
};

export default Header;