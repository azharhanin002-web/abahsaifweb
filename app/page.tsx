<<<<<<< HEAD
// app/page.tsx
import { getKhutbahPosts } from "@/lib/sanity.query";
=======
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
import Headline from "@/components/Headline";
import TopNews from "@/components/TopNews";
import PopularSidebar from "@/components/PopularSidebar";
import RecommendationSection from "@/components/RecommendationSection";
<<<<<<< HEAD
import LatestPosts from "@/components/LatestPosts";
import KhutbahSidebar from "@/components/KhutbahSidebar";
import InfoDakwah from "@/components/InfoDakwah";

export default async function Home() {
  // Ambil data Khutbah
  const khutbahData = await getKhutbahPosts() || [];

=======
import LatestPosts from "@/components/LatestPosts"; // Komponen baru

export default function Home() {
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
  return (
    <div className="container" style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 20px' }}>
      <TopNews />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '30px', marginTop: '20px' }}>
        <main><Headline /></main>
        <aside><PopularSidebar /></aside>
      </div>

      <RecommendationSection />

<<<<<<< HEAD
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
=======
      {/* --- BLOK POSTINGAN TERBARU (BARU) --- */}
      <LatestPosts />
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
    </div>
  );
}