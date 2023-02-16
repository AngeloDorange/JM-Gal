import React, {useEffect} from 'react'
import './port.css'

import Img1 from '../../assets/p1.jpg'
import Img2 from '../../assets/p2.jpg'
import Img3 from '../../assets/p3.jpg'

import Aos from 'aos';
import 'aos/dist/aos.css';

function Port() {

    useEffect (() => {
        Aos.init({ duration: 900, easing: 'ease' });
    }, [])


    return (
        <section className="portfolio">
            <div className="content">
                <div className="title">
                    <h3>Case Studies</h3>
                </div>

                <div className="cards">
                    
                    <div className="card">
                        <div className="image">
                            <img src={Img1} alt="" />
                        </div>
                        <div className="body-card">
                            <div className="left" data-aos="fade-up" data-aos-delay="50">
                                <h1>Painting</h1>
                                <p>Brandig, Identity, Web Design, UX/UI</p>
                            </div>
                            <div className="right" data-aos="fade-up" data-aos-delay="70">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, ratione ullam labore ducimus aliquam exercitationem, dignissimos, perspiciatis dolores veritatis temporibus necessitatibus? Ab a unde beatae fugit recusandae itaque soluta illo, modi numquam dolores magni impedit, ullam harum eligendi? Aspernatur quis ipsum iusto iste adipisci impedit id ex laboriosam dicta mollitia.</p>
                                <div className="btn-card">
                                    <a className="btn" href="#">View case study<strong></strong></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={Img2} alt="" />
                        </div>
                        <div className="body-card">
                            <div className="left" data-aos="fade-up" data-aos-delay="50">
                                <h1>Painting</h1>
                                <p>Brandig, Identity, Web Design, UX/UI</p>
                            </div>
                            <div className="right" data-aos="fade-up" data-aos-delay="70">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, ratione ullam labore ducimus aliquam exercitationem, dignissimos, perspiciatis dolores veritatis temporibus necessitatibus? Ab a unde beatae fugit recusandae itaque soluta illo, modi numquam dolores magni impedit, ullam harum eligendi? Aspernatur quis ipsum iusto iste adipisci impedit id ex laboriosam dicta mollitia.</p>
                                <div className="btn-card">
                                    <a className="btn" href="#">View case study<strong></strong></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image">
                            <img src={Img3} alt="" />
                        </div>
                        <div className="body-card">
                            <div className="left" data-aos="fade-up" data-aos-delay="60">
                                <h1>Painting</h1>
                                <p>Brandig, Identity, Web Design, UX/UI</p>
                            </div>
                            <div className="right" data-aos="fade-up" data-aos-delay="70">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, ratione ullam labore ducimus aliquam exercitationem, dignissimos, perspiciatis dolores veritatis temporibus necessitatibus? Ab a unde beatae fugit recusandae itaque soluta illo, modi numquam dolores magni impedit, ullam harum eligendi? Aspernatur quis ipsum iusto iste adipisci impedit id ex laboriosam dicta mollitia.</p>
                                <div className="btn-card">
                                    <a className="btn" href="#">View case study<strong></strong></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Port
