<template>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- left column -->
          <div class="col-md-6 offset-3">
         
            <div class="card card-primary">
               <div class="card-header">
                    <h3 class="card-title">News Add</h3>
                </div>
              <!-- /.card-header -->
              <!-- form start -->
            <form  @submit.prevent="createnews"  enctype="multipart/form-data">
                <div class="card-body">
                    <div class="form-group">
                     <label for="product">Title</label>
                    <input type="text" 
                        v-model="Newsform.title"
                        class="form-control" id="product"
                        placeholder="Product Name">
                    </div>

                   <div class="form-group">
                     <label for="product">Category </label>   
                    <select  class="form-control" v-model="Newsform.category_id">
                      <option disabled >Selected </option>
                      <option v-for="(category, key) in categories" :key="key"  v-bind:value="category.id" >{{category.title}}</option>
                    </select>
                  </div>
  

                    <div class="form-group">
                    <label for="image">File input</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input type="file"
                            v-on:change="onImageChange"
                            class="form-control"  
                            id="image" >  
                       </div>
                      <div class="input-group-append">
                        <span class="input-group-text" id="">Upload</span>
                      </div>
                    </div>
                       </div>   
                       <div class="form-group">
                        <label>Description</label>
                        <textarea
                        v-model="Newsform.description"
                        class="form-control" name="description" rows="3"></textarea>
                       
                        </div> 
             
               
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            <!-- /.card -->

          </div>
     
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>

</template>
<script>
import axios from 'axios'
import {Form} from "vform"

export default {
    data() {
        return {
            Newsform: new Form({
            title: '',
        
            category_id:'',
            description:'',
        }),      image:'',  
        user_id:'',     
            categories:{},
        }
    },
     
    methods:{
        onImageChange(e){
            console.log(e.target.files[0]);
            this.image = e.target.files[0];
        },
         createnews(){
           console.log(this.Newsform.category_id),
                this.Newsform.post('http://192.168.0.107:8000/api/news')
                .then(({ data }) =>{
                    console.log(data)
                    this.Newsform.title='';
                    this.Newsform.description='';
                    this.Newsform.category_id='';
                    this.image=''
                    this.user_id=1;
                    this.$toast.success({
                      title:'Succss',
                      message:'Category Upload Succesfully'
                    })
                    
                    this.Newsfform.reset()
                 })
              },
          categoryLoad(){
            axios.get(`http://192.168.0.107:8000/api/categories`)
                .then(response => {
                console.log(response)
                this.categories = response.data.categories;
            });
        }



    },   
    mounted() {
       this.categoryLoad();
   
    }, 
}
</script>
<style>
</style>