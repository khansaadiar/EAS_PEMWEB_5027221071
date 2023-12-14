
<template>
    <div>
      <h1>Home Page</h1>
      <button @click="goToRegistration" class="navigation-button">Go to Registration</button>
      <button @click="goToCheck" class="navigation-button">Go to Check</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToRegistration() {
        this.$router.push('/registration'); 
      },
      goToCheck() {
        this.$router.push('/cek'); 
      },
    },
  };
  </script>
  
  <style scoped>
  .navigation-button {
    padding: 10px;
    margin: 10px;
    background-color: #ff7eb9;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .navigation-button:hover {
    background-color: #ff5eab;
  }
  </style>
  