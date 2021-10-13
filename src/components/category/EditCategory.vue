<template>
    <div class="col-lg-6 offset-3">
      <section class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- left column -->
          <div class="col-md-12">
            <!-- jquery validation -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Edit Add</h3>
                <!-- <p>{{ editData.name }}</p> -->
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="UpdateCategory()">
                <div class="card-body">
                  <div class="form-group">
                    <label for="name">Category Title</label>
                    
                    <input type="text"
                     v-model="editData.title"
                      class="form-control"
                    
                     id="name" placeholder="Enter name"
                     
                    >
                  </div>
                
                    <div class="form-group">
                        <label>Description</label>
                        <input
                        v-model="editData.description"
                        class="form-control" rows="3"
                         >                
                    </div>           
               
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button type="submit" class="btn btn-primary btn-lg btn-block">Update</button>
                </div>
              </form>
            </div>
            <!-- /.card -->
            </div>
        
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    </div>
</template>
<script>
import axios from "axios"


export default {
   data() {
     return {
          editData: {
            title: '',
            description: '',
            category_id:this.$route.params.id
          },
     }
   },
   mounted(){
     
   },
    methods:{
       UpdateCategory(){
        // const id = this.$route.params.id;
        console.log(this.editData);
        axios.post(`http://192.168.0.107:8000/api/update-single-category`, this.editData)

        .then( response =>{
        //  this.categoryForm = response.data;
         console.log(response);  
          this.$toast.success({
              title:'Success!',
              message:'Category updated successfully.'
          });
        })
        
         this.$router.push('/allcategory');
      },
      getEditCategory(){
        let category_id = this.$route.params.id;
        axios.put(`http://192.168.0.107:8000/api/single-category/` + category_id)  
        .then( response =>{
          // this.categoryForm = response.data;
          console.log(response.data)
          this.editData = response.data.category
          console.log(' this.editData===', this.editData)
        })
      }
   },
   created() {
     this.getEditCategory();
   },
     
}
</script>
<style>

</style>