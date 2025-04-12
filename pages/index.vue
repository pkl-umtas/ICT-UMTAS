<template>
    <div>
      <!-- Gambar Utama -->
      <div class="container-fluid p-0 gambar">
        <img src="/assets/img/umtas.png" class="img-fluid w-100" alt="Gambar Utama" />
      </div>
  
      <!-- Tentang Kami -->
      <section class="tentang-kami d-flex align-items-center text-center text-white">
        <div class="container">
          <h1 class="fw-bold mb-3 display-5">Tentang Kami</h1>
          <p class="lead px-2 px-md-5">
            ICT UMTAS adalah Unit Pelaksana Teknis Sistem Informasi Manajemen (UPT SIM) di Universitas Muhammadiyah Tasikmalaya (UMTAS).
            UPT SIM merupakan unit yang memberikan layanan infrastruktur teknologi informasi, layanan data dan sistem informasi serta layanan komputasi
            sebagai penunjang berjalannya proses akademik di lingkungan Universitas Muhammadiyah Tasikmalaya.
          </p>
          <NuxtLink to="/Profil/Sejarah" class="btn btn-primary mt-3 px-4 py-2">Selengkapnya</NuxtLink>
        </div>
      </section>
  
      <!-- Project ICT -->
      <section class="py-5 bg-light">
        <div class="container text-center">
          <h2 class="mb-4">Project ICT</h2>
          <div class="row justify-content-center">
            <div class="col-md-4 mb-4" v-for="project in projects" :key="project.title">
              <div class="card h-100 shadow">
                <img :src="project.image" class="card-img-top" :alt="project.title" />
                <div class="card-body text-start">
                  <h5 class="card-title">{{ project.title }}</h5>
                  <a :href="project.link" target="_blank" class="d-block mb-2 text-primary text-decoration-none">
                    <i class="bi bi-box-arrow-up-right me-1"></i>{{ project.link }}
                  </a>
                  <p class="card-text">{{ project.desc }}</p>
                  <NuxtLink :to="project.detailLink" class="btn btn-primary">Detail</NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <NuxtLink to="/project-lainnya" class="btn btn-primary mt-4">Lihat project lainnya</NuxtLink>
        </div>
      </section>
    </div>
  </template>
  
  <script>
import project1 from '@/assets/img/project1.png'
import project2 from '@/assets/img/project2.png'
import project3 from '@/assets/img/project3.png'

export default {
  data() {
    return {
      projects: [
        {
          title: 'SIMPEG UMTAS',
          image: project1,
          link: 'https://simpeg.umtas.ac.id/',
          desc: 'Sistem Informasi Kepegawaian Universitas Muhammadiyah Tasikmalaya.',
          detailLink: '/project/lazismu'
        },
        {
          title: 'SIKEMAS UMTAS',
          image: project2,
          link: 'https://sikemas.umtas.ac.id/',
          desc: 'Sistem Informasi kemahasiswaan Universitas Muhammadiyah Tasikmalaya',
          detailLink: '/project/lms'
        },
        {
          title: 'SIMUTU UMTAS',
          image: project3,
          link: 'https://simutu.umtas.ac.id/',
          desc: 'Sistem Informasi Penjaminan Mutu Universitas Muhammadiyah Tasikmalaya',
          detailLink: '/project/pukau'
        }
      ]
    }
  }
}
</script>

  
  <style scoped>
  .gambar img {
    object-fit: cover;
    height: auto;
    max-height: 400px;
  }
  
  .tentang-kami {
    background-image: url('/assets/img/sarver.webp'); /* ganti sesuai path */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    padding: 60px 20px;
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  
  .tentang-kami::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
  
  .tentang-kami .container {
    z-index: 2;
    position: relative;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .tentang-kami {
      padding: 40px 10px;
    }
    .tentang-kami h1 {
      font-size: 2rem;
    }
    .tentang-kami p {
      font-size: 1rem;
    }
    .tentang-kami button {
      font-size: 0.9rem;
    }
  }
  </style>
  
