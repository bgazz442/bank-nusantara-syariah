import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();

  const handleBeritaClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const beritaSection = document.querySelector('#berita');
      if (beritaSection) {
        beritaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // If not on home page, let the Link component handle navigation to /#berita
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Bank Nusantara</h3>
          <p>Solusi keuangan <span className="highlight-blue">terpercaya untuk Anda</span>. Bersama kami, wujudkan impian finansial Anda.</p>
          <p className="social-title">Ikuti Kami:</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/banknusantara_syariah?igsh=eGpqcmNzazhnZWw5"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Layanan</h4>
          <ul>
            <li><Link to="/products?category=PENDANAAN">Pendanaan</Link></li>
            <li><Link to="/products?category=PEMBIAYAAN">Pembiayaan</Link></li>
            <li><Link to="/products?category=JASA%20%26%20LAYANAN">Jasa & Layanan</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Tentang Kami</h4>
          <ul>
            <li><Link to="/vision-mission">Visi & Misi</Link></li>
            <li><a href="#">Sejarah</a></li>
            <li><a href="#">Karir</a></li>
            <li><Link to="/#berita" onClick={handleBeritaClick}>Berita</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Kontak</h4>
          <p><i className="fas fa-phone-alt"></i> 021-8565-7771 (Call Center)</p>
          <p><i className="fas fa-envelope"></i> BSN20@gmail.com</p>
          <p><i className="fas fa-map-marker-alt"></i> Jln. Merdeka Timur No. 17, Kel. Melawai, Kec. Sudirman, Jakarta Selatan, 12220, Indonesia</p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025 Bank Nusantara. Seluruh hak cipta dilindungi undang-undang.</p>
        <p>Diawasi oleh Otoritas Jasa Keuangan (OJK) | Dijamin oleh Lembaga Penjamin Simpanan (LPS)</p>
      </div>
    </footer>
  );
};

export default Footer;
