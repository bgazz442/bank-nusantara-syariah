import React from 'react';
import './ProfilBank.css';

const ProfilBank = () => {
  return (
    <div className="nusa-products-container">
      <div className="nusa-content-layer">
        {/* Hero Section */}
        <section className="nusa-hero-section">
          <div className="nusa-hero-content">
            <h1 className="nusa-hero-title">Profil Perusahaan</h1>
            <p className="nusa-hero-subtitle">Mengenal lebih dekat PT Bank Nusantara Syariah sebagai bank syariah terpercaya di Indonesia.</p>
            <div className="nusa-hero-actions">
              <button className="nusa-hero-cta" onClick={() => {
                const footer = document.querySelector('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}>Hubungi Kami</button>
              <button className="nusa-hero-secondary" onClick={() => {
                const companySection = document.querySelector('.nusa-advantages-section');
                if (companySection) {
                  companySection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}>Pelajari Lebih Lanjut</button>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="nusa-advantages-section">
          <div className="nusa-section-container">
            <h2 className="nusa-section-title">Informasi Perusahaan</h2>
            <div className="nusa-advantages-grid">
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">🏢</div>
                <h3>Identitas Perusahaan</h3>
                <div className="company-info-list">
                  <div className="info-item"><strong>Nama:</strong> PT BANK NUSANTARA SYARIAH</div>
                  <div className="info-item"><strong>Kantor Pusat:</strong> Jl. Merdeka Timur No. 17, Kel. Melawai, Kec. Sudirman, Jakarta Selatan, 12220, Indonesia</div>
                  <div className="info-item"><strong>Telp:</strong> 021-8565-7771</div>
                  <div className="info-item"><strong>E-mail:</strong> BSN20@gmail.com</div>
                  <div className="info-item"><strong>Website:</strong> www.BNS.Indonesia</div>
                  <div className="info-item"><strong>Sosial Media:</strong> @BNS.Indonesia</div>
                </div>
              </div>
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">📊</div>
                <h3>Data Perusahaan</h3>
                <div className="company-info-list">
                  <div className="info-item"><strong>Tanggal Berdiri:</strong> 15 September 2000</div>
                  <div className="info-item"><strong>Tanggal Beroperasi:</strong> 05 Oktober 2000</div>
                  <div className="info-item"><strong>Modal Dasar:</strong> Rp10.000.000.000</div>
                  <div className="info-item"><strong>Modal Disetor:</strong> Rp22.000.000.000</div>
                  <div className="info-item"><strong>Direktur:</strong> Drs. Sri Nur Laila S.Ak, S.Kom</div>
                  <div className="info-item"><strong>Pengawas Bank:</strong> Otoritas Jasa Keuangan (OJK) dan Dewan Pengawas Syariah (DPS)</div>
                </div>
              </div>
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">⚙️</div>
                <h3>Operasional & Layanan</h3>
                <div className="company-info-list">
                  <div className="info-item"><strong>Jaringan ATM:</strong> ATM Bersama</div>
                  <div className="info-item"><strong>Operasional:</strong> Senin – Jumat, 09.00 – 15.00 WIB</div>
                  <div className="info-item"><strong>Prinsip:</strong> 100% Syariah</div>
                  <div className="info-item"><strong>Layanan:</strong> Perbankan Syariah Modern</div>
                  <div className="info-item"><strong>Fokus:</strong> Keuangan Berkah</div>
                  <div className="info-item"><strong>Komitmen:</strong> Transparansi & Amanah</div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
};

export default ProfilBank;
