import { useState } from 'react';

const Navigasi = () => {
  // State untuk melacak bahasa yang sedang aktif (default: ID)
  const [lang, setLang] = useState('ID');

  // Fungsi untuk mengubah bahasa bolak-balik saat diklik
  const toggleLanguage = () => {
    setLang(lang === 'ID' ? 'EN' : 'ID');
    // Catatan: Nanti logika untuk mengubah bahasa seluruh website bisa ditaruh di sini
  };

  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">Yur</a>

      {/* Menu ditaruh di tengah/agak kiri */}
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Fitur Bahasa di ujung kanan (Pengganti Garis 3) */}
      <div className="lang-switcher" onClick={toggleLanguage}>
        <span className={lang === 'ID' ? 'active-lang' : ''}>ID</span>
        <span className="lang-divider">|</span>
        <span className={lang === 'EN' ? 'active-lang' : ''}>EN</span>
      </div>
    </nav>
  );
};

export default Navigasi;