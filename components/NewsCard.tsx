<<<<<<< HEAD
"use client";

=======
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
import Link from "next/link";

type NewsCardProps = {
  title?: string;
  image?: string;
  date?: string;
  slug?: string;
  category?: string;
};

export default function NewsCard({
<<<<<<< HEAD
  title = "Judul Berita",
  image = "https://via.placeholder.com/400/240?text=No+Image",
  date,
  slug = "#",
  category = "Berita",
}: NewsCardProps) {
  
  /** * LOGIKA DINAMIS: 
   * Mengubah kategori langsung menjadi slug URL (Contoh: "Dzikir & Doa" -> "dzikir-dan-doa")
   * Ini lebih aman daripada menggunakan manual mapping.
   */
  const path = category
    .toLowerCase()
    .replace(/ & /g, "-dan-") 
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

  // Format tanggal Indonesia
  const formattedDate = date 
    ? new Date(date).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Baru saja";

  return (
    <article className="news-card">
      <Link href={`/${path}/${slug}`} className="card-anchor">
        <div className="image-container">
=======
  title = "Judul Berita dari CMS",
  image = "https://via.placeholder.com/400/240?text=No+Image",
  date = "Baru saja",
  slug = "#",
  category = "Berita",
}: NewsCardProps) {
  return (
    <article className="news-card" style={{ 
      borderBottom: '1px solid #f0f0f0', 
      paddingBottom: '15px',
      transition: 'transform 0.2s ease-in-out'
    }}>
      {/* Menggunakan Link Next.js agar navigasi instan tanpa reload */}
      <Link href={`/artikel/${slug}`} style={{ textDecoration: 'none' }}>
        <div style={{ 
          width: '100%', 
          aspectRatio: '16/9', 
          borderRadius: '8px', 
          overflow: 'hidden', 
          marginBottom: '12px',
          backgroundColor: '#eee'
        }}>
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
          <img 
            src={image} 
            alt={title} 
            loading="lazy" 
<<<<<<< HEAD
            className="card-img"
=======
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
          />
        </div>

        <div className="news-card-content">
<<<<<<< HEAD
          <span className="category-badge">{category}</span>
          
          <h3 className="card-title-text">
            {title}
          </h3>
          
          <span className="card-date-text">
            {formattedDate}
          </span>
        </div>
      </Link>

      <style jsx>{`
        .news-card {
          border-bottom: 1px solid #f0f0f0;
          padding-bottom: 15px;
          margin-bottom: 20px;
          transition: all 0.2s ease;
        }
        .news-card:hover { transform: translateY(-3px); }
        .card-anchor { text-decoration: none; display: block; }
        .card-anchor:hover .card-title-text { color: #004a8e; }
        
        .image-container {
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 12px; /* Lebih modern */
          overflow: hidden;
          margin-bottom: 12px;
          background-color: #f8f9fa;
        }
        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .card-anchor:hover .card-img { transform: scale(1.1); }

        .category-badge {
          font-size: 11px;
          color: #004a8e;
          font-weight: 700;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 6px;
          letter-spacing: 0.5px;
        }

        .card-title-text {
          font-size: 17px;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.4;
          margin: 0 0 10px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-date-text {
          font-size: 11px;
          color: #999;
          display: block;
        }
      `}</style>
=======
          {/* Menampilkan kategori dengan aksen warna biru abah */}
          <span style={{ 
            fontSize: '11px', 
            color: '#004a8e', 
            fontWeight: 'bold', 
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '4px'
          }}>
            {category}
          </span>
          
          <h3 style={{ 
            fontSize: '16px', 
            fontWeight: 'bold', 
            color: '#333', 
            lineHeight: '1.4',
            margin: '0 0 8px 0',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {title}
          </h3>
          
          <span style={{ 
            fontSize: '11px', 
            color: '#888',
            display: 'block'
          }}>
            {date}
          </span>
        </div>
      </Link>
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
    </article>
  );
}