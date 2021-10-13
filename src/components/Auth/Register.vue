<template>
  <div class="login-box col-lg-6 offset-2">
    <div class="login-logo">
      <a href="../../index2.html"><b>Admin</b>LTE</a>
    </div>
    <!-- /.login-logo -->
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Sign in to start your session</p>
        <ValidationObserver v-slot="{ handleSubmit, reset }">
          <form
            action="../../index3.html"
            @submit.prevent="handleSubmit(registerForm())"
            @reset.prevent="reset"
          >
            <ValidationProvider
              name="name"
              rules="required|string"
              v-slot="{ errors }"
            >
              <div class="input-group mb-3">
                <input
                  type="name"
                  v-model="registerformm.name"
                  class="form-control"
                  placeholder="name"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
                <span style="color:red">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <ValidationProvider
              name="email"
              rules="required"
              v-slot="{ errors }"
            >
              <div class="input-group mb-3">
                <input
                  type="email"
                  v-model="registerformm.email"
                  class="form-control"
                  placeholder="Email"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
                <p style="color:red">
                  <span>{{ errors[0] }}</span>
                </p>
              </div>
            </ValidationProvider>
            <ValidationProvider
              name="password"
              rules="required|password"
              v-slot="{ errors }"
            >
              <div class="input-group mb-3">
                <input
                  type="password"
                  v-model="registerformm.password"
                  class="form-control"
                  placeholder="Password"
                />

                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
                <p style="color:red">
                  <span>{{ errors[0] }}</span>
                </p>
              </div>
            </ValidationProvider>
            <div class="row">
              <!-- /.col -->
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">
                  Register
                </button>
              </div>
              <!-- /.col -->
            </div>
          </form>
        </ValidationObserver>
        <!-- /.social-auth-links -->
      </div>
      <!-- /.login-card-body -->
    </div>
  </div>
</template>
<script>
import Axios from "axios";
// import Axios from 'axios';
// import {Form} from 'vform'
// import config from '../../config'
export default {
  data() {
    return {
      registerformm: {
        name: "",
        email: "",
        password: "",
      },
      error: "",
    };
  },
  methods: {
    async registerForm() {
      const credentials = {
        name: this.registerformm.name,
        password: this.registerformm.password,
        email: this.registerformm.email,
      };
      console.log(credentials);
      try {
        await Axios.post("http://192.168.0.107:8000/api/signup", credentials, {
          Accept: "application/json",
        }).then((response) => {
          // console.log(response.data.token);
          this.$toast.success({
            title: "Succss",
            message: "Register Succesfully",
          });
          localStorage.setItem("token", response.data.token);
        });

        this.$router.push("/");
      } catch (e) {
        this.error = true;
        this.registerformm.email = "";
      }
    },
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (token != null) {
      this.$router.push("/");
    }
  },
};
</script>
