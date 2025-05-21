import React from 'react'
import ServiceImage from "../assets/images/Services.png"
import Services from '../Components/Services'
import LazyLoadImage from '../utils/helpers/LazyLoading'
import Banner from '../Components/Loader/Banner'

const ServicesPage = () => {
    return (
        <div>
            <LazyLoadImage
                src={ServiceImage}
                alt="ServiceImage us banner"
                placeholder={Banner}
            />
            <Services />
        </div>
    )
}

export default ServicesPage
