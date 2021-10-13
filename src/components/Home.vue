<template>
  <main class="py-4">
    <div class="container" v-if="!user">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
              <h3 v-if="!user">You are not logged in</h3>
              <h5 v-if="!user">For login click here <router-link class="text-primary" to="/login">Login</router-link></h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container" v-if="user">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="card">
            <div class="card-header">Dashboard</div>
            <div class="card-body">
              <h3 v-if="user">Hi <span class="text-success">{{ user.name }} .</span></h3>
              <h2 v-if="user">Welcome to IP Management System</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Home',

  data() {
    return {

    }
  },
  methods: {

  },

  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>
 /*----custom css-----*/
</style>