import { getPostsByCategory } from "@/lib/sanity.query";
import Link from "next/link";
<<<<<<< HEAD
import Image from "next/image";

=======


/**
 * Komponen Halaman Kategori
 * Menampilkan daftar artikel berdasarkan kategori yang dipilih di URL.
 */
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}) {
<<<<<<< HEAD
  // Await params untuk standar Next.js 15+
  const { category } = await params;
  
  // Mengambil data artikel secara dinamis berdasarkan kategori
=======
  // Pada Next.js 15, params harus di-await sebelum diakses
  const { category } = await params;
  
  // Mengambil data artikel secara dinamis dari Sanity berdasarkan kategori
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
  const posts = await getPostsByCategory(category);
  
  // Format Judul Tampilan: 'fiqih-praktis' -> 'FIQIH PRAKTIS'
  const categoryTitle = category.replace(/-/g, ' ').toUpperCase();

  return (
<<<<<<< HEAD
    <main className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 15px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Header Kategori */}
      <div style={{ borderBottom: '3px solid #004a8e', marginBottom: '40px', paddingBottom: '10px' }}>
        <h1 style={{ fontSize: '28px', color: '#004a8e', fontWeight: '900', margin: 0 }}>
=======
    <main className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 15px' }}>
      
      {/* Header Kategori: Gaya khas portal berita dengan border biru */}
      <div style={{ borderBottom: '2px solid #004a8e', marginBottom: '30px', paddingBottom: '10px' }}>
        <h1 style={{ fontSize: '24px', color: '#004a8e', fontWeight: 'bold', margin: 0 }}>
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
          {categoryTitle}
        </h1>
      </div>

      {posts.length === 0 ? (
<<<<<<< HEAD
        <div style={{ padding: '100px 0', textAlign: 'center', color: '#888' }}>
          <div style={{ fontSize: '60px', marginBottom: '20px' }}>📂</div>
          <p>Belum ada postingan untuk kategori <strong>{categoryTitle}</strong>.</p>
          <Link href="/" style={{ color: '#004a8e', fontWeight: 'bold', marginTop: '15px', display: 'inline-block' }}>
=======
        /* State Tampilan jika kategori masih kosong */
        <div style={{ padding: '80px 0', textAlign: 'center', color: '#888' }}>
          <div style={{ fontSize: '50px', marginBottom: '20px' }}>📂</div>
          <p>Belum ada postingan untuk kategori <strong>{categoryTitle}</strong>.</p>
          <Link href="/" style={{ color: '#004a8e', textDecoration: 'underline', marginTop: '10px', display: 'inline-block' }}>
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
            Kembali ke Beranda
          </Link>
        </div>
      ) : (
<<<<<<< HEAD
        <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
          {posts.map((post: any) => {
            // Pastikan URL tujuan mengikuti folder kategori dinamis
            const postLink = `/${category}/${post.slug}`;

            return (
              <Link 
                href={postLink} 
                key={post._id} 
                className="news-item-row"
                style={{ 
                  display: 'flex', 
                  gap: '25px', 
                  textDecoration: 'none', 
                  color: 'inherit',
                  paddingBottom: '30px',
                  borderBottom: '1px solid #f0f0f0'
                }}
              >
                {/* Thumbnail Gambar dengan Next/Image agar teroptimasi */}
                <div style={{ 
                  width: '280px', 
                  height: '160px', 
                  flexShrink: 0, 
                  borderRadius: '10px', 
                  overflow: 'hidden', 
                  position: 'relative'
                }}>
                  <Image 
                    src={post.image || "https://via.placeholder.com/280x160?text=No+Image"} 
                    alt={post.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Konten Teks */}
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h2 style={{ 
                    fontSize: '22px', 
                    fontWeight: '800', 
                    lineHeight: '1.3', 
                    margin: '0 0 12px 0', 
                    color: '#1a1a1a'
                  }}>
                    {post.title}
                  </h2>
                  
                  {post.excerpt && (
                    <p style={{ 
                      fontSize: '15px', 
                      color: '#555', 
                      margin: '0 0 15px 0', 
                      lineHeight: '1.6', 
                      display: '-webkit-box', 
                      WebkitLineClamp: 2, 
                      WebkitBoxOrient: 'vertical', 
                      overflow: 'hidden' 
                    }}>
                      {post.excerpt}
                    </p>
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
                     <span style={{ fontSize: '11px', backgroundColor: '#eef4ff', padding: '4px 10px', borderRadius: '4px', color: '#004a8e', fontWeight: 'bold' }}>
                       {categoryTitle}
                     </span>
                     <span style={{ fontSize: '12px', color: '#999' }}>
                      {new Date(post.publishedAt).toLocaleDateString('id-ID', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
=======
        /* Daftar Berita Vertikal */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          {posts.map((post: any) => (
            <Link 
              href={`/artikel/${post.slug}`} 
              key={post._id} 
              style={{ 
                display: 'flex', 
                gap: '25px', 
                textDecoration: 'none', 
                color: 'inherit', 
                borderBottom: '1px solid #f0f0f0', 
                paddingBottom: '25px' 
              }}
            >
              {/* Thumbnail Gambar Dinamis */}
              <div style={{ 
                width: '240px', 
                height: '140px', 
                flexShrink: 0, 
                borderRadius: '8px', 
                overflow: 'hidden', 
                backgroundColor: '#eee',
                position: 'relative'
              }}>
                <img 
                  src={post.image || "https://via.placeholder.com/240x140?text=No+Image"} 
                  alt={post.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>

              {/* Konten Teks */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                <h2 style={{ 
                  fontSize: '22px', 
                  fontWeight: 'bold', 
                  lineHeight: '1.3', 
                  margin: '0 0 10px 0', 
                  color: '#333',
                  transition: 'color 0.2s'
                }}>
                  {post.title}
                </h2>
                
                {/* Deskripsi singkat (Excerpt) */}
                {post.excerpt && (
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#666', 
                    margin: '0 0 12px 0', 
                    lineHeight: '1.5', 
                    display: '-webkit-box', 
                    WebkitLineClamp: 2, 
                    WebkitBoxOrient: 'vertical', 
                    overflow: 'hidden' 
                  }}>
                    {post.excerpt}
                  </p>
                )}

                {/* Meta Data: Kategori & Tanggal Rilis */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                   <span style={{ fontSize: '11px', backgroundColor: '#f0f0f0', padding: '2px 8px', borderRadius: '4px', color: '#004a8e', fontWeight: 'bold' }}>
                     {category.toUpperCase()}
                   </span>
                   <span style={{ fontSize: '12px', color: '#888' }}>
                    {new Date(post.publishedAt).toLocaleDateString('id-ID', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
              </div>
            </Link>
          ))}
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
        </div>
      )}
    </main>
  );
}