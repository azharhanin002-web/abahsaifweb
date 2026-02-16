// app/page.tsx
import { getKhutbahPosts } from "@/lib/sanity.query";
import Headline from "@/components/Headline";
import TopNews from "@/components/TopNews";
import PopularSidebar from "@/components/PopularSidebar";
import RecommendationSection from "@/components/RecommendationSection";
import LatestPosts from "@/components/LatestPosts";
import KhutbahSidebar from "@/components/KhutbahSidebar";
import InfoDakwah from "@/components/InfoDakwah";

// PENTING: Memastikan data selalu segar dari Sanity saat halaman dibuka
export const dynamic = 'force-dynamic';
export const revalidate = 0; 

export default async function Home() {
  // Mengambil data Khutbah di Server Component agar cepat (SSR)
  const khutbahData = await getKhutbahPosts() || [];

  return (
    <div className="container" style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 20px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Bagian Berita Berjalan / Breaking News */}
      <TopNews />

      {/* BARIS ATAS: Headline & Popular Posts */}
      <div className="top-layout-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 340px', 
        gap: '30px', 
        marginTop: '20px' 
      }}>
        <main>
          <Headline />
        </main>
        <aside>
          <PopularSidebar />
        </aside>
      </div>

      {/* REKOMENDASI: Grid Acak (Client-Side Shuffling) */}
      {/* Komponen ini menangani grid-nya sendiri di dalam */}
      <RecommendationSection />

      {/* BARIS BAWAH: Latest Posts & Sidebar Gabungan */}
      <div className="bottom-layout-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 340px', 
        gap: '30px', 
        marginTop: '40px' 
      }}>
        
        {/* KOLOM KIRI: Daftar Postingan Terbaru */}
        <section>
          <LatestPosts />
        </section>

        {/* KOLOM KANAN: Sidebar Khutbah & Info Dakwah */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {/* Box Khutbah Terbaru */}
          <KhutbahSidebar articles={khutbahData} />
          
          {/* Box Info Dakwah / Poster Event */}
          <InfoDakwah />
        </aside>
      </div>

      {/* Optimasi Responsif Mobile */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          .top-layout-grid, .bottom-layout-grid {
            grid-template-columns: 1fr !important;
          }
          aside {
            margin-top: 20px;
          }
        }
      `}} />
    </div>
  );
}