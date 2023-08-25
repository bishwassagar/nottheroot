import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App.jsx'
import About_Bishwas from './components/about/About_Bishwas.jsx'
import About_Musharraf from './components/about/About_Musharraf.jsx'
import About_Avinash from './components/about/About_Avinash.jsx'
import Footer from './components/footer/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <About_Bishwas />
    <About_Musharraf />
    <About_Avinash />
    <Footer />
  </React.StrictMode>,
)
