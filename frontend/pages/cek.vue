<!-- pages/CheckStatus.vue -->
<template>
    <div>
      <h1>Check Registration Status</h1>
      <form @submit.prevent="checkStatus" class="check-status-form">
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" required />
        <button type="submit">Check Status</button>
      </form>
  
      <div v-if="registrationStatus" class="registration-details">
        <h2>Registration Status:</h2>
        <p>Nama: {{ registrationStatus.Nama }}</p>
        <p>Email: {{ registrationStatus.Email }}</p>
        <p>Asal Sekolah: {{ registrationStatus.AsalSekolah }}</p>
        <p>Status: {{ registrationStatus.Status }}</p>
        <p>Tanggal Pendaftaran: {{ formatDate(registrationStatus.TanggalPendaftaran) }}</p>
      </div>
  
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        registrationStatus: null,
        errorMessage: null,
      };
    },
    methods: {
      checkStatus() {
        this.registrationStatus = null;
        this.errorMessage = null;
  
        fetch(`http://localhost:8888/admin/collections/registrations?query={"Email":"${this.email}"}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            if (data.docs && data.docs.length > 0) {
              const userRegistration = data.docs.find(registration => registration.Email === this.email);
              if (userRegistration) {
                this.registrationStatus = userRegistration;
              } else {
                this.errorMessage = 'No registration found for the provided email.';
              }
            } else {
              this.errorMessage = 'No registrations found.';
            }
          })
         
  