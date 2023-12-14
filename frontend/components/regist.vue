<template>
    <div>
      <form @submit.prevent="submitForm" class="registration-form">
        <div class="form-group">
          <label for="Nama">Nama:</label>
          <input v-model="formData.Nama" type="text" id="Nama" required />
        </div>
  
        <div class="form-group">
          <label for="Email">Email:</label>
          <input v-model="formData.Email" type="email" id="Email" required />
        </div>
  
        <div class="form-group">
          <label for="AsalSekolah">Asal Sekolah:</label>
          <input v-model="formData.AsalSekolah" type="text" id="AsalSekolah" required />
        </div>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          Nama: "",
          Email: "",
          AsalSekolah: "",
          Status: "waiting",
          TanggalPendaftaran: "", 
        },
      };
    },
    methods: {
      submitForm() {
        this.formData.TanggalPendaftaran = new Date().toISOString();
  
        fetch('http://localhost:888/admin/collections/registrations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.formData = {
              Nama: '',
              Email: '',
              AsalSekolah: '',
              Status: 'waiting',
              TanggalPendaftaran: '',
            };
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .registration-form {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    background-color: #ff7eb9;
    border-radius: 8px;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    color: #ff7eb9;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #ff5eab;
  }
  </style>
  