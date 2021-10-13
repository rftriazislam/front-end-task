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
                <h3 class="card-title">Catgory Add</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="createcategory">
                <div class="card-body">
                  <div class="form-group">
                    <label for="name">Category Title</label>

                    <input
                      type="text"
                      v-model="Categoryform.title"
                      name="title"
                      class="form-control"
                      id="title"
                      placeholder="Enter Category"
                    />
                    <has-error :form="Categoryform" field="name"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Description</label>
                    <textarea
                      v-model="Categoryform.description"
                      class="form-control"
                      name="description"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block"
                  >
                    Submit
                  </button>
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
  </div>
</template>
<script>
import axios from "axios";
// import { Form } from "vform";

export default {
  data() {
    return {
      Categoryform: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    async createcategory() {
      const headers = {
        Authorization: "Bearer " + localStorage.getItem("token"),
        Accept: "application/json",
      };
      const credentials = {
        title: this.Categoryform.title,
        description: this.Categoryform.description,
      };
      console.log(credentials);
      await axios
        .post("http://192.168.0.107:8000/api/v1/category", credentials, {
          headers,
        })
        .then((response) => {
          console.log(response.data);
          this.$toast.success({
            title: "Succss",
            message: "Category Upload Succesfully",
          });
         this.$router.push("/allcategory");
        });
     
    },
  },
};
</script>
<style></style>
