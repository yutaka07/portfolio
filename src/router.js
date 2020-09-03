import Vue from "vue";
import Router from "vue-router";
//必要な時だけデータを取ってくることができる
const Home = () => import(/*webpackChunkName: "Home" */"./views/Home.vue");
const Profile = () => import(/*webpackChunkName: "User" */"./views/Profile.vue");
const HeaderHome = () => import(/*webpackChunkName: "HeaderHome" */"./views/HeaderHome.vue");
const Contact = () => import(/*webpackChunkName: "Contacr" */"./views/Contact.vue");
const Portfolio = () => import(/*webpackChunkName: "Contacr" */"./views/Portfolio.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      components: {
        default: Home,
        header: HeaderHome,
      },
    },
    {
      path:"/Contact",
      components:{
        default: Contact,
        header: HeaderHome,
      },
    },
    {
      path:"/Portfolio",
      components:{
        default: Portfolio,
        header: HeaderHome,
      },
    },
    {
      path: "/Profile",
      components: {
        default: Profile,
        header: HeaderHome,
      },
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
