import { motion } from 'framer-motion';
// Import ikon yang kamu gunakan
import { FaReact, FaPython, FaFigma, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiTensorflow } from 'react-icons/si';

const About = () => {
  return (
    <section className="section-container" id="about">
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>Tentang Saya</h2>
        
        <div className="about-text-container">
          <p>
            Mahasiswa Teknik Komputer dengan fokus pada pengembangan aplikasi mobile, web, serta desain UI/UX, dan ketertarikan yang berkembang pada bidang Artificial Intelligence, Machine Learning, dan Computer Vision. Berpengalaman sebagai asisten mata kuliah Pemrograman Python selama dua semester dan sebagai asisten HCI (Human-Computer Interaction) selama satu semester, dengan keterlibatan aktif dalam pengembangan kemampuan teknis dan pemahaman interaksi manusia dan sistem.
          </p>
          <p>
            Memiliki kemampuan dalam pemrograman, perancangan antarmuka, serta kolaborasi tim dalam berbagai proyek akademik dan pribadi. Saat ini secara aktif memperluas kompetensi di bidang AI dan data-driven development untuk membangun solusi yang lebih adaptif dan cerdas.
          </p>
        </div>

        {/* --- AREA TECH STACK DOCK (MAC STYLE) --- */}
        <div className="tech-stack-section">
          <h4 className="tech-title">Software & Bahasa yang saya kuasai</h4>
          
          <div className="tech-dock">
            {/* React */}
            <div className="tech-item">
              <FaReact color="#61DAFB" />
              <span className="tooltip">React</span>
            </div>

            {/* Python */}
            <div className="tech-item">
              <FaPython color="#3776AB" />
              <span className="tooltip">Python</span>
            </div>

            {/* Tailwind */}
            <div className="tech-item">
              <SiTailwindcss color="#06B6D4" />
              <span className="tooltip">Tailwind</span>
            </div>

            {/* Figma */}
            <div className="tech-item">
              <FaFigma color="#F24E1E" />
              <span className="tooltip">Figma</span>
            </div>

            {/* TensorFlow */}
            <div className="tech-item">
              <SiTensorflow color="#FF6F00" />
              <span className="tooltip">TensorFlow</span>
            </div>

            {/* Node JS */}
            <div className="tech-item">
              <FaNodeJs color="#339933" />
              <span className="tooltip">Node.js</span>
            </div>
          </div>
        </div>
        {/* ----------------------------------------- */}

      </motion.div>
    </section>
  );
};

export default About;