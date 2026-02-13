<<<<<<< HEAD
"use client";

=======
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

<<<<<<< HEAD
  // Pengunci ukuran ikon agar tidak meluber lagi
  const iconCircleStyle = (bgColor: string) => ({
    width: '36px',
    height: '36px',
    minWidth: '36px',
    maxWidth: '36px',
    borderRadius: '50%',
    backgroundColor: bgColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
  });

  return (
    <footer style={{ backgroundColor: '#f2f2f2', borderTop: '4px solid #144d8b', padding: '60px 0 0 0', marginTop: '60px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', gap: '30px', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* KOLOM 1: BRAND & SOSIAL MEDIA SEJAJAR */}
        <div>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '20px' }}>
            <Image src="/abah-saif.jpeg" alt="Logo" width={50} height={50} style={{ borderRadius: '50%' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '24px', fontWeight: '900', color: '#144d8b', lineHeight: '1' }}>
                ABAH<span style={{ color: '#2ca44f' }}>SAIF</span><span style={{ color: '#aaa', fontWeight: '400', fontSize: '18px' }}>.WEB.ID</span>
              </span>
              <span style={{ fontSize: '11px', color: '#555', fontWeight: '600', marginTop: '4px' }}>Menggali Ilmu, Membuka Cahaya</span>
            </div>
          </Link>
          <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.6', marginBottom: '25px', paddingRight: '20px' }}>
            Wadah edukasi dan literasi Islam yang berkomitmen menyajikan konten murni, menyejukkan, dan mencerahkan.
          </p>
          
          {/* SOSIAL MEDIA DENGAN SVG TAJAM */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link href="#" style={iconCircleStyle('#1877F2')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </Link>
            <Link href="#" style={iconCircleStyle('#000000')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
            <Link href="#" style={{ ...iconCircleStyle(''), background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Link>
            <Link href="#" style={iconCircleStyle('#ff0000')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </Link>
          </div>
        </div>

        {/* KOLOM 2: KATEGORI UTAMA */}
        <div>
          <h4 style={{ fontSize: '16px', fontWeight: 'bold', borderLeft: '3px solid #2ca44f', paddingLeft: '10px', marginBottom: '20px' }}>Kategori Utama</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: '#555', lineHeight: '2.2' }}>
            <li><Link href="/berita">Berita</Link></li>
            <li><Link href="/artikel">Artikel</Link></li>
            <li><Link href="/tafsir">Tafsir Al-Qur'an</Link></li>
            <li><Link href="/khutbah">Khutbah</Link></li>
            <li><Link href="/dzikir">Dzikir & Doa</Link></li>
          </ul>
        </div>

        {/* KOLOM 3: INFORMASI */}
        <div>
          <h4 style={{ fontSize: '16px', fontWeight: 'bold', borderLeft: '3px solid #144d8b', paddingLeft: '10px', marginBottom: '20px' }}>Informasi</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: '#555', lineHeight: '2.2' }}>
            <li><Link href="/tentang">Tentang Kami</Link></li>
            <li><Link href="/redaksi">Redaksi & Manajemen</Link></li>
            <li><Link href="/kontak">Hubungi Kami</Link></li>
            <li><Link href="/pedoman">Pedoman Media Siber</Link></li>
          </ul>
        </div>

        {/* KOLOM 4: JARINGAN MEDIA */}
        <div>
          <h4 style={{ fontSize: '16px', fontWeight: 'bold', borderLeft: '3px solid #ce1111', paddingLeft: '10px', marginBottom: '20px' }}>Jaringan Media</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: '#555', lineHeight: '2.2' }}>
            <li><Link href="#">Media Islam Online</Link></li>
            <li><Link href="#">Ilham TV (YouTube)</Link></li>
            <li style={{ marginTop: '10px' }}>
              <Link href="/pasang-iklan" style={{ color: '#144d8b', fontWeight: 'bold' }}>Pasang Iklan / Kerjasama</Link>
=======
  return (
    <footer style={{ 
      backgroundColor: '#fff', 
      borderTop: '4px solid #004a8e', 
      padding: '50px 0 0 0', 
      fontFamily: 'Arial, sans-serif',
      marginTop: '60px' 
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '40px' 
      }}>
        {/* KOLOM 1: BRAND & LOGO */}
        <div>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            {/* Menggunakan logo yang sama dengan header */}
            <Image src="/abah-saif.jpeg" alt="Logo" width={40} height={40} style={{ borderRadius: '5px' }} />
            <h2 style={{ fontSize: '24px', fontWeight: '900', fontStyle: 'italic', color: '#004a8e', margin: 0, letterSpacing: '-1px' }}>
              ABAH<span style={{ color: '#28a745' }}>SAIF</span>
            </h2>
          </Link>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.8', textAlign: 'justify' }}>
            Wadah edukasi dan literasi Islam yang berkomitmen menyajikan konten murni, menyejukkan, dan mencerahkan. Menggali kedalaman ilmu untuk membuka cahaya kebaikan bagi umat.
          </p>
        </div>

        {/* KOLOM 2: RUBRIK POPULER */}
        <div>
          <h4 style={{ color: '#333', marginBottom: '20px', fontSize: '16px', borderLeft: '4px solid #28a745', paddingLeft: '10px' }}>Kategori Utama</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
            {['Berita', 'Artikel', 'Tafsir Al-Qur\'an', 'Khutbah', 'Dzikir & Doa'].map((item) => (
              <li key={item} style={{ marginBottom: '12px' }}>
                <Link href={`/${item.toLowerCase().replace(/ /g, '-').replace('&', 'dan')}`} style={{ textDecoration: 'none', color: '#666', transition: '0.3s' }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* KOLOM 3: PERUSAHAAN */}
        <div>
          <h4 style={{ color: '#333', marginBottom: '20px', fontSize: '16px', borderLeft: '4px solid #004a8e', paddingLeft: '10px' }}>Informasi</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
            <li style={{ marginBottom: '12px' }}><Link href="/tentang-kami" style={{ textDecoration: 'none', color: '#666' }}>Tentang Kami</Link></li>
            <li style={{ marginBottom: '12px' }}><Link href="/redaksi" style={{ textDecoration: 'none', color: '#666' }}>Redaksi & Manajemen</Link></li>
            <li style={{ marginBottom: '12px' }}><Link href="/kontak" style={{ textDecoration: 'none', color: '#666' }}>Hubungi Kami</Link></li>
            <li style={{ marginBottom: '12px' }}><Link href="/pedoman-media" style={{ textDecoration: 'none', color: '#666' }}>Pedoman Media Siber</Link></li>
          </ul>
        </div>

        {/* KOLOM 4: SINERGI JARINGAN */}
        <div>
          <h4 style={{ color: '#333', marginBottom: '20px', fontSize: '16px', borderLeft: '4px solid #ce1111', paddingLeft: '10px' }}>Jaringan Media</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
            <li style={{ marginBottom: '12px' }}>
                <Link href="https://onislam.web.id" target="_blank" style={{ textDecoration: 'none', color: '#666' }}>Media Islam Online</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
                <Link href="https://youtube.com/@ilham-tv" target="_blank" style={{ textDecoration: 'none', color: '#666' }}>Ilham TV (YouTube)</Link>
            </li>
            <li style={{ marginBottom: '12px' }}>
                <Link href="/pasang-iklan" style={{ textDecoration: 'none', color: '#004a8e', fontWeight: 'bold' }}>Pasang Iklan / Kerjasama</Link>
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT AREA */}
<<<<<<< HEAD
      <div style={{ marginTop: '50px', padding: '25px 0', borderTop: '1px solid #ddd', textAlign: 'center', fontSize: '12px', color: '#888' }}>
        <p>© {currentYear} <strong>abahsaif.web.id</strong>. All right reserved</p>
=======
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        marginTop: '50px', 
        padding: '25px 0', 
        textAlign: 'center', 
        fontSize: '13px', 
        color: '#888',
        borderTop: '1px solid #eee'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <p style={{ margin: 0 }}>
            © {currentYear} <strong>ABAHSAIF.WEB.ID</strong> — Media Dakwah Digital. Terus Menggali Ilmu, Membuka Cahaya.
          </p>
        </div>
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
      </div>
    </footer>
  );
}