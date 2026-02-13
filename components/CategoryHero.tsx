"use client"; // WAJIB: Agar styled-jsx bisa berjalan

export default function CategoryHero({ title, description }: { title: string, description: string }) {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-desc">{description}</p>
        <div className="hero-line"></div>
      </div>

      <style jsx>{`
        .hero-container {
          background: #ffffff;
          padding: 40px 0;
          border-bottom: 1px solid #eee;
          margin-bottom: 20px;
        }
        .hero-content { max-width: 1200px; margin: 0 auto; }
        .hero-title {
          font-size: 32px;
          font-weight: 900;
          color: #144d8b;
          margin-bottom: 10px;
          letter-spacing: -1px;
        }
        .hero-desc { font-size: 16px; color: #666; line-height: 1.6; max-width: 700px; margin-bottom: 20px; }
        .hero-line { width: 60px; height: 4px; background: #2ca44f; border-radius: 2px; }
      `}</style>
    </div>
  );
}