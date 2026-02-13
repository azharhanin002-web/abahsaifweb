// app/page.tsx
import { getKhutbahPosts } from "@/lib/sanity.query";
import Headline from "@/components/Headline";
import TopNews from "@/components/TopNews";
import PopularSidebar from "@/components/PopularSidebar";
import RecommendationSection from "@/components/RecommendationSection";
import LatestPosts from "@/components/LatestPosts";
import KhutbahSidebar from "@/components/KhutbahSidebar";
import InfoDakwah from "@/components/InfoDakwah";

export default async function Home() {
  // Ambil data Khutbah
  const khutbahData = await getKhutbahPosts() || [];

  return (
    <div className="container" style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 20px' }}>
      <TopNews />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '30px', marginTop: '20px' }}>
        <main><Headline /></main>
        <aside><PopularSidebar /></aside>
      </div>

      <RecommendationSection />

      {/* --- BLOK BAWAH: HANYA 2 KOLOM --- */}
      <div className="bottom-layout-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 340px', 
        gap: '30px', 
        marginTop: '40px' 
      }}>
        {/* KOLOM 1 (KIRI): List Postingan Terbaru */}
        <section>
          <LatestPosts />
        </section>

        {/* KOLOM 2 (KANAN): Sidebar Gabungan */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          {/* Khutbah di Atas */}
          <KhutbahSidebar articles={khutbahData} />
          
          {/* Info Dakwah di Bawah Khutbah */}
          <InfoDakwah />
        </aside>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          .bottom-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </div>
  );
}