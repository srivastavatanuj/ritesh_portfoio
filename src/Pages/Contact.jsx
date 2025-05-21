import React from 'react'
import Contact from '../Components/Contectme'
import ContactUS from '../assets/images/Contact.png'
import LazyLoadImage from '../utils/helpers/LazyLoading'
import Banner from '../Components/Loader/Banner'

const contact = () => {
    return (
        <div>
            <LazyLoadImage
                src={ContactUS}
                alt="Contact us banner"
                placeholder={Banner}
            />
            <Contact />
        </div>
    )
}

export default contact
