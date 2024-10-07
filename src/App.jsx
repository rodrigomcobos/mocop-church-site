// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import CookieDisclaimer from './components/specific/CookieDisclaimer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Giving from './pages/Giving'
import Live from './pages/Live'
import Missions from './pages/Missions'
import Messages from './pages/Messages'
import AdminDashboard from './pages/AdminDashboard'
import NotFound from './pages/NotFound'
import AboutThePastor from './pages/AboutThePastor'
import Ministry from './pages/Ministry'
import WhatDoWeBelieve from './pages/WhatDoWeBelieve'
import PlanYourVisit from './pages/PlanYourVisit'
import NextStep from './pages/NextStep'

// Layout component to wrap all pages
const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="min-h-screen">
      {children}
    </main>
    <Footer />
    <CookieDisclaimer />
  </>
)

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/giving" element={<Giving />} />
        <Route path="/live" element={<Live />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/about-the-pastor" element={<AboutThePastor />} />
        <Route path="/ministry" element={<Ministry />} />
        <Route path="/what-do-we-believe" element={<WhatDoWeBelieve />} />
        <Route path="/plan-your-visit" element={<PlanYourVisit />} />
        <Route path="/next-step" element={<NextStep />} />
        {/* Add a fallback route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App