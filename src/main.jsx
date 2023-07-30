import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App.jsx'
import About from './components/about/About.jsx'
import Footer from './components/footer/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <About />
    <About />
    <About />
    <About />
    <Footer />
  </React.StrictMode>,
)
