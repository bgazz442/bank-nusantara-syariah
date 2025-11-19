import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  id: {
    translation: {
      home: 'Beranda',
      products: 'Produk & Layanan',
      visionMission: 'Visi & Misi',
      aboutContact: 'Tentang & Kontak',
      heroTitle: 'PT BANK NUSANTARA SYARIAH',
      heroSubtitle: 'Solusi Keuangan Terpercaya untuk Masa Depan Anda',
      ctaButton: 'Lihat Produk Kami',
      bankDescription: 'PT BANK NUSANTARA SYARIAH adalah bank syariah terdepan di Indonesia yang berkomitmen menghadirkan layanan keuangan modern dan inovatif sesuai prinsip syariah. Dengan jaringan yang luas dan layanan digital terdepan, kami siap menjadi solusi keuangan terpercaya bagi seluruh masyarakat Indonesia.',
      vision: 'Visi',
      visionText: 'Menjadi Bank Terdepan dalam Memberikan Solusi Keuangan Inovatif',
      visionDescription: 'Bank Nusantara berkomitmen untuk menjadi institusi keuangan terkemuka di Indonesia yang memberikan layanan perbankan berkualitas tinggi, inovatif, dan terpercaya. Kami berusaha untuk selalu berada di garis depan dalam menghadirkan solusi keuangan yang sesuai dengan kebutuhan masyarakat Indonesia yang dinamis.',
      innovationHighlight: 'Inovasi Berkelanjutan',
      innovationDesc: 'Mengembangkan produk dan layanan yang selalu mengikuti perkembangan zaman',
      trustHighlight: 'Kepercayaan Nasabah',
      trustDesc: 'Membangun hubungan jangka panjang berdasarkan kepercayaan dan transparansi',
      excellenceHighlight: 'Keunggulan Layanan',
      excellenceDesc: 'Memberikan pengalaman perbankan terbaik dengan standar internasional',
      vision2030: 'Visi 2030',
      vision2030Desc: 'Top 5 Bank Terbaik di Indonesia',
      targetCustomers: 'Target Nasabah',
      branches: 'Cabang',
      mission: 'Misi',
      missionTitle: 'Komitmen Kami untuk Indonesia',
      missionDescription: 'Melalui misi yang jelas dan terarah, kami berusaha memberikan kontribusi terbaik bagi kemajuan perekonomian Indonesia dan kesejahteraan masyarakat.',
      mission1Title: 'Layanan Berkualitas Tinggi',
      mission1Desc: 'Memberikan layanan perbankan yang berkualitas tinggi dengan mengutamakan kepuasan dan kepercayaan nasabah melalui teknologi terdepan dan sumber daya manusia yang kompeten.',
      mission1Feature1: 'Teknologi banking terdepan',
      mission1Feature2: 'SDM bersertifikat internasional',
      mission1Feature3: 'Standar pelayanan ISO 9001',
      timeline2005: 'National Expansion',
      timeline2005Desc: 'Opened 50 branches throughout Indonesia and launched the first ATM service.',
      timeline2010: 'Digital Era',
      timeline2010Desc: 'Launched internet banking and mobile banking for customer convenience.',
      timeline2015: 'Fintech Innovation',
      timeline2015Desc: 'Integrated fintech technology and launched digital payment services.',
      timeline2020: 'Digital Transformation',
      timeline2020Desc: 'Implementation of AI and blockchain to improve service security and efficiency.',
      timeline2024: 'Leading Digital Bank',
      timeline2024Desc: 'Become one of the banks with the most complete digital services in Indonesia.',
      ctaTitle: 'Join the Big Family of Bank Nusantara',
      ctaDescription: 'Realize your financial dreams with a bank that understands the needs of Indonesian society.',
      viewProducts: 'View Our Products',
      contactUs: 'Contact Us',
      licenseInfo: 'PT BANK NUSANTARA SYARIAH is licensed and supervised by the Financial Services Authority (OJK), Bank Indonesia (BI), and is a participant in the Deposit Insurance Corporation (LPS). The maximum value of deposits guaranteed by LPS per customer per bank is Rp 2 billion.',
      copyright: 'Copyright © 2016 PT BANK NUSANTARA SYARIAH. All Rights Reserved.',
      searchPlaceholder: 'Search products...',
      moreInfo: 'More Info',
      aboutTitle: 'About Us',
      history: 'History',
      historyText: 'Bank Nusantara was established in 1991 as the leading bank in Indonesia.',
      address: 'Head Office Address',
      addressText: 'Jln. Merdeka Timur No. 17, Kel. Melawai, Kec. Sudirman, Jakarta Selatan, 12220, Indonesia',
      contactForm: 'Contact Form',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      darkMode: 'Dark Mode',
      language: 'Language',
      savings: 'Sharia Savings',
      deposits: 'Deposits & Investments',
      financing: 'Financing',
      cards: 'Cards & Digital Services',
      business: 'Business & Corporate',
      international: 'International Services',
      all: 'All',
      // Add more translations as needed
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'id',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
