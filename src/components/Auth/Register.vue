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
      <form action="../../index3.html" @submit.prevent="handleSubmit(registerForm())" @reset.prevent="reset">  
      <ValidationProvider name="name" rules="required|string" v-slot="{ errors }">
       <div class="input-group mb-3">  
          <input type="name" 
           v-model="registerform.name"
           class="form-control" 
           placeholder="name">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
           <span style="color:red">{{ errors[0] }}</span>
        </div>
         </ValidationProvider>
        <ValidationProvider name="email" rules="required" v-slot="{ errors }">
        <div class="input-group mb-3">
          <input type="email"
          v-model="registerform.email"
           class="form-control" 
           placeholder="Email">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
          <p style="color:red"><span>{{ errors[0] }}</span></p>  
        </div>
         </ValidationProvider>
         <ValidationProvider name="password" rules="required|password" v-slot="{ errors }">
        <div class="input-group mb-3"> 
          <input type="password"
          v-model='registerform.password'
           class="form-control"
            placeholder="Password">

          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
            <p style="color:red"><span>{{ errors[0] }}</span></p>     
        </div>
        </ValidationProvider>
        <div class="row">
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">Register</button>
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
import Axios from 'axios';
// import Axios from 'axios';
// import {Form} from 'vform'
// import config from '../../config'
 export default {
    data(){
      return {
        registerform :{
          name:'',
          email:'',
          password:'',
        },
        error:'',   
      }
    },
    methods :{
         async registerForm(){
         await Axios.post('http://192.168.0.107:8000/api/signup')
            // await config.postData('/register')
             .then((response)=>{
                console.log(response.data);
                this.$toast.success({ title:'Succss', message:'Register Succesfully'}) 
             })
            this.registerform.reset();
            this.$router.push('/signin');
      }

    },
   
 }
</script>