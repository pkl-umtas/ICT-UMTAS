<template>
    <section class="py-5 bg-light">
      <div class="container text-center">
        <h2 class="mb-4">Project ICT</h2>
        <div class="row justify-content-center">
          <div class="col-md-4 mb-4" v-for="project in projects" :key="project.title">
            <div class="card h-100 shadow">
              <img :src="project.image" class="card-img-top img-fluid" :alt="project.title" />
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
      </div>
    </section>
  </template>
  
  <script>
  import project1 from '@/assets/img/project1.png'
  import project2 from '@/assets/img/project2.png'
  import project3 from '@/assets/img/project3.png'
  
  export default {
    name: 'ProjectICTPage',
    data() {
      return {
        projects: [
          {
            title: 'SIMPEG UMTAS',
            image: project1,
            link: 'https://simpeg.umtas.ac.id/',
            desc: 'Sistem Informasi Kepegawaian Universitas Muhammadiyah Tasikmalaya.',
            detailLink: '/Ict/detail-project/simpeg'
          },
          {
            title: 'SIKEMAS UMTAS',
            image: project2,
            link: 'https://sikemas.umtas.ac.id/',
            desc: 'Sistem Informasi kemahasiswaan Universitas Muhammadiyah Tasikmalaya',
            detailLink: '/Ict/detail-project/sikemas'
          },
          {
            title: 'SIMUTU UMTAS',
            image: project3,
            link: 'https://simutu.umtas.ac.id/',
            desc: 'Sistem Informasi Penjaminan Mutu Universitas Muhammadiyah Tasikmalaya',
            detailLink: '/Ict/detail-project/simutu'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    background-color: transparent;
    backdrop-filter: blur(5px);
    border: 2px solid #fff;
    width: 85%;
    margin: auto;
  }
  
  .card-img-top {
    width: 100%;
    height: auto;
    max-height: 250px;
    object-fit: cover;
  }
  
  .card-title {
    font-family: "Poppins", serif;
    font-weight: bold;
  }
  
  .card-text {
    font-size: 15px;
    font-family: "Poppins", serif;
  }
  
  @media (max-width: 768px) {
    .card {
      width: 95%;
    }
  
    .card-title {
      font-size: 1.1rem;
    }
  
    .card-text {
      font-size: 0.9rem;
    }
  }
  </style>
