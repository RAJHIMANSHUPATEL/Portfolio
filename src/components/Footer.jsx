import React from 'react'
import { FaPlus } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer'>
            <section className="section section-center footer-section">
                <div className="footer-title">
                    <h2>Need a web developer? Let's Build Something.</h2>
                    <button className='btn'><a href="#contact">Get in touch</a></button>
                </div>
                <div className="social">
                    <ul>
                        <li>
                            <FaPlus className='plus-icon'/>
                            <a href="https://github.com/RAJHIMANSHUPATEL" target='_blank'>Github</a>
                        </li>
                        <li>
                            <FaPlus className='plus-icon'/>
                            <a href="https://x.com/HimanshuRajPat5" target='_blank'>Twitter</a>
                        </li>
                        <li>
                            <FaPlus className='plus-icon'/>
                            <a href="www.linkedin.com/in/himanshu-raj-patel-2896a7207" target='_blank'>LinkedIn</a>
                        </li>
                        <li>
                            <FaPlus className='plus-icon'/>
                            <a href="https://www.instagram.com/himanshuraj.patel.54/" target='_blank'>Instagram</a>
                        </li>
                        <li>
                            <FaPlus className='plus-icon'/>
                            <a href="" target='_blank'>Source</a>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="copyright">
            © Copyright 2024 - <span>Himanshu Raj Patel</span>
            </div>
        </div>
    )
}

export default Footer