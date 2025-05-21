import React from 'react'
import Skills from '../Components/Skills'
import Skill from '../assets/images/Skills.png'
import Banner from '../Components/Loader/Banner'
import LazyLoadImage from '../utils/helpers/LazyLoading'

const SkillsPage = () => {
    return (
        <div>
            <LazyLoadImage
                src={Skill}
                alt="Skill us banner"
                placeholder={Banner}
            />
            <Skills />
        </div>
    )
}

export default SkillsPage
