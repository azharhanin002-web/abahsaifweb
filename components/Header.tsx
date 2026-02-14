"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const menus = [
    { name: "Berita", slug: "berita" },
    { name: "Artikel", slug: "artikel" },
    { name: "Tafsir Al-Qur'an", slug: "tafsir" },
    { name: "Hadits Pilihan", slug: "hadits" },
    { name: "Fiqih Praktis", slug: "fiqih" },
    { name: "Mutiara Hikmah", slug: "hikmah" },
    { name: "Khutbah", slug: "khutbah" },
    { name: "Dzikir & Doa", slug: "dzikir-doa" },
  ];

  return (
    <header className="header-container">
      {/* LAPIS 1: TOPBAR MODERN - POSISI SUDAH DITUKAR */}
      <div className="top-bar">
        <div className="container flex-row-center">
          
          {/* SEKARANG DI KIRI: MENU */}
          <div className="top-left-menu">
            <div className="menu-circle-icon">☰</div>
            <span className="menu-label">MENU</span>
          </div>

          {/* SEKARANG DI TENGAH: SEARCH PILL */}
          <div className="top-center-search">
            <div className="search-pill-container">
              <input type="text" placeholder="Cari berita..." className="search-pill-input" />
              <button className="search-pill-button">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* SEKARANG DI KANAN: DAFTAR MPC & MASUK */}
          <div className="top-right-group">
            <button className="btn-blue-pill">Daftar MPC</button>
            <Link href="https://abahsaif.sanity.studio" target="_blank" className="btn-outline-pill">
              Masuk
            </Link>
          </div>

        </div>
      </div>

      {/* LAPIS 2: LOGO SECTION (TETAP RATA KIRI) */}
      <div className="logo-section">
        <div className="container">
          <Link href="/" className="logo-flex-wrapper">
            <Image src="/abah-saif.jpeg" alt="Logo" width={55} height={55} className="logo-rounded" />
            <div className="logo-text-box">
              <h1 className="main-logo-title">
                ABAH<span className="green">SAIF</span><span className="gray">.WEB.ID</span>
              </h1>
              <p className="tagline">Menggali Ilmu, Membuka Cahaya</p>
            </div>
          </Link>
        </div>
      </div>

      {/* LAPIS 3: NAVBAR BIRU */}
      <nav className="main-nav">
        <div className="container">
          <ul className="nav-menu-list">
            <li className="nav-item home-box">
              <Link href="/" className="nav-anchor">HOME</Link>
            </li>
            {menus.map((m) => (
              <li key={m.slug} className="nav-item">
                <Link href={`/${m.slug}`} className="nav-anchor">
                  {m.name.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}