import './Hero.css';

const Hero = () => {
    return (
        <section className='hero-section'>
            <h1 className='hero-header'>Nice to meet you! I'm <span className='underline'>Adam Keyes</span>.</h1>
            <p className='hero-text'>
                Based in the UK, I'm a front-end developer passionate about
                building accessible web apps that users love.
            </p>
            <div className='btn-container'>
                <button className='hero-button' type='button'><span className='btn-underline'>CONTACT ME</span></button>
                <image src='/public/images/pattern-circle.svg' alt='circle graphic' className='circle-graphic'/>
            </div>
        </section>
    )
}

export default Hero;