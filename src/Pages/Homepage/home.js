import '../../Assets/css/Homepage.css';

import bgImg from '../../Assets/images/Group 4.png';
import logo from '../../Assets/images/srijann logo 1.png';
import HomeNavbar from '../../components/HomeNavbar/homeNavbar';

const Home = () => {
    return (
        <>
            <div className='home'>
                <HomeNavbar />
                <div className='logo'>
                    <img src={logo} alt='logo.png' />
                </div>
                <div className='background-image'>
                    <img src={bgImg} className='bg-img' alt='background.png' />
                </div>
                <div className="scroll-down"></div>
            </div>

            <div className='content'>
                <img src={bgImg} className='content-bg' alt='background.png' />
                <div className='text-content'>
                    <h2>ABOUT US</h2>
                    <p>SRIJAN is the official institute magazine of NIT Hamirpur, and as a team, we stand for freedom of self-expression, creativity, and critical thinking. All these years, we’ve worked to build an environment that is progressive and comprehensive. We have voiced our opinions on matters that are often hushed up and provided a safe space for people to be themselves without being judged or discouraged. We have actively called out draconian cultures which can be discriminatory, disrespectful or simply illogical and have always strived to become more rational, unbiased and inclusive. SRIJAN lives by its ideals and will surely live up to the expectations of its readers.
                    </p>

                    <h2>OUR VISION</h2>
                    <p>
                        We want SRIJAN to be an evergreen platform of unmitigated brilliance that embraces variety and creativity in all its manifestations. We aim to represent the vibrant spirit of our college community and highlight the skills and viewpoints of our students, teachers, and staff from all walks of life. We want people to boldly display SRIJAN on their shelves because it is a reflection of our college and hence an inseparable part of our lives.
                        Through SRIJAN, we hope to create a place where people can share new thoughts and ideas and a community where we can encourage each other to break down barriers and discover uncharted territories. Our magazine is meant to be a platform for freedom, self-expression, and personal development.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home;