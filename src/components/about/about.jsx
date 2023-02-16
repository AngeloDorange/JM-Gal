import React, {useEffect} from 'react'
import './about.css'

import Img from '../../assets/about.jpg'

import { FiDownload } from 'react-icons/fi';

import Aos from 'aos';
import 'aos/dist/aos.css';


function About() {

    useEffect (() => {
        Aos.init({ duration: 900, easing: 'ease' });
    }, [])

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }


    return (
        <section className="about">
            <div className="content">

                <div className="image">
                    <img src={Img} alt="" />
                </div>

                <div className="text" data-aos="fade-up" data-aos-delay="50">
                    <p>I'm a Product Designer from Sydney, Australia. I specialise in <br /> UX/UI design, brand strategy and Webflow development.</p>
                </div>

                <div className="btn-about" data-aos="fade-up" data-aos-delay="70">
                    <button className="btn" onClick={onButtonClick}>DOWNLOAD RESUME <FiDownload /></button>
                </div>
            </div>
        </section>
    )
}

export default About
