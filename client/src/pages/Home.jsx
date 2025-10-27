import React from 'react'
import HeroBanner from '../components/HomePage/HeroBanner'
import TrustedPartners from '../components/HomePage/TrustedPartners'
import Features from '../components/HomePage/Features'
import Pricing from '../components/HomePage/Pricing'
import Footer from '../components/common/Footer'
import Stats from '../components/HomePage/Stats'

const Home = () => {
    console.log("inside home")
    return (
        <div className='!scroll-smooth'>
            <HeroBanner />
            {console.log("inside home")}
            <TrustedPartners />
            <Features />
            <Pricing />
            <Footer />
        </div>
    )
}

export default Home