import React from 'react'
import AboutImage from '../assets/images/About.png'
import AboutSection from '../Components/AboutSection'
import LazyLoadImage from '../utils/helpers/LazyLoading'
import Banner from '../Components/Loader/Banner'

const About = () => {
    return (
        <div>
            <LazyLoadImage
                src={AboutImage}
                alt="Contact us banner"
                placeholder={Banner}
            />
            <AboutSection />
        </div>
    )
}

export default About
