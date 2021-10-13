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
                                IP List
                                <router-link class="btn btn-info btn-sm waves-effect waves-light px-4 d-inline-block float-right mr-3" to="/ip-create">Add IP</router-link>
                            </h3>

                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table table-bordered">
                                    <thead>
                                    <tr>
                                        <th>#SL</th>
                                        <th>IP Address</th>
                                        <th>Label</th>
                                        <th>Created Date</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody v-if="ipList !=''">
                                    <tr v-for="(value,index) in ipList" v-bind:key="index">
                                        <td>{{ ++index }}</td>
                                        <td>{{ value.ip_address }}</td>
                                        <td>{{ value.ip_label }}</td>
                                        <td>{{ value.created_at }}</td>
                                        <td>
                                            <router-link class="btn btn-success btn-sm" :to="{name:'ip-edit',params:{id:value.id} }">Edit IP</router-link>
                                        </td>
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
        name: 'IpList',

        data() {
            return {
                ipList: null
            }
        },
        methods: {

        },

        async created() {
            if (localStorage.getItem('token') != null) {
                const response = await axios.get('ip-list');
                this.ipList = response.data.data;
                console.log(response)
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