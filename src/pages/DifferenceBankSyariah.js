import React from 'react';
import { Link } from 'react-router-dom';
import './DifferenceBankSyariah.css';

const DifferenceBankSyariah = () => {
  const comparisonData = [
    {
      indicator: 'Hukum',
      syariah: 'Undang-Undang Nomor 21 Tahun 2008',
      conventional: 'Undang-undang Perbankan 2010'
    },
    {
      indicator: 'Keuntungan',
      syariah: 'Bagi Hasil',
      conventional: 'Bunga'
    },
    {
      indicator: 'Hubungan',
      syariah: 'Kemitraan',
      conventional: 'Debitur & Kreditur'
    },
    {
      indicator: 'Fungsi Bank',
      syariah: 'Menghimpun dan menyalurkan dana dari jasa-jasa keuangan & fungsi sosial dalam bentuk ZIS, Wakaf, dll.',
      conventional: 'Menghimpun dan menyalurkan dana dan jasa keuangan.'
    }
  ];

  return (
    <div className="nusa-products-container">
      <div className="nusa-content-layer">
        {/* Hero Section */}
        <section className="nusa-hero-section">
          <div className="nusa-hero-content">
            <h1 className="nusa-hero-title">Perbedaan Bank Syariah dan Bank Konvensional</h1>
            <p className="nusa-hero-subtitle">Pelajari perbedaan mendasar antara sistem perbankan syariah dan konvensional.</p>
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

        {/* Comparison Table */}
        <section className="nusa-advantages-section">
          <div className="nusa-section-container">
            <h2 className="nusa-section-title">Perbandingan Sistem Perbankan</h2>
            <div className="comparison-table-container">
              <table className="nusa-comparison-table">
                <thead>
                  <tr>
                    <th className="indicator-header">INDIKATOR</th>
                    <th className="syariah-header">BANK SYARIAH</th>
                    <th className="conventional-header">BANK KONVENSIONAL</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index}>
                      <td className="indicator-cell">{row.indicator}</td>
                      <td className="syariah-cell">{row.syariah}</td>
                      <td className="conventional-cell">{row.conventional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

export default DifferenceBankSyariah;
