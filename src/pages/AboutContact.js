import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './AboutContact.css';

const AboutContact = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Terima kasih atas pesan Anda!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="nusa-products-container">
      <div className="nusa-content-layer">
        {/* Hero Section */}
        <section className="nusa-hero-section">
          <div className="nusa-hero-content">
            <h1 className="nusa-hero-title">Tentang Kami & Hubungi Kami</h1>
            <p className="nusa-hero-subtitle">Pelajari lebih lanjut tentang Bank Nusantara Syariah dan hubungi kami untuk informasi lebih lanjut.</p>
            <div className="nusa-hero-actions">
              <button className="nusa-hero-cta" onClick={() => {
                const footer = document.querySelector('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}>Hubungi Kami</button>
              <button className="nusa-hero-secondary" onClick={() => {
                const aboutSection = document.querySelector('.nusa-advantages-section');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}>Pelajari Lebih Lanjut</button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="nusa-advantages-section">
          <div className="nusa-section-container">
            <h2 className="nusa-section-title">Hubungi Kami</h2>
            <div className="nusa-advantages-grid">
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">📍</div>
                <h3>{t('address')}</h3>
                <p>Jln. Merdeka Timur No. 17, Kel. Melawai, Kec. Sudirman, Jakarta Selatan, 12220, Indonesia</p>
                <div className="map-container" style={{marginTop: '1rem'}}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.443237452584!2d106.7893363483103!3d-6.249126746470125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f16e2c64dac9%3A0xb1155d435a2df2f1!2sPEGADAIAN%20KEBAYORAN%20BARU%20(CP)!5e0!3m2!1sen!2sid!4v1762226883124!5m2!1sen!2sid"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                    title="PEGADAIAN KEBAYORAN BARU (CP)"
                  ></iframe>
                </div>
                <button className="nusa-hero-secondary" onClick={() => navigate('/profil-bank')} style={{marginTop: '1rem'}}>Lihat Profil Lengkap</button>
              </div>
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">📧</div>
                <h3>{t('contactForm')}</h3>
                <form onSubmit={handleSubmit} className="contact-form" style={{marginTop: '1rem'}}>
                  <div className="form-group">
                    <label htmlFor="name">{t('name')}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        background: 'rgba(255,255,255,0.05)',
                        color: '#ffffff',
                        marginTop: '0.25rem'
                      }}
                    />
                  </div>
                  <div className="form-group" style={{marginTop: '0.75rem'}}>
                    <label htmlFor="email">{t('email')}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        background: 'rgba(255,255,255,0.05)',
                        color: '#ffffff',
                        marginTop: '0.25rem'
                      }}
                    />
                  </div>
                  <div className="form-group" style={{marginTop: '0.75rem'}}>
                    <label htmlFor="message">{t('message')}</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      required
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        background: 'rgba(255,255,255,0.05)',
                        color: '#ffffff',
                        marginTop: '0.25rem',
                        resize: 'vertical'
                      }}
                    ></textarea>
                  </div>
                  <button type="submit" className="nusa-cta" style={{marginTop: '1rem', width: '100%'}}>{t('send')}</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutContact;
