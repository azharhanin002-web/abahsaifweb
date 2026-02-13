import { client } from "./sanity.client";
import { groq } from "next-sanity";

<<<<<<< HEAD
/**
 * 1. Ambil SEMUA postingan terbaru tanpa filter.
 * Mengambil 10 data pertama untuk komponen aliran berita utama.
 */
=======
// 1. Ambil SEMUA jenis postingan terbaru (Untuk komponen LatestPosts)
// Fungsi ini memastikan kategori Artikel, Khutbah, dll ikut muncul
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
export async function getAllPosts() {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc)[0...10] {
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      publishedAt,
<<<<<<< HEAD
      "category": coalesce(categories[0]->title, category, "Umum")
=======
      category
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
    }`
  );
}

<<<<<<< HEAD
/**
 * 2. Ambil Berita Terbaru.
 * Filter ganda pada referensi kategori dan field teks untuk akurasi.
 */
export async function getNewsPosts() {
  return client.fetch(
    groq`*[_type == "post" && (categories[]->title match "Berita" || category match "Berita")] | order(publishedAt desc)[0...10] {
=======
// 2. Ambil Berita Khusus untuk Kolom Kiri (Headline)
export async function getNewsPosts() {
  return client.fetch(
    groq`*[_type == "post" && category == "berita"] | order(publishedAt desc)[0...6] {
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      publishedAt,
<<<<<<< HEAD
      "category": coalesce(categories[0]->title, category, "Berita")
=======
      category
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
    }`
  );
}

<<<<<<< HEAD
/**
 * 3. Ambil Artikel Terbaru (UNTUK SIDEBAR HOMEPAGE).
 * Limit 5 data agar tampilan sidebar tetap proporsional.
 */
export async function getArticlePosts() {
  return client.fetch(
    groq`*[_type == "post" && (categories[]->title match "Artikel" || category match "Artikel")] | order(publishedAt desc)[0...5] {
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      publishedAt,
      "category": coalesce(categories[0]->title, category, "Artikel")
=======
// 3. Ambil Artikel Khusus untuk Sidebar Kanan
export async function getArticlePosts() {
  return client.fetch(
    groq`*[_type == "post" && category == "artikel"] | order(publishedAt desc)[0...5] {
      _id,
      title,
      "slug": slug.current,
      publishedAt
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
    }`
  );
}

<<<<<<< HEAD
/**
 * 4. Fungsi DINAMIS untuk RubRIK (Tafsir, Fiqih, dll).
 * Menghasilkan excerpt (ringkasan) langsung dari PortableText di sisi server.
 */
export async function getPostsByCategory(categoryName: string) {
  return client.fetch(
    groq`*[_type == "post" && (categories[]->title match $categoryName || category match $categoryName)] | order(publishedAt desc) {
=======
// 4. Fungsi DINAMIS untuk Halaman Kategori (Tafsir, Hadits, Fiqih, Hikmah, dll)
export async function getPostsByCategory(category: string) {
  return client.fetch(
    groq`*[_type == "post" && category == $category] | order(publishedAt desc) {
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      publishedAt,
<<<<<<< HEAD
      "category": coalesce(categories[0]->title, category, $categoryName),
      "excerpt": array::join(string::split(pt::text(body), "")[0...150], "") + "..."
    }`,
    { categoryName: `*${categoryName}*` } // Wildcard agar pencarian teks lebih fleksibel
  );
}

/**
 * 5. Ambil Detail Konten (UNTUK HALAMAN BACA).
 * Solusi untuk error $slug: Parameter slug dikirimkan dalam objek params.
 */
export async function getSinglePost(slug: string) {
  if (!slug) return null;

=======
      category,
      "excerpt": pt::text(body)
    }`,
    { category }
  ).then(posts => posts.map((post: any) => ({
    ...post,
    // Memotong teks secara aman di sisi aplikasi agar tidak error di GROQ
    excerpt: post.excerpt ? post.excerpt.substring(0, 150) + "..." : ""
  })));
}

// 5. Ambil Detail Satu Konten (Untuk halaman baca artikel)
export async function getSinglePost(slug: string) {
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      publishedAt,
<<<<<<< HEAD
      "category": coalesce(categories[0]->title, category, "Artikel"),
      body,
      "author": author->name
    }`,
    { slug } // Parameter slug dikirimkan ke GROQ
  );
}

/**
 * 6. Ambil Khutbah Terbaru (UNTUK SIDEBAR KHUTBAH).
 * Perbaikan: Menambahkan field image agar tidak error di komponen sidebar.
 */
export async function getKhutbahPosts() {
  return client.fetch(
    groq`*[_type == "post" && (categories[]->title match "Khutbah" || category match "Khutbah")] | order(publishedAt desc)[0...5] {
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      publishedAt,
      "category": "Khutbah"
    }`
  );
}
export async function getRelatedPosts(category: string, currentSlug: string) {
  return client.fetch(
    groq`*[_type == "post" && category == $category && slug.current != $currentSlug][0...4] {
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url
    }`,
    { category, currentSlug }
=======
      category,
      body
    }`,
    { slug }
>>>>>>> 0a8669197e42559120e5676034610a6a9fd277aa
  );
}