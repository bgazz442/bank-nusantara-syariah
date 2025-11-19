import React from 'react';
import { Link } from 'react-router-dom';
import './ProdukBankNusantaraSyariah.css';

const ProdukBankNusantaraSyariah = () => {
  const products = [
    {
      name: 'Tabungan Syariah',
      description: 'Tabungan dengan prinsip syariah yang memberikan keuntungan bagi hasil tanpa riba.',
      icon: '💰'
    },
    {
      name: 'Deposito Syariah',
      description: 'Investasi aman dengan sistem bagi hasil sesuai prinsip syariah.',
      icon: '🏦'
    },
    {
      name: 'Kredit Syariah',
      description: 'Pembiayaan berbasis syariah untuk kebutuhan konsumtif dan produktif.',
      icon: '💳'
    },
    {
      name: 'Asuransi Syariah',
      description: 'Proteksi finansial dengan mekanisme tolong-menolong sesuai syariah.',
      icon: '🛡️'
    },
    {
      name: 'Reksa Dana Syariah',
      description: 'Investasi kolektif berbasis syariah untuk pertumbuhan dana jangka panjang.',
      icon: '📈'
    },
    {
      name: 'Zakat & Wakaf',
      description: 'Layanan pengelolaan zakat dan wakaf untuk kemaslahatan umat.',
      icon: '🤲'
    }
  ];

  return (
    <div className="nusa-products-container">
      <div className="nusa-content-layer">
        {/* Hero Section */}
        <section className="nusa-hero-section">
          <div className="nusa-hero-content">
            <h1 className="nusa-hero-title">Produk Bank Nusantara Syariah</h1>
            <p className="nusa-hero-subtitle">Temukan berbagai produk perbankan syariah yang sesuai dengan kebutuhan Anda.</p>
            <div className="nusa-hero-actions">
              <button className="nusa-hero-cta" onClick={() => {
                const productsSection = document.querySelector('.nusa-advantages-section');
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}>Daftar Sekarang</button>
              <button className="nusa-hero-secondary" onClick={() => {
                const footer = document.querySelector('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}>Hubungi Kami</button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="nusa-advantages-section">
          <div className="nusa-section-container">
            <h2 className="nusa-section-title">Produk Kami</h2>
            <div className="nusa-advantages-grid">
              {products.map((product, index) => (
                <div key={index} className="nusa-advantage-card">
                  <div className="nusa-advantage-icon">{product.icon}</div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back Button */}
        <section className="nusa-advantages-section">
          <div className="nusa-section-container">
            <div className="nusa-advantages-grid">
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">⬅️</div>
                <h3>Navigasi</h3>
                <Link to="/knowledge-bank-syariah" className="nusa-cta" style={{textDecoration: 'none', display: 'inline-block', marginTop: '1rem'}}>
                  Kembali ke Pengetahuan Bank Syariah
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProdukBankNusantaraSyariah;
