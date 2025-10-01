# Soal Teori React Js

### Apa Perbedaan JSX dan HTML

- HTML:

  - HTML tidak bisa langsung menulis javascript kecuali menggunakan tag (script)
  - Cara memanggil dalam html menggunakan class

- JSX:
  - JSX bisa menyisipkan javascript menggunakan {}
  - Cara memanngil class menggunakan className

### Contoh Perbedaannya

- HTML

```html
<div class="container">
  <h1>Hello World</h1>
</div>
```

- JSX

```jsx
function App() {
  const name = "Rizqi";
  return (
    <div className="container">
      <h1>Hello {name}</h1>
    </div>
  );
}
```

## Soal 3

### Apa Itu Vitual DOM

- Dom adalah representasi tiruan dari DOM asli di browser

## Cara Kerjanya

- Render Awal: Ketika komponen React pertama kali di-render, React membuat representasi VDOM dari DOM yang sebenarnya.
- Pembaruan: Ketika state atau props dari sebuah komponen berubah, React membuat tree VDOM yang baru.
- Perbandingan (Diffing): React membandingkan tree VDOM yang baru dengan yang sebelumnya untuk mengidentifikasi perubahan. Algoritma diffing ini sangat efisien dalam menemukan perbedaan.
- Pembaruan DOM Sebenarnya: React hanya memperbarui bagian-bagian DOM yang sebenarnya yang telah berubah, meminimalkan jumlah manipulasi DOM. Proses ini membuat pembaruan lebih cepat dan efisien.

## Soal 4

### Jelaskan Perbedaan Antara SPA & MPA

- SPA:

  - SPA(Single Page Application) adalah aplikasi web yang hanya punya 1 halaman index
  - Saat pindah halaman, page tidak reload penuh & hanya bagian tertentu yang berubah

- MPA:
  - MPA(Multi Page Application) adalah aplikasi web yang semua page mempunyai halamannya masing-masing
  - Saat berpindahh halaman maka browser akan reload penuh dan menampilkan page yang dituju

### Kelebihan dan Kekurangan SPA & MPA

- Kelebihan SPA:

  - Cepat & interaktif → hanya bagian tertentu yang berubah, tidak reload penuh.
  - Pengalaman pengguna mulus → mirip aplikasi mobile.

- Kekurangan SPA:

  - SEO lebih sulit → mesin pencari susah membaca konten dinamis (butuh konfigurasi khusus).
  - Loading awal lebih berat → karena semua script diload sekali di awal.

- Kelebihan MPA:

  - SEO lebih mudah → konten ada di server, langsung bisa diindeks.
  - Struktur jelas → tiap halaman berdiri sendiri, cocok untuk website besar (misalnya berita).

- Kekurangan MPA:
  - Navigasi lambat → setiap pindah halaman harus reload penuh.
  - User experience kurang mulus → terasa putus-putus dibanding SPA.
