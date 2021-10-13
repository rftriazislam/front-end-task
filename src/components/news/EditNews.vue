<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <!-- left column -->
        <div class="col-md-6 offset-3">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">News Edit</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form @submit.prevent="createnews" enctype="multipart/form-data">
              <div class="card-body">
                <div class="form-group">
                  <label for="news">Title</label>
                  <input
                    type="text"
                    v-model="Newsform.title"
                    class="form-control"
                    id="news"
                    placeholder="News Name"
                  />
                </div>

                <div class="form-group">
                  <label for="newss">Category </label>
                  <select class="form-control" v-model="Newsform.category_id">
                    <!-- <option disabled>Selected </option> -->
                    <option
                      v-for="(category, key) in categories"
                      :key="key"
                      v-bind:value="category.id"
                      >{{ category.title }}</option
                    >
                  </select>
                </div>

                <div class="form-group">
                  <label for="image">File input</label>
                  <div class="input-group">
                    <div class="custom-file">
                      <input
                        type="file"
                        v-on:change="onImageChange"
                        class="form-control"
                        id="image"
                      />
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
                    class="form-control"
                    name="description"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                <button type="submit" class="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
          <!-- /.card -->
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </section>
</template>
<script>
import axios from 'axios'
import {Form} from "vform"
import config from "../../config";


export default {
  data() {
        return {
            Newsform: new Form({
            title: '',
        
            category_id:'',
            description:'',
        }),       image:'',  
                  news_id:'',
                  user_id:'',     
                categories:{},
                editData:{},
        }
    },

  methods: {
    onImageChange(e) {
      console.log(e.target.files[0]);
      this.image = e.target.files[0];
    },
 async createnews(){
          const headers = {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                  Accept: "application/json",
                };
              console.log(headers);
              const credentials = {
                    title: this.Newsform.title,
                    description: this.Newsform.description,
                    
                    user_id: 1,
                    category_id:this.$route.params.id,
                    news_id:this.$route.params.id
                  };
          console.log(credentials);
        await axios.post("http://192.168.0.107:8000/api/v1/update-single-news", credentials, {
          headers,
        })
        .then((response) => {
          console.log(response.data);
          this.$toast.success({
            title: "Succss",
            message: "news Upload Succesfully",
          });
      this.$router.push("/allnews");

          this.Categoryform.reset();
        });

              },
          categoryLoad(){

             config.getData("categories").then((response) => {
              this.categories = response.categories;
              console.log("categories", this.categories);
            });
            
        }, async getEditNews() {
      const headerds = {
        Authorization: "Bearer " + localStorage.getItem("token"),
        Accept: "application/json",
      };
      let news_id = this.$route.params.id;

      await axios
        .put(`http://192.168.0.107:8000/api/v1/single-news/` + news_id, {
          headerds,
        })
        .then((response) => {
          // this.categoryForm = response.data;
          console.log(response.data);
          this.Newsform = response.data.news;
          console.log(" this.editData===", this.editData);
        });
    },


  },
   created() {
    this.getEditNews();
  },
  mounted() {
    const token = localStorage.getItem("token");
    if (token == null) {
      this.$router.push("login");
    }
    this.categoryLoad();
  },
};
</script>
<style></style>
