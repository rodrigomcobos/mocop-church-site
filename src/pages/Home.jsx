// src/pages/Home.jsx
import React from 'react'
import Hero from '../components/specific/Hero'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import HomeStrip from '../components/specific/HomeStrip'
import HomeSermons from '../components/specific/HomeSermons'
import WeekEvents from '../components/specific/WeekEvents'
import WhyUs from '../components/specific/WhyUs'
import WaysToGive from '../components/specific/WaysToGive'
import Subscribe from '../components/specific/Subscribe'
import MeetThePastor from '../components/specific/MeetThePastor'
import CallToActionStrip from '../components/specific/CallToActionStrip'
import Testimonials from '../components/specific/Testimonials'

const Home = () => {
    return (
        <section>
            {/* <Navbar /> */}
            <Hero />
            <HomeStrip />
            <MeetThePastor />
            <CallToActionStrip />
            <HomeSermons />
            <WeekEvents />
            <WhyUs />
            <WaysToGive />
            <Testimonials />
            <Subscribe />
            {/* <Footer /> */}
        </section>
    )
}

export default Home