<template>
    <div class="container">
        <h4 class="mt-5">Galery</h4>

        <div class="row mt-5 justify-content-center">
            <div class="col-5">
                <div class="card rounded-2 shadow">
                    <img src="~/assets/img/aset2.jpg" class="card-img-top rounded-2" alt="img-artikel">
                    <div class="card-body p-2 mt-1">
                        <h6 class="text-center">Foto 1</h6>
                    </div>
                </div>
            </div>
            <div class="col-5">
                <div class="card rounded-2 shadow">
                    <img src="~/assets/img/aset4.jpg" class="card-img-top rounded-2" alt="img-artikel">
                    <div class="card-body p-2 mt-1">
                        <h6 class="text-center">Foto 2</h6>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5 justify-content-center">
            <div class="col-5">
                <div class="card rounded-2 shadow">
                    <img src="~/assets/img/aset.jpg" class="card-img-top rounded-2" alt="img-artikel">
                    <div class="card-body p-2 mt-1">
                        <h6 class="text-center">Foto 3</h6>
                    </div>
                </div>
            </div>
            <div class="col-5">
                <div class="card rounded-2 shadow">
                    <img src="~/assets/img/aset3.jpg" class="card-img-top rounded-2" alt="img-artikel">
                    <div class="card-body p-2 mt-1">
                        <h6 class="text-center">Foto 4</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h4,
h6 {
    font-family: "Poppins", serif;
}

h4 {
    margin-left: 95px;
}

.card {
    background-color: transparent;
    backdrop-filter: blur(20px);
    border: 2px solid #ffff;
}
</style>
