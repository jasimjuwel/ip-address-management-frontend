<template>
  <nav class="navbar navbar-expand-lg navbar-light navbar-laravel">
    <div class="container">
      <router-link class="navbar-brand" to="/">IP Management System</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto" v-if="!user">
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto" v-if="user">
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)">Hi {{ user.name }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)" @click="handleClick">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Nav',
  methods: {
    handleClick() {
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      this.$router.push('/');
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>