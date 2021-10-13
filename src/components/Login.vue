<template>
  <main class="login-form">
    <div class="cotainer">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
              <error v-if="error" :error="error" />
              <form @submit.prevent="handleSubmit">
                <div class="form-group row">
                  <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                  <div class="col-md-6">
                    <input type="text" id="email" class="form-control" v-model="email">
                    <div class="requiredField" v-if="(errors.email)">
                      <span class="text-danger">{{ (errors.email) ? errors.email[0] :'' }}</span>
                    </div>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                  <div class="col-md-6">
                    <input type="password" id="password" class="form-control" v-model="password">
                    <div class="requiredField" v-if="(errors.password)">
                      <span class="text-danger">{{ (errors.password) ? errors.password[0] :'' }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import axios from 'axios'
import Error from "@/components/Error";

export default {
  name: 'Login',
  components: {Error},

  data() {
    return {
      email: '',
      password: '',
      error: '',
      errors: [],
    }
  },
  methods: {
    async handleSubmit() {
      try {
        await axios.post('login', {
          email: this.email,
          password: this.password,

        }).then(response => {
          if (response.data.code === 200) {
            localStorage.setItem('token', response.data.data.token);
            this.$store.dispatch('user', response.data.data.user)
            this.errors = ''
            this.$router.push('/');
          } else {
            this.errors = response.data.errors
          }
        })
      } catch (e) {
        this.email = ""
        this.password = ""
        this.error = 'Invalid username/password !';
      }
    }
  }
}

</script>