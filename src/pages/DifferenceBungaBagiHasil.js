import React from 'react';
import { Link } from 'react-router-dom';
import './DifferenceBungaBagiHasil.css';

const DifferenceBungaBagiHasil = () => {
  const bungaPoints = [
    'Tambahan yang ditentukan di awal atas jumlah uang yang dipinjam. Besarnya tidak berubah meskipun usaha untung atau rugi.',
    'Dihitung dengan persentase tetap dari pokok pinjaman, misalnya 10% per tahun.',
    'Risiko hanya ditanggung oleh nasabah.',
    'Menggunakan akad pinjaman (qardh).'
  ];

  const bagiHasilPoints = [
    'Pembagian keuntungan berdasarkan hasil nyata dari usaha bersama antara nasabah dan bank. Jumlah yang diterima bisa berubah tergantung besar kecilnya keuntungan.',
    'Nisbah (persentase kesepakatan) seperti 60:40, diterapkan terhadap hasil keuntungan usaha yang benar-benar diperoleh.',
    'Risiko ditanggung bersama antara bank dan nasabah sesuai porsi kesepakatan.',
    'Menggunakan akad mudharabah (bagi hasil antara pemilik modal dan pengelola) atau musyarakah (kerja sama modal bersama).'
  ];

  return (
    <div className="nusa-products-container">
      <div className="nusa-content-layer">
        {/* Hero Section */}
        <section className="nusa-hero-section">
          <div className="nusa-hero-content">
            <h1 className="nusa-hero-title">Perbedaan Bunga dan Bagi Hasil</h1>
            <p className="nusa-hero-subtitle">Pelajari perbedaan fundamental antara sistem bunga konvensional dan bagi hasil syariah.</p>
            <div className="nusa-hero-actions">
              <button className="nusa-hero-cta" onClick={() => {
                const comparisonSection = document.querySelector('.nusa-advantages-section');
                if (comparisonSection) {
                  comparisonSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

        {/* Comparison Content */}
        <section className="nusa-advantages-section">
          <div className="nusa-section-container">
            <h2 className="nusa-section-title">Perbandingan Sistem Keuntungan</h2>
            <div className="nusa-advantages-grid">
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">💰</div>
                <h3>Bunga (Konvensional)</h3>
                <ul className="difference-list">
                  {bungaPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">🤝</div>
                <h3>Bagi Hasil (Syariah)</h3>
                <ul className="difference-list">
                  {bagiHasilPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
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
                <Link to="/difference-bank-syariah" className="nusa-cta" style={{textDecoration: 'none', display: 'inline-block', marginTop: '1rem'}}>
                  Kembali ke Perbedaan Bank Syariah
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DifferenceBungaBagiHasil;
