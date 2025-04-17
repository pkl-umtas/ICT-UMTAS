<template>
    <div class="container">
      <h4 class="mt-5 text-center text-md-start">Berita Terbaru</h4>
      <div class="text-artikel">
        <p class="mt-3 text-center text-md-start">
          Berita terbaru, cerita inspiratif dan informasi terkini seputar kegiatan serta prestasi Kampus kami.
        </p>
      </div>
  
      <div class="row justify-content-center mt-4">
        <!-- Berita 1 -->
        <div class="col-12 col-sm-10 col-md-6 col-lg-5 mb-4">
          <div class="card bg-light rounded-4 h-100">
            <img src="~/assets/img/carosel.jpg" class="card-img-top p-2 rounded-4" alt="img-artikel" />
            <div class="card-body">
              <p class="text-end">Kamis, 17 Januari 2025</p>
              <h5 class="text-center mt-1">Mahasiswa Prodi Sendratasik UMTAS menyelenggarakan SENTARAYA (Sendratasik Resital Pekan Raya)</h5>
              <a href="https://www.umtas.ac.id/berita/mahasiswa-prodi-sendratasik-umtas-menyelenggarakan-sentaraya-sendratasik-resital-pekan-raya.html" target="_blank">
                <p class="mt-4">Baca Selengkapnya <i class="bi bi-arrow-right-circle text-black"></i></p>
              </a>
            </div>
          </div>
        </div>
  
        <!-- Berita 2 -->
        <div class="col-12 col-sm-10 col-md-6 col-lg-5 mb-4">
          <div class="card bg-light rounded-4 h-100">
            <img src="~/assets/img/carosel1.jpg" class="card-img-top p-2 rounded-4" alt="img-artikel" />
            <div class="card-body">
              <p class="text-end">Senin, 6 Januari 2025</p>
              <h5 class="text-center mt-1">Selamat kepada para Juara di Kejuaraan Pencak Silat BLAC (Bandung Lautan Api Championship) 2025</h5>
              <a href="https://www.umtas.ac.id/berita/selamat-kepada-para-juara-di-kejuaraan-pencak-silat-blac-bandung-lautan-api-championship-2025.html" target="_blank">
                <p class="mt-4">Baca Selengkapnya <i class="bi bi-arrow-right-circle text-black"></i></p>
              </a>
            </div>
          </div>
        </div>
  
        <!-- Berita 3 -->
        <div class="col-12 col-sm-10 col-md-6 col-lg-5 mb-4">
          <div class="card bg-light rounded-4 h-100">
            <img src="~/assets/img/milad.jpg" class="card-img-top p-2 rounded-4" alt="img-artikel" />
            <div class="card-body">
              <p class="text-end">Senin 14 Januari 2025</p>
              <h5 class="text-center mt-1">Puncak Perayaan Milad Ke-10 Universitas Muhammadiyah Tasikmalaya: Momen Istimewa Bertabur Kehormatan</h5>
              <a href="https://www.umtas.ac.id/berita/puncak-perayaan-milad-ke-10-universitas-muhammadiyah-tasikmalaya-momen-istimewa-bertabur-kehormatan.html" target="_blank">
                <p class="mt-4">Baca Selengkapnya <i class="bi bi-arrow-right-circle text-black"></i></p>
              </a>
            </div>
          </div>
        </div>
  
        <!-- Berita 4 -->
        <div class="col-12 col-sm-10 col-md-6 col-lg-5 mb-4">
          <div class="card bg-light rounded-4 h-100">
            <img src="~/assets/img/juara.jpg" class="card-img-top p-2 rounded-4" alt="img-artikel" />
            <div class="card-body">
              <p class="text-end">Kamis, 7 februari 2025</p>
              <h5 class="text-center mt-1">UMTAS Raih Peringkat 1 di Tasikmalaya, 5 PTS se-Jawa Barat, dan 6 PTMA se-Indonesia</h5>
              <a href="https://www.umtas.ac.id/berita/umtas-raih-peringkat-1-di-tasikmalaya-5-pts-se-jawa-barat-dan-6-ptma-se-indonesia.html" target="_blank">
                <p class="mt-4">Baca Selengkapnya <i class="bi bi-arrow-right-circle text-black"></i></p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .card-img-top {
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
  }
  
  .card {
    background-color: transparent;
    backdrop-filter: blur(20px);
    border: 2px solid #fff;
  }
  
  h4, h5, p {
    font-family: "Poppins", sans-serif;
  }
  
  .text-artikel p {
    max-width: 100%;
    margin: auto;
  }
  
  a {
    color: #000 !important;
    text-decoration: none;
  }
  
  /* Responsif tambahan */
  @media (max-width: 768px) {
    .text-artikel p {
      font-size: 0.9rem;
      text-align: center;
    }
  
    h5 {
      font-size: 1rem;
    }
  
    .card-img-top {
      height: 200px;
    }
  }
  </style>
  
