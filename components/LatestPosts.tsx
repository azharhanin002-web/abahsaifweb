// components/LatestPosts.tsx
import { getAllPosts } from "@/lib/sanity.query"; 
import Link from "next/link";

export default async function LatestPosts() {
  const posts = await getAllPosts();

  return (
    <section style={{ marginTop: '40px', paddingBottom: '50px' }}>
      <h2 style={{ 
        fontSize: '20px', color: '#004a8e', fontWeight: 'bold', 
        marginBottom: '25px', borderBottom: '2px solid #004a8e', 
        display: 'inline-block', paddingBottom: '5px' 
      }}>
        Postingan Terbaru
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        {posts.map((post: any) => {
          const categoryPath = post.category?.toLowerCase().replace(/\s+/g, '-') || "artikel";
          
          return (
            <Link 
              href={`/${categoryPath}/${post.slug}`} 
              key={post._id} 
              className="post-card-group" // Kita pakai class ini untuk hover
              style={{ display: 'flex', gap: '20px', textDecoration: 'none', alignItems: 'flex-start' }}
            >
              <div style={{ 
                width: '180px', height: '110px', borderRadius: '8px', 
                overflow: 'hidden', flexShrink: 0, backgroundColor: '#f0f0f0' 
              }}>
                <img 
                  src={post.image || "https://via.placeholder.com/300/200?text=No+Image"} 
                  alt={post.title} 
                  className="post-thumb-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} 
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <span style={{ 
                  fontSize: '11px', 
                  color: post.category?.toLowerCase() === 'berita' ? '#e64d31' : '#28a745', 
                  fontWeight: 'bold', textTransform: 'uppercase' 
                }}>
                  {post.category}
                </span>
                
                <h3 className="post-title-heading" style={{ 
                  fontSize: '17px', fontWeight: 'bold', color: '#333', 
                  margin: 0, lineHeight: '1.4', transition: 'color 0.2s'
                }}>
                  {post.title}
                </h3>
                
                <span style={{ fontSize: '12px', color: '#888' }}>
                  {new Date(post.publishedAt).toLocaleDateString('id-ID', {
                    day: 'numeric', month: 'long', year: 'numeric'
                  })}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}