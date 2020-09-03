<template>
  <div class="portfolio">
   <div class="p-container p-container__lightGray">
          <h2 class="p-container__title"><span>PORTFOLIO</span></h2>
          <div class="p-container__body">
            <div class="c-panel__group c-panel__group__flex">
              <div
                class="c-panel c-panel__border c-panel__cource "
              >
              <h3>レビューアプリ</h3>
              <p>簡単なフリマサービスを作る学習をしたので、それをもとにphpで映画のレビューアプリを作りherokuでデプロイしました。
              </p>
              <div class="c-panel__body">
              <a href="https://filmreview11.herokuapp.com/"><img src="../assets/15.28.45.png" alt=""></a>
              </div>
              </div>
              <div class="c-panel c-panel__border c-panel__cource">
                <h3>クイズアプリ</h3>
                <p>laravelとvueで簡単なクイズアプリを作りawsでデプロイしました。
              </p>
              <div class="c-panel__body">
              <a href="http://13.112.115.167"><img src="../assets/10.38.08.png" alt=""></a>
              </div>
              </div>
              <div class="c-panel c-panel__border c-panel__cource">
  
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.c-panel__body{
  img{
width: 200px;
height: 180px;
  }
}


.c-panel{
  width: 80%;
  height: 350px;
  border:3px solid #f6f5f4;
  margin-top: 1.5rem;

&__group{
  display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
}
}
</style>
