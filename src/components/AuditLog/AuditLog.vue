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
            <div class="card-header">
              <h3 class="header-title mt-0 mb-4">
                Audit List
              </h3>

            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table table-bordered">
                  <thead>
                  <tr>
                    <th>#SL</th>
                    <th>Log Time</th>
                    <th>Request Path</th>
                    <th>Request User ID</th>
                    <th>Post Json</th>
                    <th>Final Response</th>
                    <th>Request IP</th>
                  </tr>
                  </thead>
                  <tbody v-if="auditList !=''">
                  <tr v-for="(value,index) in auditList" v-bind:key="index">
                    <td>{{ ++index }}</td>
                    <td>{{ value.log_time }}</td>
                    <td>{{ value.request_path }}</td>
                    <td>{{ value.request_id }}</td>
                    <td>{{ value.post_json }}</td>
                    <td>{{ value.final_response }}</td>
                    <td>{{ value.request_ip }}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {mapGetters} from 'vuex'
import axios from "axios";

export default {
  name: 'AuditList',

  data() {
    return {
      auditList: null
    }
  },
  methods: {

  },

  async created() {
    if (localStorage.getItem('token') != null) {
      const response = await axios.get('audit-log-list');
      this.auditList = response.data.data;
    }
  },

  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>
/*------custom css-------*/
</style>