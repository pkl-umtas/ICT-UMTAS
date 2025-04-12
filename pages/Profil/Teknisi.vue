<template>
    <div class="container">
        <h4 class="mt-5">Kepala IT & Teknisi</h4>
            <div class="row mt-5 d-flex justify-content-center m-3">
                <div class="col-6 col-sm-3">
                    <div class="card card-total rounded-4">
                        <div class="card-body">
                            <i class="bi bi-person-workspace text-light fs-1"></i>
                            <h5 class="fw-semibold">2 Orang</h5>
                            <p>Kepala IT</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-sm-3">
                    <div class="card card-total rounded-4">
                        <div class="card-body">
                            <i class="bi bi-person-badge text-light fs-1"></i>                        
                            <h5 class="fw-semibold">3 Orang</h5>
                            <p>Teknisi</p>
                        </div>
                    </div>
                </div>
            </div>

            <!--Daftar Guru-->
            <div class="card bg-light card-guru mt-5 rounded-4 shadow">
                <h5 class="text-center mt-5">Kepala Teknisi</h5>
                <div class="row mt-4 justify-content-center mb-5 m-4">
                    <div class="col-md-4">
                        <div class="card card-data bg-light rounded-4 shadow">
                            <div class="card-body p-0 mb-3">
                                <img src="~/assets/img/user.jpg" alt="img" class="card-img-top p-2 rounded-4">
                                <h6 class="fw-semibold mt-3">kepala teknisi.</h6>
                                <!-- <p>KK - Pengembangan Gim</p> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-data bg-light rounded-4 shadow">
                            <div class="card-body p-0 mb-3">
                                <img src="~/assets/img/user.jpg" alt="img" class="card-img-top p-2 rounded-4">
                                <h6 class="fw-semibold mt-3">kepala teknisi</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--Daftar Staf TU-->
            <div class="card bg-light card-staf mt-5 rounded-4 shadow">
                <h5 class="text-center mt-5">Teknisi</h5>
                <div class="row mt-4 justify-content-center mb-5 m-4">
                    <div class="col-md-4">
                        <div class="card card-data bg-light rounded-4 shadow">
                            <div class="card-body p-0 mb-3">
                                <img src="~/assets/img/user.jpg" alt="img" class="card-img-top p-2 rounded-4">
                                <h6 class="fw-semibold mt-3">teknisi</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-data bg-light rounded-4 shadow">
                            <div class="card-body p-0 mb-3">
                                <img src="~/assets/img/user.jpg" alt="img" class="card-img-top p-2 rounded-4">
                                <h6 class="fw-semibold mt-3">teknisi</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card card-data bg-light rounded-4 shadow">
                            <div class="card-body p-0 mb-3">
                                <img src="~/assets/img/user.jpg" alt="img" class="card-img-top p-2 rounded-4">
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
    font-family: "Poppins", serif;
}

h4 {
    margin-left: 95px;
}


.card-total {
    background-color: #1F60A0;
    text-align: center;
}

.card-total h5 {
    margin-top: 10px;
    color: #fff;
}

.card-total p {
    color: #fff;
    font-size: 15px;
}

.card-guru {
    background-color: #1F60A0 !important;
    color: #ffff;
    width: 85%;
    margin: auto;
    text-align: center;
}

.card-staf {
    background-color: transparent;
    backdrop-filter: blur(20px);
    border: 2px solid #ffff;
    width: 85%;
    margin: auto;
    text-align: center;
}

.card-staf .card-data {
    background-color: #1F60A0 !important;
    color: #ffff;
}

.card-guru .card-data {
    background-color: transparent;
    backdrop-filter: blur(20px);
    border: 2px solid #ffff;
}

.card-guru h6, .card-guru p {
    color: #000;
}

.card-staf h6, .card-staf p {
    color: #fff;
}

.card-img-top {
    object-fit: cover; /* Menyesuaikan gambar dengan ukuran card */
    object-position: center; /* Fokus gambar di tengah */
}

img {
    width: 100%;
}

/* @media only screen and (min-width: 600px) and (max-width: 890px) {
    h4 {
        margin-left: 30px;
    }
    .card-body h5, .card-body p, .card-body i {
        font-size: small;
    }

    .card-body h6 {
        font-size: small !important;
    }
}


@media only screen and (max-width: 600px) {
    h4 {
        margin-left: 35px;
    }

    .card-body h5, .card-body p, .card-body i {
        font-size: small;
    }

    .card {
        margin-top: 10px;
    } 
} */

</style>