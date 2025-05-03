import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar.jsx';
import Footer from './Components/Footer.jsx';
import AboutMe from './Pages/AboutMe.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import Contact from './Pages/Contact.jsx';
import Resume from './Pages/Resume.jsx';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;