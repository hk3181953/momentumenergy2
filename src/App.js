import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Mnavbar from './Component/Mnavbar';
import Footer from './Component/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Momentum from './Pages/Momentum';
import PrivacyPolicies from './Pages/privacypolicies';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>

        <Mnavbar />

        <main className="flex-grow">
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route
              path="/why-momentum-energy"
              element={<Momentum />}
            />

           <Route
  path="/privacypolicy"
  element={<PrivacyPolicies />}
/>

          </Routes>
        </main>

        <Footer />

      </Router>
    </div>
  );
}

export default App;