<template>
<div>
  <div class="main">
    <router-view name="header"></router-view>
    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
    <footer class="footer">Copyright © yutaka All Rights Reserved</footer>
</div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poiret+One&family=Recursive:wght@300&display=swap");
.main{
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-family: 'Recursive', sans-serif;
  color: #333333;
  min-height: 100vh;
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active{
  transition: 0.5s;
}

.footer{
  height:100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f5f4;
}

.p-container{
  width: 980px;
  margin: 0 auto;
  padding: 1rem;
  margin-top: 100px;
}
@media screen and (max-width: 480px) {
  .p-container {
    width: 80%;

    &__title {
      width: 70%;
      margin-left: auto;
      margin-right: auto;
    }
    &__body {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    &__title {
      text-align: center;
      margin-bottom: 40px;

      span {
        font-size: 24px;
      }
    }
  }
}
  ul {
    margin: 20px;
    text-align: center;
    font-size: 20px;

    li {
      margin: 10px;
    }

    span {
      text-align: center;
      display: block;
    }
  }



</style>