<template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <!-- /.card -->

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">All News</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(v_news, index) in news" :key="index">
                    <td>{{ v_news.id }}</td>
                     <td>{{ v_news.user_id }}</td>
                    <td>{{ v_news.title }}</td>
                    <td>
                      <img
                        :src="
                          'http://192.168.0.107:8000/storage/image/' +
                            v_news.image
                        "
                        style="width:80px;"
                      />
                    </td>
                    <td>{{ v_news.description }}</td>
                    <td>
                      <router-link
                        :to="{
                          name: 'news.edit',
                          params: { id: v_news.id },
                        }"
                        class="btn btn-success"
                        >edit</router-link
                      >
                       <button
                          @click.prevent="deleteNews(v_news.id)"
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
</template>
<script>
// import axios from "axios";
import config from "../../config";

export default {
  data() {
    return {
      news: {},
    };
  },
  methods: {
    newsLoad() {
      config.getData("news-list").then((response) => {
              this.news = response.newslists;
             console.log( this.news);
            });
    },
     deleteNews(id) {
     

      config.deleteData(`news/` + id).then(() => {
        this.$toast.success({
          title: "Success!",
          message: "Category deleted successfully.",
        });
        this.newsLoad();
      });

    },
  },
  mounted() {
    this.newsLoad();
  },
};
</script>
<style></style>
