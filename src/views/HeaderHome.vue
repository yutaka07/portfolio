<template>
  <div class="header">
    <h1 class="title">Portfolio</h1>
    <div class="c-menu__trigger " id="js-toggle-sp-menu" @click="toggleClass">
        <span></span>
        <span></span>
        <span></span>
      </div>
    <nav class="c-nav-menu" id="js-toggle-sp-menu-target" >
      <ul class="c-menu">
        <li class="c-menu__item" @click="toggleClass">
      <router-link class="c-menu__link" to="/" active-class="link-active" exact
        >HOME</router-link
      >
        </li>
        <li class="c-menu__item" @click="toggleClass">
      <router-link class="c-menu__link" @click="toggleClass" to="/Profile" active-class="link-active" exact
        >PROFILE</router-link
      >
        </li>
        <li class="c-menu__item" @click="toggleClass">
      <router-link class="c-menu__link" @click="toggleClass" to="/Portfolio" active-class="link-active" exact
        >PORTFOLIO</router-link
      >
        </li>
        <li class="c-menu__item" @click="toggleClass">
      <router-link class="c-menu__link" @click="toggleClass" to="/Contact" active-class="link-active" exact
        >CONTACT</router-link
      >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    toggleClass(){
      document.getElementById('js-toggle-sp-menu').classList.toggle('active');
      document.getElementById('js-toggle-sp-menu-target').classList.toggle('active');
    },
  },
};
</script>

<style lang="scss"  scoped>
.header{
  display:flex;
  top: 0;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  font-size: 1rem;
}
.title{
  margin: 0 10px ;
  display: inline;
  color: #333333;
}
.c-menu{
  display: flex;

&__link {
  margin-right: 20px;
  text-decoration: none;
  font-size: 2rem;
  color: #333333;
}
&__item{
  list-style: none;
}
&__trigger {
display: none;
transition: all 0.4s;
box-sizing: border-box;
position: relative;
width: 40px;
height: 32px;
z-index: 3;
margin-right: 10px;
}
}
@media screen and (max-width: 480px){
  .c-menu{
    display: block;
  
  &__link{
    display: block;
    padding: 1rem;
  }
  &__trigger {
display: inline-block;
  }
  }

span {
display: inline-block;
transition: all 0.4s;
box-sizing: border-box;
position: absolute;
left: 0;
width: 100%;
height: 4px;
background-color: #333333;
border-radius: 4px;
}
.header{

 span:nth-of-type(1) {
  top: 0;
}
 span:nth-of-type(2) {
  top: 14px;
}
 span:nth-of-type(3) {
  bottom: 0;
}
 .active span:nth-of-type(1) {
  transform: translateY(12px) rotate(-45deg);
}
 .active span:nth-of-type(2) {
  opacity: 0;
}
 .active span:nth-of-type(3) {
  transform: translateY(-15px) rotate(45deg);
}
}
.c-nav-menu{
  display: block;
      position: absolute;
      top: 0;
      right: -100%;
      background: rgba(255, 255, 255, 0.85);
      width: 100%;
      height: 100vh;
      padding-top: 50px;
      transition: 0.5s;
}
.c-nav-menu.active{
  transition: 0.5s;
        transform: translateX(-100%);
        z-index: 2;
}
}

</style>
