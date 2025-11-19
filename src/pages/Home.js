import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import './Home.css';

const Home = () => {
  const containerRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/kluarga.jpg", // Gambar pertama
    "/images/playananm.jpg", // Gambar kedua
     // Gambar ketiga
  ];

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  // Background image rotation
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000); // change every 6 seconds
    return () => clearInterval(interval);
  }, [images.length, prefersReducedMotion]);

  // Remove will-change after animation to avoid long-term GPU memory usage
  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = containerRef.current;
    const timeout = setTimeout(() => {
      if (!el) return;
      el.querySelectorAll('.service-card').forEach(card => {
        card.style.willChange = 'auto';
      });
    }, 900); // slightly longer than animation
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);



  return (
    <div>


      {/* Hero Section */}
      <section className="hero-section">
        <HeroSection images={images} />
      </section>

      {/* Layanan Utama */}
      <section id="layanan" className="services">
        <div className="container">
          <motion.div
            ref={containerRef}
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{
              contain: 'layout paint',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <motion.div
              className="service-card"
              variants={itemVariants}
              style={{
                willChange: 'transform, opacity',
                transform: 'translateZ(0)',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url("/images/hapeeeeeeeee1b9a.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'blur(3px)',
                zIndex: -1
              }}></div>
              <div className="service-icon" style={{ color: '#ffffff' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <path d="m16 8 2-2 2 2"></path>
                  <path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h11"></path>
                </svg>
              </div>
              <h3 className="service-title" style={{
                background: 'linear-gradient(90deg, #0000FF, #00AEEF, #FFD700, #000000, #00BFFF)',
                backgroundSize: '200% 200%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                animation: 'gradientShift 10s ease infinite'
              }}>Hijrah Finansial, Gaya Digital! Nabung, transfer, dan sedekah? Semua bisa dalam satu aplikasi. Modern, cepat, dan halal — karena syariah kini makin keren<br/>Transaksi Mudah, Aman, dan Penuh Berkah</h3>
              <p className="service-description" style={{
                background: 'linear-gradient(90deg, #0000FF, #00AEEF, #FFD700, #000000, #00BFFF)',
                backgroundSize: '200% 200%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                animation: 'gradientShift 10s ease infinite'
              }}>

              </p>
            </motion.div>


          </motion.div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="advantages">
        <div className="container">
          <div className="advantages-content">
            <div className="advantages-text">
              <h2 className="advantages-title">Mengapa Memilih Bank Nusantara?</h2>
              <div className="advantages-list">
                <div className="advantage-item">
                  <div className="advantage-icon">✓</div>
                  <div className="advantage-content">
                    <h4>Mobile Banking</h4>
                    <p>Transaksi mudah kapan saja, di mana saja melaui aplikasi NuSa iBanking .
</p>
                  </div>
                </div>
                <div className="advantage-item">
                  <div className="advantage-icon">✓</div>
                  <div className="advantage-content">
                    <h4>Jaringan Luas
</h4>
                    <p>Akses ribuan ATM di seluruh Indonesia</p>
                  </div>
                </div>
                <div className="advantage-item">
                  <div className="advantage-icon">✓</div>
                  <div className="advantage-content">
                    <h4>Bagi Hasil Kompetitif
</h4>
                    <p>Keuntungan adil sesuai prinsip syariah</p>
                  </div>
                </div>
                <div className="advantage-item">
                  <div className="advantage-icon">✓</div>
                  <div className="advantage-content">
                    <h4>Transaksi Aman
</h4>
                    <p>Sistem terpercaya, bebas riba</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="advantages-image">
              <div className="stats-card">
                <div className="stat-item">
                  <div className="stat-number">1M+</div>
                  <div className="stat-label">Nasabah Aktif</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">36</div>
                  <div className="stat-label">Produk</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">ATM</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artikel Baru */}
      <section id="berita" className="new-articles">
        <div className="container">
          <h2 className="articles-title">Artikel Terkait</h2>
          <div className="advantages-list-new">
            <Link to="/products" className="advantage-item-new">
              <div className="advantage-icon-new">✓</div>
              <div className="advantage-content-new">
                <h4>Lihat Produk Kami</h4>
                <p></p>
              </div>
            </Link>
            <Link to="/vision-mission" className="advantage-item-new">
              <div className="advantage-icon-new">✓</div>
              <div className="advantage-content-new">
                <h4>Visi & Misi Kami</h4>
                <p></p>
              </div>
            </Link>
            <Link to="/about-contact" className="advantage-item-new">
              <div className="advantage-icon-new">✓</div>
              <div className="advantage-content-new">
                <h4>Kontak Kami</h4>
                <p></p>
              </div>
            </Link>
            <Link to="/profil-bank" className="advantage-item-new">
              <div className="advantage-icon-new">✓</div>
              <div className="advantage-content-new">
                <h4>Profil Perusahaan</h4>
                <p></p>
              </div>
            </Link>
          </div>
          <div className="articles-grid">
            <a href="https://www.lbs.id/publication/artikel/tips-mengelola-keuangan-pribadi-dengan-prinsip-syariah" target="_blank" rel="noopener noreferrer" className="article-card">
              <div className="article-image">
                <img src="/tips.jpg" alt="Tips Mengelola Keuangan" />
              </div>
              <div className="article-content">
                <h3>Tips Mengelola Keuangan Pribadi dengan Prinsip Syariah</h3>
                <p>Pelajari cara mengatur keuangan pribadi secara bijak dengan prinsip syariah yang adil dan berkah.</p>
              </div>
            </a>
            <a href="https://ojk.go.id/id/kanal/syariah/tentang-syariah/pages/akad-PBS.Aspx" target="_blank" rel="noopener noreferrer" className="article-card">
              <div className="article-image">
                <img src="/akad.png" alt="Akad PBS OJK" />
              </div>
              <div className="article-content">
                <h3>Akad PBS Menurut OJK Syariah</h3>
                <p>Kenali lebih dalam akad-akad dalam perbankan syariah yang diawasi langsung oleh OJK.</p>
              </div>
            </a>
            <a href="https://www.shafiq.id/berita/843/bagi-hasil-bunga-pahami-konsep-bagi-hasil-yang-bikin-adil/baca" target="_blank" rel="noopener noreferrer" className="article-card">
              <div className="article-image">
                <img src="/bagi-hasil-tidak-sama-dengan-bunga-pahami-konsep-bagi-hasil-yang-bikin-adil1.jpg" alt="Bagi Hasil vs Bunga" />
              </div>
              <div className="article-content">
                <h3>Bagi Hasil vs Bunga: Pahami Konsep Bagi Hasil yang Adil</h3>
                <p>Temukan perbedaan antara sistem bagi hasil dan bunga konvensional dalam dunia perbankan.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
