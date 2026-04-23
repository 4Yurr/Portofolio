import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ nama: '', email: '', pesan: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const kirimPesan = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Menyiapkan data untuk dikirim ke Email-mu
    const dataKirim = {
      // TODO: GANTI TEKS DI BAWAH INI DENGAN ACCESS KEY DARI EMAIL-MU!
      access_key: "d3ba82e3-9ba4-4f7b-ba89-609444d3e3e7",
      
      // Data formulir
      Name: formData.nama,
      Email: formData.email,
      Message: formData.pesan,
      // Subject email yang akan masuk
      subject: "Pesan Baru dari Website Portofolio Yuraddin!" 
    };

    try {
      // Mesin Web3Forms bekerja mengirim email
      const respons = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(dataKirim)
      });

      const hasil = await respons.json();

      if (hasil.success) {
        setStatus('success');
        setFormData({ nama: '', email: '', pesan: '' }); // Kosongkan form

        setTimeout(() => {
          setStatus('idle');
        }, 3000);
      } else {
        throw new Error("Gagal dari server Web3Forms");
      }

    } catch (error) {
      console.error('Gagal mengirim pesan:', error);
      alert('Maaf, pesan gagal terkirim. Pastikan internet Anda lancar.');
      setStatus('idle');
    }
  };

  return (
    <section className="section-container" id="contact">
      <motion.div 
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>Mari Berkolaborasi</h2>
        <p>Apakah Anda memiliki ide proyek yang ingin diwujudkan? Jangan ragu untuk menghubungi saya!</p>

        <form className="contact-form" onSubmit={kirimPesan}>
          <input 
            type="text" 
            name="nama"
            placeholder="Nama Anda" 
            required 
            value={formData.nama}
            onChange={handleChange}
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email Anda" 
            required 
            value={formData.email}
            onChange={handleChange}
          />
          <textarea 
            name="pesan"
            placeholder="Pesan Anda" 
            rows="5" 
            required
            value={formData.pesan}
            onChange={handleChange}
          ></textarea>
          
          <button 
            type="submit" 
            className="btn-primary" 
            disabled={status === 'loading' || status === 'success'}
            style={{ 
              backgroundColor: status === 'success' ? '#48BB78' : '', 
              cursor: status === 'loading' ? 'wait' : 'pointer'
            }}
          >
            {status === 'loading' ? 'Mengirim Pesan...' : status === 'success' ? 'Pesan Terkirim! ✅' : 'Kirim Pesan'}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;