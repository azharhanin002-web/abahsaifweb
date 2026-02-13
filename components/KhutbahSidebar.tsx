// components/KhutbahSidebar.tsx
import Link from "next/link";

export default function KhutbahSidebar({ articles = [] }: { articles?: any[] }) {
  // Pengaman tambahan agar tidak error map
  if (!articles || articles.length === 0) {
    return (
      <div style={{ backgroundColor: '#003366', borderRadius: '12px', padding: '25px', color: '#fff' }}>
        <p style={{ fontSize: '13px', opacity: 0.6 }}>Belum ada khutbah terbaru.</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#003366', borderRadius: '12px', padding: '25px', color: '#fff' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', color: '#FFD700' }}>
        KHUTBAH TERBARU
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {articles.map((item) => (
          <Link 
            key={item._id} 
            href={`/khutbah/${item.slug}`} 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <h3 style={{ fontSize: '15px', margin: '0 0 5px 0' }}>{item.title}</h3>
            <span style={{ fontSize: '11px', opacity: 0.6 }}>
              {new Date(item.publishedAt).toLocaleDateString('id-ID')}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}