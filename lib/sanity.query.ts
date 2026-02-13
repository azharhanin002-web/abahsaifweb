import { client } from "./sanity.client";
import { groq } from "next-sanity";

/**
 * 1. Ambil SEMUA postingan terbaru tanpa filter.
 * Mengambil 10 data pertama untuk komponen aliran berita utama.
 */
export async function getAllPosts() {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc)[0...10] {
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      publishedAt,
      "category": coalesce(categories[0]->title, category, "Umum")
    }`
  );
}

/**
 * 2. Ambil Berita Terbaru.
 * Filter ganda pada referensi kategori dan field teks untuk akurasi.
 */
export async function getNewsPosts() {
  return client.fetch(
    groq`*[_type == "post" && (categories[]->title match "Berita" || category match "Berita")] | order(publishedAt desc)[0...10] {
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      publishedAt,
      "category": coalesce(categories[0]->title, category, "Berita")
    }`
  );
}

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
    }`
  );
}

/**
 * 4. Fungsi DINAMIS untuk RubRIK (Tafsir, Fiqih, dll).
 * Menghasilkan excerpt (ringkasan) langsung dari PortableText di sisi server.
 */
export async function getPostsByCategory(categoryName: string) {
  return client.fetch(
    groq`*[_type == "post" && (categories[]->title match $categoryName || category match $categoryName)] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      publishedAt,
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

  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      "image": mainImage.asset->url,
      publishedAt,
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
  );
}