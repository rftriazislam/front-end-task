<template>
<div class="login-box col-lg-6 offset-3">
  <div class="login-logo">
    <a href="../../index2.html"><b>User</b>LOGIN</a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <p class="login-box-msg">Sign in to start your session</p>
      <form  @submit.prevent="createLogin()">
         <div class="input-group mb-3">
          <!-- <input type="name"
           v-model="form.name"
           class="form-control" 
           placeholder="name"> -->
          <!-- <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div> -->
        </div>
        <div class="input-group mb-3">
          <input type="email"
           v-model="form.email"
           class="form-control" 
           placeholder="Email">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password"
           v-model="form.password" 
          class="form-control"
           placeholder="Password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
      <!-- /.social-auth-links -->

    </div>
    <!-- /.login-card-body -->
  </div>
</div>
</template>
<script>
import config from '../../config'
//import {Form} from 'vform'
 export default {
     data(){
       return {
           form : {
               email:'',
               password:'',
              //  name: ''
           },
           error:'',
       }
     },
     methods: {
          async createLogin(){ 
            console.log(this.form);
            await config.postData('/signin', this.form)
              .then((response)=>{
                localStorage.setItem('token', response.token)
              })
              
              this.$router.push('/'); 
           }
          
     },
      mounted() {
            const token = localStorage.getItem('token');
            if(token != null){
                this.$router.push('/')
            }
        },

 }
</script>