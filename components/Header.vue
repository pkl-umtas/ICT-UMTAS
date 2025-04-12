<template>
    <div class="container-fluid navbar navbar-expand-lg bg-light sticky-top ">
        <div class="container">
            <img class="image" src="/assets/img/Logo-ICT-Laboratorium.jpg" alt="logo">
            <h5 class="fw-bold">ICT UMTAS</h5>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <nuxt-link to="/" class="nav-link active" aria-current="page" href="#">HOME</nuxt-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            PROFIL
                        </a>
                        <ul class="dropdown-menu">
                            <!-- <li><nuxt-link to="/Profil/Identitas" class="dropdown-item">Identitas Sekolah</nuxt-link></li> -->
                            <li><nuxt-link to="/Profil/Sejarah" class="dropdown-item">Tentang Kami</nuxt-link></li>
                            <!-- <li><nuxt-link to="/Profil/Kepsek" class="dropdown-item">Kepala Sekolah</nuxt-link></li> -->
                            <li><nuxt-link to="/Profil/Teknisi" class="dropdown-item">Kepala IT & Teknisi</nuxt-link></li>
                        </ul>
                    </li>
                    <li class="nav-item ">
                        <nuxt-link to="/Ict" class="nav-link active" aria-current="page" href="#">
                                PROJECT ICT
                        </nuxt-link>
                    </li>

                    <li class="nav-item">
                            <nuxt-link to="/Galery" class="nav-link active" aria-current="page" href="#">GALERY</nuxt-link>
                            
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="/Artikel" class="nav-link active" aria-current="page" href="#">ARTICLE</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@500&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.container{
    max-width: 100%;
    margin: 0;  
}

h5,ul,a .nav-item{
    font-family: "Poppins",serif;
}
.image{
    width: 50px;
    margin-left: 5%;
    padding-bottom: 1%;
}

.nav-link{
    color: black;
}

* .nav-link{
    color: black;
}

.nav-item {
    margin-right: 30px;
    font-weight: 500;
}

.navbar-nav {
    margin-right: 7%;
}

h5 {
    margin-left: 20px;
}

.judul{
    margin-right: 50%;
    font-size: 20px;
}

p{
    font-size: 10px;
} 

</style>