import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

// Placeholder Pages
const Home = () => <div><About /><Services /><Team /><Testimonials /><Contact /></div>;
const Careers = () => <div className="container"><h2>Careers</h2><p>Join our team.</p></div>;
const Blog = () => <div className="container"><h2>Blog</h2><p>Latest news.</p></div>;
const PrivacyPolicy = () => <div className="container"><h2>Privacy Policy</h2><p>Content here.</p></div>;
const TermsOfService = () => <div className="container"><h2>Terms of Service</h2><p>Content here.</p></div>;
const CookiePolicy = () => <div className="container"><h2>Cookie Policy</h2><p>Content here.</p></div>;
const Sitemap = () => <div className="container"><h2>Sitemap</h2><p>Content here.</p></div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookie" element={<CookiePolicy />} />
            <Route path="/sitemap" element={<Sitemap />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;