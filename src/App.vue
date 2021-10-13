<template>
  <div id="app">
    <Nav />
    <div class="auth-wrapper">
      <div class="auth-inner">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import axios from "axios";

export default {
  name: 'App',
  components: {
    Nav
  },

  async created() {
    if (localStorage.getItem('token') != null) {
      const response = await axios.get('profile');
      this.$store.dispatch('user', response.data.data);
      console.log(response)
    }
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Raleway:300,400,600);

body {
  margin: 0;
  font-size: .9rem;
  font-weight: 400;
  line-height: 1.6;
  color: #212529;
  text-align: left;
  background-color: #f5f8fa;
}

.navbar-laravel {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .04);
}

.navbar-brand, .nav-link, .my-form, .login-form {
  font-family: Raleway, sans-serif;
}

.my-form {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.my-form .row {
  margin-left: 0;
  margin-right: 0;
}

.login-form {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.login-form .row {
  margin-left: 0;
  margin-right: 0;
}
</style>
