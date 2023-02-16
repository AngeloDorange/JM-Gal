import React, {useEffect} from 'react'
import './contact.css'

import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';

import Aos from 'aos';
import 'aos/dist/aos.css';

function Contact() {

    useEffect (() => {
        Aos.init({ duration: 900, easing: 'ease' });
    }, [])


    return (
        <section className="contact">
            <div className="content">
                <div className="title">
                    <h1>Let's Talk</h1>
                    <p>Have a project or question ? Send me a message.</p>
                </div>

                <div className="social">
                    <div className="left" data-aos="fade-up" data-aos-delay="50">
                        <a href="mailto:yourmail@domain.com">hey@mertz.com</a>
                    </div>

                    <div className="right" data-aos="fade-up" data-aos-delay="70">
                        <ul>
                            <li><a href="#"><BsTwitter /></a></li>
                            <li><a href="#"><BsFacebook /></a></li>
                            <li><a href="#"><FaInstagramSquare /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer" data-aos="fade-up" data-aos-delay="90">
                    <p>&copy; {new Date().getFullYear()} All right reserved</p>
                    <p className="credit">Design and code with &hearts; by Angelo Dorange</p>
                </div>
            </div>
        </section>
    )
}

export default Contact
