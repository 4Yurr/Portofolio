import React from 'react';
import './About.css';
// PERBAIKAN: Gunakan garis miring maju (/) untuk path file
import aboutImage from '../assets/Profil.png'; 

const About = () => {
  return (
    // Kita gunakan 'page-container' sebagai pembungkus standar untuk semua halaman
    <div className="page-container">
      <div className="about-content-wrapper">
        <div className="about-image">
          <img src={aboutImage} alt="Tentang Saya" />
        </div>
        <div className="about-text">
          <h1 className="page-title">Tentang Saya</h1>
          <p>
            Mahasiswa Program Studi Teknik Komputer dengan ketertarikan kuat pada bidang multimedia, pengembangan aplikasi mobile, pengembangan web, serta desain UI/UX. Memiliki pengalaman sebagai asisten mata kuliah Pemrograman Python selama satu tahun dan saat ini menjadi asisten mata kuliah HCI (Human-Computer Interaction). Terampil dalam pemrograman, desain antarmuka, dan kolaborasi tim, serta aktif mengembangkan keterampilan melalui proyek akademik maupun pribadi. Berkomitmen untuk terus belajar dan beradaptasi dengan perkembangan teknologi terbaru.
          </p>
          <p>
            Di luar itu, saya gemar menjelajahi tren desain terbaru dan berkontribusi pada proyek open-source. Mari terhubung dan ciptakan sesuatu yang luar biasa bersama!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;