<template>
  <main class="login-form">
    <div class="cotainer">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h3>IP Edit</h3>
            </div>
            <div class="card-body">
              <error v-if="error" :error="error"/>
              <form @submit.prevent="handleSubmit()">
                <div class="form-group row">
                  <label for="ip_address" class="col-md-4 col-form-label text-md-right">IP Address</label>
                  <div class="col-md-6">
                    <input type="text" id="ip_address" class="form-control" v-model="form.ip_address" readonly>
                    <div class="requiredField" v-if="(errors.ip_address)">
                      <span class="text-danger">{{ (errors.ip_address) ? errors.ip_address[0] : '' }}</span>
                    </div>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="ip_label" class="col-md-4 col-form-label text-md-right">Label</label>
                  <div class="col-md-6">
                    <input type="text" id="ip_label" class="form-control" v-model="form.ip_label">
                    <div class="requiredField" v-if="(errors.ip_label)">
                      <span class="text-danger">{{ (errors.ip_label) ? errors.ip_label[0] : '' }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary">Update</button>
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

export default {
  name: 'IpEdit',
  component: {
    Error
  },

  data() {
    return {
      form: {
        ip_address: '',
        ip_label: '',
      },
      error: '',
      errors: [],
    }
  },
  methods: {
    async handleSubmit() {
      let formData = new FormData();
      formData.append('ip_address', this.form.ip_address);
      formData.append('ip_label', this.form.ip_label);
      formData.append('_method', 'PUT')
      try {
        await axios.post(`ip-update/${this.$route.params.id}`, formData)
            .then(response => {
              if (response.data.code === 200) {
                this.errors = ''
                this.$router.push('/ip-list');
              } else {
                this.errors = response.data.errors
              }
            })
      } catch (e) {
        this.error = 'Something error found !';
      }
    }
  },

  async created() {
    const response = await axios.get(`ip-edit/${this.$route.params.id}`);
    this.form = response.data.data;
  },
}

</script>