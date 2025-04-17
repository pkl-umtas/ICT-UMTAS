<template>
    <div class="container">
      <h4 class="text-center text-md-start mt-5 mb-4">Kepala IT & Teknisi</h4>
  
      <!-- Total Cards -->
      <div class="row mt-3 justify-content-center">
        <div class="col-6 col-sm-4 col-md-3 mb-3">
          <div class="card card-total rounded-4">
            <div class="card-body text-center">
              <i class="bi bi-person-workspace text-light fs-1"></i>
              <h5 class="fw-semibold">2 Orang</h5>
              <p>Kepala IT</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3 mb-3">
          <div class="card card-total rounded-4">
            <div class="card-body text-center">
              <i class="bi bi-person-badge text-light fs-1"></i>
              <h5 class="fw-semibold">3 Orang</h5>
              <p>Teknisi</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Kepala Teknisi -->
      <div class="card bg-light card-guru mt-5 rounded-4 shadow">
        <h5 class="text-center mt-4">Kepala Teknisi</h5>
        <div class="row mt-4 justify-content-center mb-4 mx-2">
          <div class="col-12 col-sm-6 col-md-4 mb-3" v-for="n in 2" :key="n">
            <div class="card card-data bg-light rounded-4 shadow h-100">
              <div class="card-body p-0 mb-3 text-center">
                <img src="~/assets/img/user.jpeg" alt="img" class="foto-3x4 p-2 rounded-4" />
                <h6 class="fw-semibold mt-3">kepala teknisi</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Teknisi -->
      <div class="card bg-light card-staf mt-5 rounded-4 shadow">
        <h5 class="text-center mt-4">Teknisi</h5>
        <div class="row mt-4 justify-content-center mb-4 mx-2">
          <div class="col-12 col-sm-6 col-md-4 mb-3" v-for="n in 3" :key="n">
            <div class="card card-data bg-light rounded-4 shadow h-100">
              <div class="card-body p-0 mb-3 text-center">
                <img src="~/assets/img/user.jpg" alt="img" class="foto-3x4 p-2 rounded-4" />
                <h6 class="fw-semibold mt-3">teknisi</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  h4, h5, h6, p {
    font-family: "Poppins", sans-serif;
  }
  
  /* Card Jumlah */
  .card-total {
    background-color: #1F60A0;
    color: white;
  }
  
  .card-total h5,
  .card-total p {
    margin: 10px 0 0 0;
    color: #fff;
    font-size: 15px;
  }
  
  /* Card Kepala Teknisi */
  .card-guru {
    background-color: #1F60A0 !important;
    color: #fff;
    width: 100%;
    margin: auto;
    text-align: center;
  }
  
  .card-guru .card-data {
    background-color: transparent;
    backdrop-filter: blur(20px);
    border: 2px solid #fff;
    color: #000;
  }
  
  /* Card Teknisi */
  .card-staf {
    background-color: transparent;
    backdrop-filter: blur(20px);
    border: 2px solid #fff;
    width: 100%;
    margin: auto;
    text-align: center;
  }
  
  .card-staf .card-data {
    background-color: #1F60A0 !important;
    color: #fff;
  }
  
  /* Gambar Ukuran 3x4 */
  .foto-3x4 {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    object-position: center;
  }
  
  /* Responsif Tambahan */
  @media (max-width: 768px) {
    h4 {
      text-align: center;
    }
  
    .card-body h5,
    .card-body h6,
    .card-body p,
    .card-body i {
      font-size: 0.9rem;
    }
  }
  </style>
  
