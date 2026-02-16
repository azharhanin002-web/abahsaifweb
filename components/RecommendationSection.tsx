"use client";

import { getAllPosts } from "@/lib/sanity.query";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function RecommendationSection() {
  const [recommendedData, setRecommendedData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const allData = await getAllPosts();
        if (allData && allData.length > 0) {
          // Logika Random di sisi Client
          const shuffled = [...allData]
            .sort(() => Math.random() - 0.5)
            .slice(0, 6);
          setRecommendedData(shuffled);
        }
      } catch (error) {
        console.error("Gagal mengambil data rekomendasi:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div style={{ minHeight: '300px', color: '#888' }}>Memuat rekomendasi...</div>;
  if (!loading && recommendedData.length === 0) return null;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '20px', color: '#004a8e', fontWeight: 'bold', margin: 0 }}>
          Rekomendasi untuk Anda
        </h2>
        <Link href="/berita" style={{ fontSize: '13px', color: '#555', textDecoration: 'none' }}>
          Selengkapnya ❯
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
        {recommendedData.map((item: any) => (
          <Link 
            href={`/artikel/${item.slug}`} 
            key={item._id} 
            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
          >
            <div style={{ 
              width: '100%', height: '140px', borderRadius: '8px', 
              overflow: 'hidden', marginBottom: '10px', backgroundColor: '#f0f0f0' 
            }}>
              <img 
                src={item.image || "https://via.placeholder.com/300/200?text=No+Image"} 
                alt={item.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>

            <span style={{ 
              fontSize: '12px', 
              color: item.category === 'berita' ? '#e64d31' : '#28a745', 
              fontWeight: 'bold', display: 'block', marginBottom: '5px', textTransform: 'uppercase' 
            }}>
              {item.category}
            </span>

            <h3 style={{ 
              fontSize: '14px', fontWeight: 'bold', lineHeight: '1.4', margin: 0, color: '#333',
              display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'
            }}>
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}