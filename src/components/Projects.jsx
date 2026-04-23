import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from './supabaseClient'; 

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ambilDataProyek();
  }, []);

  const ambilDataProyek = async () => {
    try {
      const { data, error } = await supabase
        .from('portofolio')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) setProjects(data);
    } catch (error) {
      console.error('Ada masalah saat menarik data:', error.message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <section className="section-container" id="projects">
      <motion.div 
        className="projects-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Karya Saya</h2>
        
        {loading ? (
          <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Loading...</p>
        ) : (
          <div className="projects-grid">
            {projects.map((proyek) => (
              <motion.div 
                key={proyek.id} 
                className="project-card"
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="project-image-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
                  {proyek.img_url ? (
                    <img 
                      src={proyek.img_url} 
                      alt={proyek.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <span>Tanpa Gambar</span>
                  )}
                </div>
                <h3>{proyek.title}</h3>
                <p>{proyek.deskripsi}</p>
                
                {proyek.project_link && (
                  <a href={proyek.project_link} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: 'inline-block', fontSize: '0.9rem', padding: '8px 16px', marginTop: '10px' }}>
                    Lihat Proyek
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;