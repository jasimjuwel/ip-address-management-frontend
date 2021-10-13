<template>
  <main class="py-4">
    <div class="container" v-if="!user">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="card">
            <div class="card-header">Dashboard</div>
            <div class="card-body">
              <h3 v-if="!user">You are not logged in</h3>
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
              <h3 v-if="!user">You are logged in</h3>
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
.imageSize {
  width: 60px;
  height: 60px;
}
</style>