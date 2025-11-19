import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { DarkModeProvider } from './DarkModeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import VisionMission from './pages/VisionMission';
import AboutContact from './pages/AboutContact';
import KnowledgeBankSyariah from './pages/KnowledgeBankSyariah';
import DifferenceBankSyariah from './pages/DifferenceBankSyariah';
import DifferenceBungaBagiHasil from './pages/DifferenceBungaBagiHasil';
import ProdukBankNusantaraSyariah from './pages/ProdukBankNusantaraSyariah';
import ProfilBank from './pages/ProfilBank';
import './App.css';



// Page Transition Wrapper Component
const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`page-transition ${isVisible ? 'page-enter' : 'page-exit'}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
      }}
    >
      {children}
    </div>
  );
};

const NavbarWrapper = () => {
  const location = useLocation();
  const isProductDetail = location.pathname.startsWith('/products/') && location.pathname !== '/products';

  return (
    <>
      {isProductDetail ? null : <Header />}
    </>
  );
};

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-background text-foreground">
          <NavbarWrapper />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={
              <main className="flex-1">
                <PageTransition>
                  <Products />
                </PageTransition>
              </main>
            } />
            <Route path="/products/:id" element={
              <main className="flex-1">
                <PageTransition>
                  <ProductDetail />
                </PageTransition>
              </main>
            } />
            <Route path="/vision-mission" element={
              <main className="flex-1">
                <PageTransition>
                  <VisionMission />
                </PageTransition>
              </main>
            } />
            <Route path="/about-contact" element={
              <main className="flex-1">
                <PageTransition>
                  <AboutContact />
                </PageTransition>
              </main>
            } />
            <Route path="/knowledge-bank-syariah" element={
              <main className="flex-1">
                <PageTransition>
                  <KnowledgeBankSyariah />
                </PageTransition>
              </main>
            } />
            <Route path="/difference-bank-syariah" element={
              <main className="flex-1">
                <PageTransition>
                  <DifferenceBankSyariah />
                </PageTransition>
              </main>
            } />
            <Route path="/difference-bunga-bagi-hasil" element={
              <main className="flex-1">
                <PageTransition>
                  <DifferenceBungaBagiHasil />
                </PageTransition>
              </main>
            } />
            <Route path="/produk-bank-nusantara-syariah" element={
              <main className="flex-1">
                <PageTransition>
                  <ProdukBankNusantaraSyariah />
                </PageTransition>
              </main>
            } />
            <Route path="/profil-bank" element={
              <main className="flex-1">
                <PageTransition>
                  <ProfilBank />
                </PageTransition>
              </main>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
