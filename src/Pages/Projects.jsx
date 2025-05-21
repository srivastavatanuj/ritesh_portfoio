import React from 'react'
import ProjectsImage from '../assets/images/Projects.png'
import Project from '../Components/Project'
import LazyLoadImage from '../utils/helpers/LazyLoading'
import Banner from '../Components/Loader/Banner'

const Projects = () => {
  return (
    <div>
      <LazyLoadImage
        src={ProjectsImage}
        alt="Contact us banner"
        placeholder={Banner}
      />
      <Project />
    </div>
  )
}

export default Projects
