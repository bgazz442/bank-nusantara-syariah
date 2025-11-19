import React from 'react';
import './KnowledgeBankSyariah.css';

const KnowledgeBankSyariah = () => {
  return (
    <div className="nusa-products-container">
      <div className="nusa-content-layer">
        {/* Hero Section */}
        <section className="nusa-hero-section">
          <div className="nusa-hero-content">
            <h1 className="nusa-hero-title">Pengetahuan Umum Bank Syariah</h1>
            <p className="nusa-hero-subtitle">Pelajari dasar-dasar perbankan syariah dan prinsip-prinsip yang mendasarinya.</p>
            <div className="nusa-hero-actions">
              <button className="nusa-hero-cta" onClick={() => {
                const knowledgeSection = document.querySelector('.nusa-advantages-section');
                if (knowledgeSection) {
                  knowledgeSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}>Pelajari Lebih Lanjut</button>
              <button className="nusa-hero-secondary" onClick={() => {
                const footer = document.querySelector('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}>Hubungi Kami</button>
            </div>
          </div>
        </section>

        {/* Knowledge Content */}
        <section className="nusa-advantages-section">
          <div className="nusa-section-container">
            <h2 className="nusa-section-title">Dasar-Dasar Bank Syariah</h2>
            <div className="nusa-advantages-grid">
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">🏦</div>
                <h3>Pengertian Bank Syariah</h3>
                <p>Menurut Undang-undang No. 21 Tahun 2008 tentang Perbankan Syariah, dalam undang-undang tersebut dijelaskan bahwa perbankan syariah adalah bank yang menjalankan kegiatan usaha berdasarkan prinsip syariah atau hukum Islam.</p>
              </div>
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">⚖️</div>
                <h3>Prinsip Bank Syariah</h3>
                <div className="principles-list">
                  <div className="principle-item">• Prinsip Keadilan</div>
                  <div className="principle-item">• Prinsip Kemitraan (Ta'awun)</div>
                  <div className="principle-item">• Prinsip Kemanfaatan / Kemashlahatan</div>
                  <div className="principle-item">• Prinsip Keseimbangan (Tawazun)</div>
                  <div className="principle-item">• Prinsip Universal (Rahmatan Lil'alamin)</div>
                </div>
              </div>
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">🎯</div>
                <h3>Tujuan Bank Syariah</h3>
                <p>Perbankan Syariah bertujuan menunjang pelaksanaan pembangunan nasional dalam rangka meningkatkan keadilan, kebersamaan, dan pemerataan kesejahteraan rakyat.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KnowledgeBankSyariah;
