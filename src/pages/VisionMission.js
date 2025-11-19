import React from 'react';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <div className="nusa-products-container">
      <div className="nusa-content-layer">
        {/* Hero Section */}
        <section className="nusa-hero-section">
          <div className="nusa-hero-content">
            <h1 className="nusa-hero-title">Visi & Misi</h1>
            <p className="nusa-hero-subtitle">Mengenal visi dan misi Bank Nusantara Syariah dalam memberikan layanan perbankan syariah yang berkualitas.</p>
            <div className="nusa-hero-actions">
              <button className="nusa-hero-cta" onClick={() => {
                const visionSection = document.querySelector('.nusa-advantages-section');
                if (visionSection) {
                  visionSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}>Pelajari Lebih Lanjut</button>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="nusa-advantages-section">
          <div className="nusa-section-container">
            <h2 className="nusa-section-title">Visi & Misi Kami</h2>
            <div className="nusa-advantages-grid">
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">👁️</div>
                <h3>Visi</h3>
                <p>Terwujudvnya Lembaga Keuangan yang Sehat, Kuat, dan Istiqomah dengan Prinsip Syariah untuk Kemaslahatan Masyarakat.</p>
              </div>
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">🎯</div>
                <h3>Misi</h3>
                <p>Terciptanya tata kelola & sistem perbankan berdasarkan prinsip syariah yang sehat, kuat & efisien. Meningkatkan pelayanan kepada masyarakat dengan prinsip keadilan dan kemaslahatan. Menjadi mitra keuangan yang amanah dan profesional.</p>
              </div>
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">💡</div>
                <h3>Nilai-Nilai</h3>
                <p>Integritas, Inovasi, Kepedulian Sosial, dan Komitmen pada Prinsip Syariah dalam setiap aspek operasional dan pelayanan kami.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Kantor Cabang */}
        <section className="nusa-testimonials-section">
          <div className="nusa-section-container">
            <h2 className="nusa-section-title">Kantor Cabang</h2>
            <div className="nusa-testimonials-grid">
              <div className="nusa-testimonial-card">
                <div className="nusa-testimonial-avatar">🏢</div>
                <p className="nusa-testimonial-quote"><strong>BANK NUSANTARA SYARIAH KC GAMBIR</strong><br />Jl. Nasional 3, Kel. Gambir, Kec. Gambir, Jakarta Pusat, 11110, Indonesia</p>
              </div>
              <div className="nusa-testimonial-card">
                <div className="nusa-testimonial-avatar">🏢</div>
                <p className="nusa-testimonial-quote"><strong>BANK NUSANTARA SYARIAH KC PANJANGAN</strong><br />Jl. Kecapi No. 21, Kel. Kapuk 3, Kec. Panjangan, Tangerang Selatan, 14440, Indonesia</p>
              </div>
              <div className="nusa-testimonial-card">
                <div className="nusa-testimonial-avatar">🏢</div>
                <p className="nusa-testimonial-quote"><strong>BANK NUSANTARA SYARIAH KC MAUMERE</strong><br />Jl. Melati No. 11, Kel. Cikampe, Kec. Maumere, Jakarta Selatan, 12880, Indonesia</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sejarah Perusahaan Section */}
        <section className="nusa-advantages-section">
          <div className="nusa-section-container">
            <h2 className="nusa-section-title">Sejarah Perusahaan</h2>
            <div className="nusa-advantages-grid">
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">📜</div>
                <h3>Bank Nusantara Syariah</h3>
                <p>Bank Nusantara Syariah didirikan pada 15 September 2000 sebagai lembaga keuangan yang berlandaskan prinsip syariah, dengan tujuan menyediakan layanan perbankan yang amanah dan mendukung perkembangan ekonomi masyarakat. Setelah menyelesaikan proses perizinan dan persiapan operasional, bank ini resmi mulai beroperasi pada 05 Oktober 2000. Sejak saat itu, Bank Nusantara Syariah terus berkomitmen memberikan layanan terbaik, memperluas jangkauan, serta berperan aktif dalam mendorong pertumbuhan ekonomi umat melalui produk dan pembiayaan yang sesuai prinsip syariah.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Komitmen Bank */}
        <section className="nusa-advantages-section">
          <div className="nusa-section-container">
            <h2 className="nusa-section-title">Komitmen Kami</h2>
            <div className="nusa-advantages-grid">
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">🤝</div>
                <h3>Komitmen Kami</h3>
                <p>Bank Nusantara Syariah terus memperluas jaringan pelayanan demi memberikan kemudahan akses keuangan syariah bagi seluruh lapisan masyarakat. Setiap cabang kami berkomitmen memberikan layanan terbaik, amanah, dan sesuai prinsip syariah untuk mendukung pertumbuhan ekonomi umat.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VisionMission;
