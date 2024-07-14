import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AboutUs.css';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <section className="about-section">
            <Navbar/>
            <div className="container">
                <h2>About Us</h2>
                <p>Welcome to Book Haven, your go-to destination for all things books! We believe in the power of stories and the joy of reading. Our mission is to provide a diverse selection of books, exceptional customer service, and a cozy space for book lovers to gather and share their passion.</p>
                
                <div className="team">
                    <div className="team-member">
                        <img src="https://1.bp.blogspot.com/-j-ERWuBRTuA/YTY_6WB8QZI/AAAAAAAADig/BGAaNkvSSrESO6039J0YxMC_IfgohWZIwCLcBGAsYHQ/s570/Shazim%2Buddin%2Bpp%2Bimage%2Bwith%2Bstroke.jpg" alt="Team Member 1" />
                        <h3>Jane Doe</h3>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <img src="https://1.bp.blogspot.com/-j-ERWuBRTuA/YTY_6WB8QZI/AAAAAAAADig/BGAaNkvSSrESO6039J0YxMC_IfgohWZIwCLcBGAsYHQ/s570/Shazim%2Buddin%2Bpp%2Bimage%2Bwith%2Bstroke.jpg" alt="Team Member 2" />
                        <h3>John Smith</h3>
                        <p>Manager</p>
                    </div>
                    <div className="team-member">
                        <img src="https://1.bp.blogspot.com/-j-ERWuBRTuA/YTY_6WB8QZI/AAAAAAAADig/BGAaNkvSSrESO6039J0YxMC_IfgohWZIwCLcBGAsYHQ/s570/Shazim%2Buddin%2Bpp%2Bimage%2Bwith%2Bstroke.jpg" alt="Team Member 3" />
                        <h3>Emily Johnson</h3>
                        <p>Customer Service</p>
                    </div>
                </div>
                
                <div className="contact">
                    <h3>Contact Us</h3>
                    <p>Email: info@bookhaven.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <div className="social-media">
                        <a href="https://www.twitter.com/bookhaven" target="_blank" rel="noopener noreferrer">
                            <img src="https://s.yimg.com/fz/api/res/1.2/WcH8VDX4XMZLqOT_1QFeJQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/efb32ac1-ab75-3801-aee1-666cdf999dfa/t_500x300" alt="Twitter" />
                            <span>@bookhaven</span>
                        </a>
                        <a href="https://www.instagram.com/bookhaven" target="_blank" rel="noopener noreferrer">
                            <img src="https://s.yimg.com/fz/api/res/1.2/7wmcqjtgVFiMeMxLOlW3sw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/e9d6381f-6a16-39d9-b6f9-1467838c022c/t_500x300" alt="Instagram" />
                            <span>@bookhaven</span>
                        </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
}

export default AboutUs;
