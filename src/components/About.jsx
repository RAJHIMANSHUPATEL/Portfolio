    import React from 'react'
    import bannerImg from '/assets/banner-image.png'

    function About() {
    return (
        <div className="about" id='about'>
            <section className='about-center section section-center'>
            <div className="title">
            <h2>About</h2>
            <div className="title-underline"></div>
            </div>
            <div className="about-info">
            <article>
            <p>My name is Himanshu Raj Patel. I’m a frontend software engineer & freelance web developer in India. I'm passionate about music, technology and basically everything that makes the internet tick.</p>
            <p>
            Whether you're a business owner looking to get started on a app or web development project with a freelance web developer, a developer looking to collaborate on something cool, or just wanting to say hi, shoot me a message and let's work together.
            </p>
            </article>
            <img src={bannerImg} alt="banner-img" />
            </div>
            
        </section>
        </div>
    )
    }

    export default About