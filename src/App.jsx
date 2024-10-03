// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="giving" element={<Giving />} />
        <Route path="live" element={<Live />} />
        <Route path="missions" element={<Missions />} />
        <Route path="messages" element={<Messages />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        {/* Add a fallback route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App