import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './components/index/Index.jsx'
import About_Team from './components/about/About_Team.jsx'
import Footer from './components/footer/Footer.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index />
    <About_Team/>
    <Footer />
  </React.StrictMode>,
)
