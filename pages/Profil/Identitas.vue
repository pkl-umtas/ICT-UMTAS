<template>
    <div class="container">
        <h4 class="mt-5">Identitas</h4>
        <div class="text-center">
            <img class="image mt-5" src="/assets/img/logoict-remove.png" alt="" width="15%">
        </div>
    </div>
    <div class="card  shadow small mt-5 mb-5">
        <table class="table table-striped">
            <!-- <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead> -->
            <tbody>
                <tr>
                    <td>NPSN</td>
                    <td>{{ data.npsn }}</td>
                </tr>
                <tr>
                    <td>Tanggal SK Pendirian</td>
                    <td>{{ data.sk }}</td>
                </tr>
                <tr>
                    <td>Nama Sekolah</td>
                    <td>{{ data.name }}</td>
                </tr>
                <tr>
                    <td>Alamat</td>
                    <td>{{ data.address }}</td>
                </tr>
                <tr>
                    <td>Kelurahan</td>
                    <td>{{ data.kelurahan }}</td>
                </tr>
                <tr>
                    <td>Kecamatan</td>
                    <td>{{ data.kecamatan }}</td>
                </tr>
                <tr>
                    <td>Kota</td>
                    <td>{{ data.kota }}</td>
                </tr>
                <tr>
                    <td>Kode POS</td>
                    <td>{{ data.kp }}</td> 
                </tr>
                <tr>
                    <td>Provinsi</td>
                    <td>{{ data.provinsi }}</td>
                </tr>
                <tr>
                    <td>Telepon/Fax</td>
                    <td>{{ data.tp }}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{{ data.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <hr>
  </template>
  
  <style scoped>
  h4 {
    font-family: "Poppins", serif;
    margin-right: auto;
  }
  
  .card {
    width: 70%;
    margin: auto;
  }
  </style>
  
  <script setup>
  const data = {
      name: "SMKN 4 Tasikmalaya",
      npsn: "20276063",
      sk:"06 Februari 2012",
      kelurahan:"Sukamenak",
      kecamatan:"Purbaratu",
      kota:"Tasikmalaya, Jawa Barat",
      tp: "401327810004",
      kp:"46196",
      provinsi:"Jawa Barat",
      address: "Jl Depok RT 02 RW 05, ",
      email: "info@smkn4-tsm.sch.id",
      establishmentSKNumber: "420/9/SK-BPPT/2012",
      establishmentDate: "06 Februari 2012"
  };
  </script>