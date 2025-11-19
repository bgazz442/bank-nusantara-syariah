import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { products } from '../data/products';
import './Products.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="nusa-products-wrapper">
        <div className="nusa-products-header">
          <h2 className="nusa-products-title">Product Not Found</h2>
          <button
            onClick={() => navigate('/products')}
            className="nusa-cta"
            style={{marginTop: '20px'}}
          >
            <FaArrowLeft /> Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="nusa-products-container" style={{
      background: 'radial-gradient(ellipse 60% 40% at 20% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(255, 119, 198, 0.1) 0%, transparent 60%), linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #0c0c0c 100%)',
      backgroundAttachment: 'fixed',
      backgroundSize: '100% 100%',
      color: '#ffffff',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      paddingBottom: '100px',
      paddingLeft: '20px',
      paddingRight: '20px'
    }}>
      <div className="nusa-content-layer">
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
          <h2 style={{fontSize: '2.5rem', fontWeight: '700', color: '#ffffff', margin: '0'}} className="rgb-text">{product.name}</h2>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 20px'}}>
          <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '20px'}}>
            <button
              onClick={() => navigate(`/products?scrollTo=${product.id}`)}
              className="nusa-cta"
            >
              <FaArrowLeft /> Kembali ke Produk
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '24px',
              padding: '32px',
              backdropFilter: 'blur(25px)',
              marginBottom: '40px'
            }}
          >
            <section style={{marginBottom: '30px'}}>
              <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '15px'}}>Deskripsi</h3>
              <p style={{color: '#ffffff', opacity: 0.9, lineHeight: '1.6'}}>{product.detailedInfo.description}</p>
            </section>

            <section style={{marginBottom: '30px'}}>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '15px'}}>Syarat</h3>
              <ul style={{color: '#ffffff', opacity: 0.9, lineHeight: '1.6', paddingLeft: '20px'}}>
                {product.detailedInfo.requirements.map((req, index) => (
                  <li key={index} style={{marginBottom: '8px'}}>{req}</li>
                ))}
              </ul>
            </section>

            <section style={{marginBottom: '30px'}}>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '15px'}}>Fitur</h3>
              <ul style={{color: '#ffffff', opacity: 0.9, lineHeight: '1.6', paddingLeft: '20px'}}>
                {product.detailedInfo.features.map((feature, index) => (
                  <li key={index} style={{marginBottom: '8px'}}>{feature}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', color: '#ffffff', marginBottom: '15px'}}>Biaya</h3>
              <ul style={{color: '#ffffff', opacity: 0.9, lineHeight: '1.6', paddingLeft: '20px'}}>
                {product.detailedInfo.costs.map((cost, index) => (
                  <li key={index} style={{marginBottom: '8px'}}>{cost}</li>
                ))}
              </ul>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
