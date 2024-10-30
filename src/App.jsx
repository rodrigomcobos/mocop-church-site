// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import LanguageSelector from './components/common/LanguageSelector'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import CookieDisclaimer from './components/specific/CookieDisclaimer'

// Import all pages
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
import PrivacyPolicy from './pages/PrivacyPolicy'

// Translation components and utils
import { useLanguage } from './context/LanguageContext'

// Layout component to wrap all pages with translation support
const Layout = ({ children }) => {
  const { language } = useLanguage()

  // Set the html lang attribute based on selected language
  React.useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <>
      <Navbar />
      <LanguageSelector />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <CookieDisclaimer />
    </>
  )
}

// Route configuration with translations
const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/giving", element: <Giving /> },
  { path: "/live", element: <Live /> },
  { path: "/missions", element: <Missions /> },
  { path: "/messages", element: <Messages /> },
  { path: "/admin-dashboard", element: <AdminDashboard /> },
  { path: "/about-the-pastor", element: <AboutThePastor /> },
  { path: "/ministry", element: <Ministry /> },
  { path: "/what-do-we-believe", element: <WhatDoWeBelieve /> },
  { path: "/plan-your-visit", element: <PlanYourVisit /> },
  { path: "/next-step", element: <NextStep /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  // Add the 404 route last
  { path: "*", element: <NotFound /> }
]

function App() {
  // Detect browser language on initial load
  const detectBrowserLanguage = () => {
    const browserLang = navigator.language.split('-')[0]
    // Only return supported languages
    return ['pt', 'en', 'es'].includes(browserLang) ? browserLang : 'pt'
  }

  return (
    <LanguageProvider defaultLanguage={detectBrowserLanguage()}>
      <Layout>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Layout>
    </LanguageProvider>
  )
}

export default App