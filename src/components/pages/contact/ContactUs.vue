<template>
  <div class="app-page pg-contact no-pad m-block">
    <div class="pg-align m-block">
      <h2 class="pg-title">Vue&middot;tiful Korea에<br/>많은 후원 바랍니다!!!</h2>
      <div class="contact-form">
        <transition name="fade">
          <cs-contact v-if="!hasSent"></cs-contact>
          <div class="contact-sent" v-else>
            <div class="envelope is-enclosed">
              <div class="paper"></div>
            </div>
            <div class="contact-success">
              감사드립니다.<br/>
              더 문의 하실 사항이 있으시면 아래로 연락주세요.

            </div>
            <ul class="contact-more-info">
              <li><span class="sty-colon">Email</span><a
                href="'mailto:kelly.kh.woo@gmail.com'">kelly.kh.woo@gmail.com</a>
              </li>
              <li><span class="sty-colon">Phone</span>010.3951.1580</li>
            </ul>
            <div class="btn-box txt-c">
              <button type="type" class="btn-green" @click=" hasSent = false ">뒤로</button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  import CsContact from './CsContact'

  export default {
    name: 'contact-us',
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {
        hasSent: false,
        onFirstDisplay: null
      }
    },
    components: {
      'cs-contact': CsContact
    }
  }
</script>

<style lang="scss">

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>