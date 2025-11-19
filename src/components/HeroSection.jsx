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
    backgroundPosition: "center top", // Raised position to avoid mirroring in navbar area
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
      className="relative flex flex-col items-center justify-center text-center text-white overflow-hidden"
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }}>
          <div>
            <h1 style={{ fontSize: "3.5rem", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2, letterSpacing: "-1px" }}>
              <span style={{ color: "#87CEEB" }}>Solusi Keuangan Terpercaya Untuk Masa Depan Anda</span>
            </h1>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center", marginBottom: "2.5rem", marginLeft: "6rem" }}>
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
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
              src="/images/WhatsApp Image 2025-11-08 at 15.10.33_1a4edee3.jpg"
              alt="Kartu Bank Nusantara"
              style={{
                width: "350px",
                height: "220px",
                borderRadius: "30px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
                position: "relative",
                overflow: "hidden",
                transform: "perspective(1000px) rotateY(-15deg) rotateX(5deg)",
                transition: "transform 0.3s ease",
                animation: "float 6s ease-in-out infinite",
                objectFit: "cover"
              }}
            />
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
        `}
      </style>
    </section>
  );
};

export default HeroSection;
