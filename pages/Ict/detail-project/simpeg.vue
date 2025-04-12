<template>
    <div class="container py-5">
      <div class="row align-items-center mb-5">
        <div class="col-md-6 text-center mb-4 mb-md-0">
          <img src="/assets/img/project1.png" class="img-fluid rounded shadow" alt="SIMPEG UMTAS" />
        </div>
        <div class="col-md-6">
          <h2 class="fw-bold">Sistem Informasi Kepegawaian</h2>
          <a href="https://simpeg.umtas.ac.id/" target="_blank" class="d-block mb-2 text-primary text-decoration-none">
            simpeg.umtas.ac.id/
          </a>
          <p class="lead">
            Sistem Informasi Kepegawaian adalah sistem yang digunakan untuk mengelola data dan administrasi kepegawaian.
          </p>
        </div>
      </div>
  
      <hr />
  
      <div class="detail">
        <h4 class="fw-bold mb-3">Detail</h4>
        <p class="text-justify">
          Lorem ipsum odor amet, consectetur adipiscing elit. Gravida habitasse tincidunt convallis duis ex phasellus erat faucibus.
          Per habitasse ex purus rutrum etiam eleifend diam augue. Litora hendrerit consectetur natoque sed mi arcu accumsan taciti...
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProjectSimpeg"
  };
  </script>
  
  <style scoped>
  .detail p {
    text-align: justify;
  }
  
  @media (max-width: 768px) {
    .detail p {
      font-size: 0.95rem;
    }
  }
  </style>
  