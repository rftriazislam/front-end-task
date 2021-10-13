import Vue from 'vue'
import VueRouter from 'vue-router'
import MainContent from '@/components/pages/MainContent'

Vue.use(VueRouter)

const routes = [
  
      {
          path:'/',
          name:'/MainContent',
          meta: {
            hideNavigation:true,
          },
          component:MainContent,
         
      },
      {
        path:'/category',
        name:'category',
        meta: {
          hideNavigation:true,
        },
        component:()=>import('./components/category/Category.vue')
      },
      {
        path:'/allcategory',
        name:'allcategory',
        meta: {
          hideNavigation:true,
        },
        component:()=>import('./components/category/AllCategory.vue')
      },
      {
        path:'/categoryedit/:id',
        name:'category.edit',
        meta: {
          hideNavigation:true,
        },
        component:()=>import('./components/category/EditCategory.vue')
      },
      {
        path:'/login',
        name:'login',
        meta: {
          hideNavigation:false,
        },
        component:()=>import('./components/Auth/Login.vue') 
      },
      {
        path:'/register',
        name:'register',
        meta: {
          hideNavigation:false,
        },
        component:()=>import('./components/Auth/Register.vue') 
      },
      {
        path:'/news',
        name:'news',
        meta: {
          hideNavigation:true,
        },
        component:()=>import('./components/news/Newss.vue') 
      },
      {
        path:'/allnews',
        name:'allnews',
        meta: {
          hideNavigation:true,
        },
        component:()=>import('./components/news/AllNews.vue') 
      } ,{
        path:'/editnews/:id',
        name:'news.edit',
        meta: {
          hideNavigation:true,
        },
        component:()=>import('./components/news/EditNews.vue')
      },

];

export const router = new VueRouter({
    mode: "history",
    routes
})

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('accessToken');

//   if (authRequired && !loggedIn) {
//       return next('login');
//   }

//   next();
// })