import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menu = [
    { name: "Beranda", href: "/" },
    { name: "Produk", href: "/products" },
    { name: "Tentang Kami", href: "/vision-mission" },
    { name: "Kontak", href: "/about-contact" },
  ];

  const moreMenu = [
    { name: "Pengetahuan Umum Bank Syariah", href: "/knowledge-bank-syariah" },
    { name: "Perbedaan Bank Syariah Dan bank konvensional", href: "/difference-bank-syariah" },
    { name: "Perbedaan Bunga dan bagin hasil", href: "/difference-bunga-bagi-hasil" },
    { name: "Produk bank nusantara syariah", href: "/produk-bank-nusantara-syariah" },
    { name: "PROFIL PERUSAHAAN", href: "/profil-bank" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <Link to="/" className="nav-logo-link">
          <img src="/images/logo-bank-nusantara-transparent.png" alt="Bank Nusantara Syariah Logo" className="nav-logo-img" />
          <span className="nav-logo-text">BANK NUSANTARA SYARIAH</span>
        </Link>

        {/* Separator */}
        <span className="separator"></span>

        {/* MENU LIST */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {menu.map((item, i) => (
            <Link
              key={i}
              to={item.href}
              className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* MORE DROPDOWN */}
        <div className="dropdown">
          <button onClick={toggleDropdown} className="more-button">
            More
          </button>
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            {moreMenu.map((item, i) => (
              <li key={i}>
                <Link to={item.href} onClick={closeDropdown}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* HAMBURGER MENU */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
