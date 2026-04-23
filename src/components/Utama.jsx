import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import profilImg from '../assets/Profil.png';

const Utama = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="hero-container" id="home">
      
      {/* INI KUNCINYA: className harus "hero-card" agar CSS abu-abu menyala! */}
      <motion.div 
        className="hero-card"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Bagian Kiri: Teks */}
        <div className="hero-text-section">
          <motion.h3 variants={itemVariants} className="hero-greeting">
            Halo, saya
          </motion.h3>
          <motion.h1 variants={itemVariants} className="hero-title">
            Yuraddin
          </motion.h1>
          <motion.h2 variants={itemVariants} className="hero-subtitle">
            Junior AI Engineer
          </motion.h2>
          <motion.p variants={itemVariants} className="hero-description">
            Mahasiswa Teknik Komputer dengan minat pada AI dan Computer Vision, serta berpengalaman dalam pengembangan web, aplikasi mobile, dan desain UI/UX.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-buttons">
            <a href="/CV.pdf" download="CV_Yuraddin.pdf" className="btn-primary">
             Unduh CV
            </a>
            <div className="social-links">
              <a href="https://github.com/4Yurr" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/yuraddin-b0302b2aa/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/__yrdn/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bagian Kanan: Foto */}
        <motion.div className="hero-visual-section" variants={itemVariants}>
          <div className="hero-image-placeholder">
            <img src={profilImg} alt="Foto Profil Yuraddin" className="profil-img" />
          </div>
        </motion.div>

      </motion.div>

    </section>
  );
};

export default Utama;