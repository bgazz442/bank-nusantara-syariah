import React, { useEffect, useState, useRef } from "react";

/**
 * HeroSection
 * - images: array path relative ke folder public, contoh: "/images/bg1.jpg"
 * - intervalMs: waktu tiap slide (ms)
 * - fadeMs: durasi fade (ms)
 */
const HeroSection = ({
  images = ["/assets/playananm.jpg", "/assets/kluarga.jpg"],
  intervalMs = 6000,
  fadeMs = 1000,
}) => {
  const [current, setCurrent] = useState(0);
  const [loadedMask, setLoadedMask] = useState(0); // bitmask atau count loaded
  const [ready, setReady] = useState(false); // true setelah minimal gambar pertama terload
  const timerRef = useRef(null);

  // typing effect state for hero title
  const fullTitle = "Solusi Keuangan Terpercaya Untuk Masa Depan Anda";
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    let index = 0;
    const speed = 60; // ms per character
    const pause = 2000; // jeda setelah selesai mengetik sebelum mengulang
    let timeoutId;

    const type = () => {
      if (index <= fullTitle.length) {
        setTypedTitle(fullTitle.slice(0, index));
        index += 1;
        timeoutId = setTimeout(type, speed);
      } else {
        // setelah selesai, reset dan tunggu sebentar sebelum mulai lagi
        index = 0;
        timeoutId = setTimeout(type, pause);
      }
    };

    type();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [fullTitle]);

  // Preload images (promise-based). Set ready when at least first image loaded.
  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;

    const loadPromises = images.map((src, idx) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount += 1;
          if (!isMounted) return;
          setLoadedMask((prev) => prev + 1);
          // set ready as soon as the first image is loaded to avoid blank hero
          if (!ready) setReady(true);
          resolve({ idx, ok: true });
        };
        img.onerror = () => {
          // jika gagal, resolve tetap agar Promise.all tidak hang
          resolve({ idx, ok: false });
        };
      })
    );

    // run all loads (we don't need to await here, UI shows as they load)
    Promise.all(loadPromises).then(() => {
      if (!isMounted) return;
      // jika semua selesai, ready juga set true (safety)
      setReady(true);
    });

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  // Slide interval
  useEffect(() => {
    // jangan start kalau belum siap (minimal 1 gambar terload)
    if (!ready) return;
    // start interval
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [ready, images.length, intervalMs]);

  // Inline styles for fade duration
  const layerStyle = (src, visible, idx) => ({
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    // Posisi sedikit lebih ke tengah supaya area penting gambar mengikuti posisi kartu kredit
    backgroundPosition: "center 40%",
    position: "absolute",
    inset: 0,
    transition: `opacity ${fadeMs}ms ease-in-out`,
    opacity: visible ? 1 : 0,
    willChange: "opacity",
  });

  // overlay style to keep text readable
  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.35)", // adjust if needed
    zIndex: 1,
    pointerEvents: "none",
  };

  return (
    <section
      className="hero-root relative flex flex-col items-center justify-center text-center text-white overflow-hidden"
      style={{ minHeight: "100vh", paddingTop: "140px", paddingBottom: "80px" }} // atau h-screen jika mau full height
      aria-roledescription="carousel"
      aria-label="Hero slideshow"
    >
      {/* If not ready, still render first layer with low-quality fallback background color */}
      {!ready && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#111", // fallback background saat loading
            zIndex: 0,
          }}
        />
      )}

      {/* Layers: map images to absolute divs that crossfade by opacity */}
      {images.map((src, idx) => (
        <div
          key={src + idx}
          style={layerStyle(src, idx === current, idx)}
          aria-hidden={idx === current ? "false" : "true"}
        />
      ))}

      {/* overlay agar teks tetap terbaca */}
      <div style={overlayStyle} />

      {/* Konten hero (tetap di atas semua layer) */}
      <div style={{ position: "relative", zIndex: 2, padding: "2rem" }}>
        <div
          className="hero-inner"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            gap: "2rem",
          }}
        >
          <div
            className="hero-text"
            style={{
              minHeight: "200px", // sedikit lebih pendek agar ruang kartu lebih lega
            }}
          >
            <h1
              style={{
                fontSize: "3.5rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
                lineHeight: 1.2,
                letterSpacing: "-1px",
              }}
            >
              {/* Reserve fixed width/height with full title so layout tidak berubah saat typing */}
              <span
                style={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                {/* Ghost text: full title transparan sebagai penyangga layout */}
                <span
                  style={{
                    visibility: "hidden",
                  }}
                >
                  {fullTitle}
                </span>

                {/* Typed text overlay tepat di atas ghost text */}
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    color: "#87CEEB",
                  }}
                >
                  {typedTitle}
                </span>
              </span>
            </h1>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.75rem",
              }}
            >
              <a
                href="/products"
                style={{
                  background: "#ffffff",
                  color: "#2d5016",
                  padding: "1rem 2rem",
                  borderRadius: "12px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-block",
                  boxShadow: "0 4px 20px rgba(255,255,255,0.2)",
                  transition: "all 0.3s ease",
                }}
              >
                Lihat Produk
              </a>
              <a
                href="#layanan"
                style={{
                  background: "transparent",
                  color: "#fff",
                  padding: "1rem 2rem",
                  borderRadius: "12px",
                  fontWeight: 600,
                  border: "2px solid #fff",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "all 0.3s ease",
                }}
              >
                Pelajari Lebih
              </a>
            </div>
          </div>

          {/* Kartu kredit: di bawah teks pada mobile, di samping teks pada desktop */}
          <div
            className="hero-card-wrapper"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                padding: "1.25rem 1.75rem",
                borderRadius: "34px",
                background: "rgba(0, 0, 0, 0.25)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
                backdropFilter: "blur(6px)",
              }}
            >
              <img
                className="hero-card-image"
                src="/images/WhatsApp Image 2025-11-08 at 15.10.33_1a4edee3.jpg"
                alt="Kartu Bank Nusantara"
                style={{
                  borderRadius: "30px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
                  position: "relative",
                  overflow: "hidden",
                  transform:
                    "perspective(1000px) rotateY(-15deg) rotateX(5deg)",
                  transition: "transform 0.3s ease",
                  animation: "float 6s ease-in-out infinite",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes float {
            0%, 100% { transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(0px); }
            50% { transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(-10px); }
          }

          /* Layout dasar: mobile dulu (kolom, kartu di bawah judul) */
          .hero-inner {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 2rem;
          }

          .hero-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .hero-card-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1.5rem;
          }

          /* ukuran dasar kartu: kecil dan proporsional */
          .hero-card-image {
            width: 180px;
            height: auto;
            max-width: 40vw;
          }

          /* Penyesuaian khusus mobile: kartu lebih dekat ke judul dan sedikit lebih kecil */
          @media (max-width: 768px) {
            .hero-root {
              /* override min-height 100vh di inline style agar tinggi hero mengikuti konten saja */
              min-height: auto !important;
              padding-top: 88px;
              padding-bottom: 48px; /* cukup panjang supaya background menutupi area di bawah kartu */
            }

            .hero-inner {
              gap: 1.25rem; /* kurangi jarak antara teks dan kartu */
            }

            .hero-text {
              /* biar tinggi area teks tidak memaksa kartu terlalu jauh ke bawah */
              min-height: auto !important;
            }

            .hero-card-wrapper {
              margin-top: 10rem !important; /* sedikit lebih rendah, tetap override inline marginTop 2rem */
            }

            .hero-card-image {
              width: 160px;
              max-width: 60vw;
            }
          }

          /* Layout responsif hero: samping-sampingan di desktop */
          @media (min-width: 1024px) {
            .hero-inner {
              flex-direction: row;
              align-items: center;
              text-align: left;
            }

            .hero-text {
              align-items: flex-start;
              justify-content: center;
              flex: 1 1 50%;
              margin-top: -16px; /* naikan teks+CTA sedikit agar kartu sejajar background */
            }

            .hero-card-wrapper {
              margin-top: 0;
              justify-content: flex-end;
              align-items: center;
              flex: 1 30%;
            }

            /* Desktop only: hilangkan panel background blur di belakang kartu */
            .hero-card-wrapper > div {
              background: transparent;
              box-shadow: none;
              padding: 0;
            }

            .hero-card-image {
              width: 100px; /* lebih kecil khusus desktop, mobile & base tetap */
              max-width: 90%;
            }
          }
        `}
      </style>
    </section>
  );

};

export default HeroSection;
