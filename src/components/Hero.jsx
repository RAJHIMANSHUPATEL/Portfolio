import heroImg from '/assets/hero.svg';
const Hero = () => {
  return (
    <section className='hero' id='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <p>Hi, my name is</p>
          <h1>HIMANSHU RAJ PATEL</h1>
          <p>Freelance Web Developer in India</p>
          <a
            className='btn'
            href="/cv.pdf"
            download="Himanshu_Raj_Patel_CV.pdf"
          >Download CV</a>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
