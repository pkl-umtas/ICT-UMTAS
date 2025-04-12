<template>
    <div class="bg">
        <div class="container">
            <h4 class="mt-5">Project ICT</h4>
            <div class="card rounded-2 mt-5">
                <div class="card-body p-2 mt-1">
                    <div class="row p-3">
                        <div class="col-md-4 text-center">
                            <img src="~/assets/img/project1.png" alt="logo">
                        </div>
                        <div class="col-md-8">
                            <h5 class="fw-semibold">SIMPEG UMTAS</h5>
                            <p class="mt-4">Sistem Informasi Kepegawaian Universitas Muhammadiyah Tasikmalaya</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card rounded-2 mt-4">
                <div class="card-body p-2 mt-1">
                    <div class="row p-3">
                        <div class="col-md-4 text-center">
                            <img src="~/assets/img/project2.png" alt="logo">
                        </div>
                        <div class="col-md-8">
                            <h5 class="fw-semibold">SIKEMAS UMTAS</h5>
                            <p class="mt-4">BSistem Informasi kemahasiswaan Universitas Muhammadiyah Tasikmalaya</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card rounded-2 mt-4">
                <div class="card-body p-2 mt-1">
                    <div class="row p-3">
                        <div class="col-md-4 text-center">
                            <img src="~/assets/img/project3.png" alt="logo">
                        </div>
                        <div class="col-md-8">
                            <h5 class="fw-semibold">SIMUTU UMTAS</h5>
                            <p class="mt-4">Sistem Informasi Penjaminan Mutu Universitas Muhammadiyah Tasikmalaya.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h4,
h5,
p {
    font-family: "Poppins", serif;
}

h4 {
    margin-left: 100px;
}

.card {
    background-color: transparent;
    backdrop-filter: blur(5px);
    border: 2px solid #ffff;
    width: 85%;
    margin: auto;
}

img {
    width: 300px;
}

p {
    font-size: 15px;
}

.bg {
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
}

@media only screen and (min-width: 600px) and (max-width: 890px) {
    h4 {
        margin-left: 30px;
    }
    
}

@media only screen and (max-width: 600px) {
    p{
        font-size: smaller;
    }

    h5 {
        font-size: small;
        margin-top: 20px;
    }
    
    h4 {
        margin-left: 35px;
    }

    img {
        width: 30%;
    }
}
</style>