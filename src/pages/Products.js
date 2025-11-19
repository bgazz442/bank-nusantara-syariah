import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import './Products.css';
import { products } from '../data/products';
import ParticleBackground from '../background-animation';
import CustomCursor from '../cursor-animation';

// Utility: make safe slug
function slugify(title){
  // slugify without regex literals to avoid injection into the replacement processor
  // normalize and strip combining marks by codepoint range, then keep a-z0-9 and hyphens
  const s = String(title).normalize('NFD');
  let out = '';
  for (const ch of s){
    const code = ch.charCodeAt(0);
    // skip common combining diacritical marks (U+0300..U+036F) -> decimal 768..879
    if (code >= 768 && code <= 879) continue;
    const lower = ch.toLowerCase();
    // ascii letters and numbers
    if ((lower >= 'a' && lower <= 'z') || (lower >= '0' && lower <= '9')){
      out += lower;
    } else if (code <= 32) {
      // treat control/space as hyphen
      out += '-';
    } else if (lower === '-'){
      out += '-';
    } else {
      // ignore other characters (accents removed above)
    }
  }
  // collapse multiple hyphens
  while(out.indexOf('--') !== -1){ out = out.replace('--','-'); }
  // trim leading/trailing hyphens
  if(out.startsWith('-')) out = out.slice(1);
  if(out.endsWith('-')) out = out.slice(0,-1);
  return out;
}

const Products = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const scrollToId = searchParams.get('scrollTo');
  const categoryParam = searchParams.get('category');

  // Initialize particle background animation with performance optimization - disabled for Products page
  useEffect(() => {
    // Completely disable animations for Products page to ensure smooth performance
    // Only keep essential functionality

    return () => {
      // Cleanup if needed
    };
  }, []);

  // Set selectedCategory from URL param
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);



  useEffect(() => {
    if (scrollToId) {
      const element = document.getElementById(`product-${scrollToId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [scrollToId]);

  // Filtered products based on selected category and search query
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'Semua') {
      const categoryMap = {
        'PENDANAAN': 'PENDANAAN',
        'PEMBIAYAAN': 'PEMBIAYAAN',
        'JASA & LAYANAN': 'JASA & LAYANAN'
      };
      filtered = filtered.filter(p => p.category === categoryMap[selectedCategory]);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      const queryWords = query.split(/\s+/).filter(word => word.length > 0);
      filtered = filtered.filter(p => {
        const productName = (p.title || p.name || '').toLowerCase();
        const productDescription = (p.description || '').toLowerCase();
        return queryWords.some(word =>
          productName.includes(word) || productDescription.includes(word)
        );
      });
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  // Render grid
  const renderProducts = () => {
    return filteredProducts.map((p, idx) => {
      const slug = slugify(p.title || p.name);
      const detailHref = `/products/${p.id}`;

      return (
        <article key={p.id} id={`product-${p.id}`} className="nusa-product-card" tabIndex="0" aria-labelledby={`nusa-title-${idx}`}>
          <div className="nusa-card-icon">{p.emoji || ''}</div>
          <h3 id={`nusa-title-${idx}`} className="nusa-card-title">{p.title || p.name}</h3>
          {(p.price || p.price === null) ? <div className="nusa-card-price">{p.price || 'Harga Tersedia'}</div> : ''}
            <div className="nusa-card-body">
              <div className="nusa-card-actions">
                <Link to={`/products/${p.id}`} className="nusa-cta">{p.cta || 'Pilih Paket Ini'}</Link>
                <div className="nusa-more-info">More Info</div>
              </div>
            </div>
        </article>
      );
    });
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalProduct(null);
  };

  // Disable scroll animations for better performance on Products page
  useEffect(() => {
    // No scroll animations to ensure smooth performance
  }, []);

  return (
    <div className="nusa-products-container">
      <div className="nusa-content-layer">
        {/* Hero Section */}
        <section className="nusa-hero-section">
          <div className="nusa-hero-content">
            <h1 className="nusa-hero-title">Solusi Perbankan Syariah Modern</h1>
            <p className="nusa-hero-subtitle">Kelola keuangan Anda dengan aman, syariah, dan inovatif untuk masa depan yang lebih cerah.</p>
            <div className="nusa-hero-actions">
              <button className="nusa-hero-cta" onClick={() => {
                const filtersSection = document.querySelector('.nusa-filters');
                if (filtersSection) {
                  filtersSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}>Pelajari Lebih Lanjut</button>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="nusa-advantages-section">
          <div className="nusa-section-container">
            <h2 className="nusa-section-title">Keunggulan Kami</h2>
            <div className="nusa-advantages-grid">
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">🕌</div>
                <h3>100% Syariah</h3>
                <p>Semua produk dan layanan kami sesuai prinsip syariah Islam, bebas riba dan spekulasi.</p>
              </div>
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">🔒</div>
                <h3>Tanpa Biaya Tersembunyi</h3>
                <p>Transparansi penuh dalam setiap transaksi, tanpa biaya tambahan yang tidak terduga.</p>
              </div>
              <div className="nusa-advantage-card">
                <div className="nusa-advantage-icon">⚡</div>
                <h3>Proses Cepat & Aman</h3>
                <p>Teknologi modern memastikan transaksi Anda cepat, aman, dan mudah diakses kapan saja.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="nusa-testimonials-section">
          <div className="nusa-section-container">
            <h2 className="nusa-section-title">Testimoni Pengguna</h2>
            <div className="nusa-testimonials-grid">
              <div className="nusa-testimonial-card">
                <div className="nusa-testimonial-avatar">👤</div>
                <p className="nusa-testimonial-quote">"Bank Nusantara Syariah memberikan pelayanan yang sangat memuaskan. Produk tabungan syariah mereka membantu saya merencanakan masa depan dengan tenang."</p>
                <div className="nusa-testimonial-author">
                  <strong>Ahmad Rahman</strong><br />
                  <span>Wirausaha</span>
                </div>
              </div>
              <div className="nusa-testimonial-card">
                <div className="nusa-testimonial-avatar">👩</div>
                <p className="nusa-testimonial-quote">"Saya sangat terbantu dengan pembiayaan syariah untuk membeli rumah. Prosesnya transparan dan sesuai prinsip Islam."</p>
                <div className="nusa-testimonial-author">
                  <strong>Siti Aminah</strong><br />
                  <span>Ibu Rumah Tangga</span>
                </div>
              </div>
              <div className="nusa-testimonial-card">
                <div className="nusa-testimonial-avatar">👨‍💼</div>
                <p className="nusa-testimonial-quote">"Deposito syariah di sini memberikan return yang kompetitif tanpa riba. Sangat direkomendasikan untuk investasi jangka panjang."</p>
                <div className="nusa-testimonial-author">
                  <strong>Budi Santoso</strong><br />
                  <span>Pegawai Swasta</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section with Filters */}
        <section className="nusa-products-section">
          <div className="nusa-section-container">
            <div className="nusa-products-header">
              <h2 className="nusa-products-title">Produk Perbankan BNS</h2>
              <p className="nusa-products-sub">Temukan berbagai produk perbankan syariah yang sesuai dengan kebutuhan Anda</p>
            </div>

            {/* Filters */}
            <div className="nusa-filters">
              <input
                type="text"
                placeholder="Cari produk..."
                className="nusa-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="nusa-category-buttons">
                <button className={`nusa-category-btn ${selectedCategory === 'Semua' ? 'active' : ''}`} onClick={() => setSelectedCategory('Semua')}>Semua</button>
                <button className={`nusa-category-btn ${selectedCategory === 'PENDANAAN' ? 'active' : ''}`} onClick={() => setSelectedCategory('PENDANAAN')}>PENDANAAN</button>
                <button className={`nusa-category-btn ${selectedCategory === 'PEMBIAYAAN' ? 'active' : ''}`} onClick={() => setSelectedCategory('PEMBIAYAAN')}>PEMBIAYAAN</button>
                <button className={`nusa-category-btn ${selectedCategory === 'JASA & LAYANAN' ? 'active' : ''}`} onClick={() => setSelectedCategory('JASA & LAYANAN')}>JASA & LAYANAN</button>
              </div>
            </div>

            <div id="nusa-grid" className="nusa-grid" aria-live="polite">
              {renderProducts()}
            </div>
          </div>
        </section>

        {/* Accessible product detail modal (fallback if detail page not found) */}
        <div id="nusa-detail-modal" className="nusa-modal" role="dialog" aria-modal="true" aria-hidden={!modalOpen ? "true" : "false"}>
          <div className="nusa-modal-backdrop" onClick={closeModal}></div>
          <div className="nusa-modal-panel" role="document">
            <button className="nusa-modal-close" aria-label="Tutup detail" onClick={closeModal}>&times;</button>
            <div id="nusa-modal-content" className="nusa-modal-content">
              {modalProduct && (
                <>
                  <header style={{display:'flex',alignItems:'center',gap:'.6rem'}}>
                    <div style={{fontSize:'1.8rem'}}>{modalProduct.emoji}</div>
                    <div>
                      <h3 style={{margin:0}}>{modalProduct.title || modalProduct.name}</h3>
                      <div style={{color:'var(--nusa-muted)'}}>{modalProduct.price || ''}</div>
                    </div>
                  </header>
                  <section style={{marginTop:'.6rem'}}>
                    <h4>Fitur Utama</h4>
                    <p>Deskripsi fitur utama. Silakan lengkapi di halaman detail produk Anda.</p>
                  </section>
                  <section>
                    <h4>Tambahan</h4>
                    <ul>{(modalProduct.extrasList || modalProduct.additional || []).length > 0 ? (modalProduct.extrasList || modalProduct.additional || []).map((x, idx) => <li key={idx}>{x}</li>) : <li>-</li>}</ul>
                  </section>
                  <footer style={{marginTop:'.8rem',display:'flex',gap:'.5rem'}}>
                    <Link to={`/products/${modalProduct.id}`} className="nusa-cta">Buka Halaman Lengkap</Link>
                    <button className="nusa-more" onClick={closeModal}>Close</button>
                  </footer>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
