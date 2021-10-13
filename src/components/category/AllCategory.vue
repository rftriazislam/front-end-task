<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>DataTables</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">DataTables</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!-- /.card -->

            <div class="card">
              <div class="card-header">
                <h3 class="card-title">All Category</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>Name</th>
                      <th>description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(category, index) in categories" :key="index">
                      <td>{{ category.id }}</td>
                      <td>{{ category.title }}</td>
                      <td>{{ category.description }}</td>
                      <td>
                        <router-link
                          :to="{
                            name: 'category.edit',
                            params: { id: category.id },
                          }"
                          class="btn btn-success"
                          >edit</router-link
                        >
                        <button
                          @click.prevent="deleteCategory(category.id)"
                          class="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>
<script>
import config from "../../config";
import axios from "axios";
export default {
  data() {
    return {
      categories: {},
    };
  },
  methods: {
    categoryload() {
      config.getData("categories").then((response) => {
        this.categories = response.categories;
        console.log("categories", this.categories);
      });
    },
    deleteCategory(id) {
      const headerds = {
        Authorization: "Bearer " + localStorage.getItem("token"),
        Accept: "application/json",
      };
      axios.delete(`http://192.168.0.107:8000/api/v1/category/` + id, {
        headerds,
      });
      config.deleteData(`category/` + id).then(() => {
        this.$toast.success({
          title: "Success!",
          message: "Category deleted successfully.",
        });
        this.categoryload();
      });
    },
  },

  mounted() {
    const token = localStorage.getItem("token");
    if (token == null) {
      this.$router.push("login");
    }
  },
  created() {
    this.categoryload();
  },
};
</script>
<style></style>
