import { useEffect } from 'react';
import Navigasi from './components/Navigasi';
import Utama from './components/Utama';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // SISTEM PENGAMAN: Cek dulu apakah alat partikelnya sudah ter-load dengan benar
    if (typeof window.FinisherHeader !== 'undefined') {
      const container = document.querySelector('.finisher-header');
      if (container && !container.querySelector('canvas')) {
        new window.FinisherHeader({
          "count": 20,
          "size": { "min": 2, "max": 40, "pulse": 0.1 },
          "speed": { "x": { "min": 0, "max": 0.4 }, "y": { "min": 0, "max": 0.4 } },
          "colors": {
            "background": "#F8F9FA", 
            "particles": ["#ff926b", "#38bdf8", "#fb7185", "#0369ff"]
          },
          "blending": "screen",
          "opacity": { "center": 1, "edge": 1 },
          "skew": 0,
          "shapes": ["s", "c"]
        });
      }
    } else {
      console.warn("Script Finisher Header belum terbaca. Pastikan file ada di folder public.");
    }
  }, []);

  return (
    <div>
      {/* --- WADAH BACKGROUND PARTIKEL --- */}
      <div 
        className="finisher-header" 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          zIndex: 0, 
          pointerEvents: 'none' 
        }}
      ></div>

      {/* --- SEMUA KONTEN DIBUNGKUS AMAN --- */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navigasi />
        <Utama />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;