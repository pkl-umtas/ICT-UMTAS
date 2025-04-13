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
              <p class="text-end">Kamis, 12 Okt 2023</p>
              <h5 class="text-center mt-1">SMKN 4 Tasikmalaya Koneksikan Iduka dengan Pencari Kerja</h5>
              <a href="https://radartasik.id/2023/10/12/smkn-4-tasikmalaya-koneksikan-iduka-dengan-pencari-kerja/" target="_blank">
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
              <p class="text-end">Senin, 20 Mei 2024</p>
              <h5 class="text-center mt-1">Honda Resmikan Safety Riding Lab di SMKN 4 Tasikmalaya, Ciptakan Bibit Keselamatan di Jawa Barat</h5>
              <a href="https://www.pikiran-rakyat.com/otomotif/pr-018109177/honda-resmikan-safety-riding-lab-di-smkn-4-tasikmalaya-ciptakan-bibit-keselamatan-pada-gen-z?page=all" target="_blank">
                <p class="mt-4">Baca Selengkapnya <i class="bi bi-arrow-right-circle text-black"></i></p>
              </a>
            </div>
          </div>
        </div>
  
        <!-- Berita 3 -->
        <div class="col-12 col-sm-10 col-md-6 col-lg-5 mb-4">
          <div class="card bg-light rounded-4 h-100">
            <img src="~/assets/img/gambar-2.jpg" class="card-img-top p-2 rounded-4" alt="img-artikel" />
            <div class="card-body">
              <p class="text-end">Senin 27 Feb 2023</p>
              <h5 class="text-center mt-1">Siswa SMKN 4 Tasikmalaya Adu Inovasi dan Kreativitas di Expo Creanova</h5>
              <a href="https://radartasik.id/2023/03/02/siswa-smkn-4-tasikmalaya-adu-inovasi-dan-kreativitas-di-expo-creanova/" target="_blank">
                <p class="mt-4">Baca Selengkapnya <i class="bi bi-arrow-right-circle text-black"></i></p>
              </a>
            </div>
          </div>
        </div>
  
        <!-- Berita 4 -->
        <div class="col-12 col-sm-10 col-md-6 col-lg-5 mb-4">
          <div class="card bg-light rounded-4 h-100">
            <img src="~/assets/img/gambar-2.jpg" class="card-img-top p-2 rounded-4" alt="img-artikel" />
            <div class="card-body">
              <p class="text-end">Kamis, 2 Mar 2023</p>
              <h5 class="text-center mt-1">Sinergi Bagi Negeri, DAM Kerjasama dengan SMKN 4 Tasikmalaya Terapkan KTBSM Sepeda Motor Astra Honda</h5>
              <a href="https://jabar.tribunnews.com/2023/03/02/sinergi-bagi-negeri-dam-kerjasama-dengan-smkn-4-tasikmalaya-terapkan-ktbsm-sepeda-motor-astra-honda" target="_blank">
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
  
