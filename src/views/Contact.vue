<template>
  <div>
     <section class="p-container p-container__ornament" id="contact">
        <h2 class="p-container__title"><span>CONTACT</span></h2>
        <div class="p-container__body">
          <form  name="ask-question" method="POST"  class="c-form c-form__m" netlify data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="ask-question" />
            <input name="name" class="input input__l" type="text" placeholder="お名前" />
            <input name="email" class="input input__l" type="email" placeholder="email" />
            <textarea
              name="message"
              class="input input__l input__textarea mb-xxl"
              placeholder="お問い合わせ内容"
            ></textarea>
            <input type="submit" class="c-btn c-btn-corp c-btn-l" value="送信">
          </form>
        </div>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.c-form{
  width: 100%;
  margin: 0 auto;
  }
.input{
display: block;
margin: 0 auto;
margin-bottom: 1.5rem;
border-radius: 4px;
border: solid 3px #f6f5f4;
height: 60px;
width: 60%;
font-size: 1rem;
}
.input:focus {
  border: 3px solid #333333;
}
.input__textarea {
  height: 200px;
}


.c-btn {
  border: none;
  cursor: pointer;
  border-radius: 5px;
  box-sizing: border-box;
  transition: 0.3s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .c-btn:hover {
    transform: translateY(-3px);
    transition: 0.3s;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  .c-btn-corp{
    display: block;
    margin: 0 auto;
    width: 100px;
    font-size: 20px;
    background: #f6f5f4;
  }


</style>