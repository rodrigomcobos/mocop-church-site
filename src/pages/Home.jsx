// src/pages/Home.jsx
import React from 'react'
import Hero from '../components/specific/Hero'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import HomeStrip from '../components/specific/HomeStrip'
import HomeSermons from '../components/specific/HomeSermons'

const Home = () => {
    return (
        <section>
            <Navbar />
            <Hero />
            <HomeStrip />
            <HomeSermons />
            <Footer />
        </section>
    )
}

export default Home