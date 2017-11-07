<template>
  <div class="contact-form">
    <dl class="contact-info clear-fix">
      <dt>
        {{i18n.name}}
        <span class="block">{{i18n.address}}</span>
      </dt>
      <dd><span class="sty-colon">Email</span><a :href="'mailto:'+i18n.email">{{i18n.email}}</a></dd>
      <dd><span class="sty-colon">Phone</span>(+82)2.3442.7982</dd>
    </dl>
    <p class="contact-advise">{{i18n.info}}</p>
    <form>
      <fieldset>
        <legend class="off-grid">Inquiry Form</legend>
        <div class="form-box">
          <input class="input" type="text" maxlength="30"
                 placeholder="Name"
                 v-model="name"/>
        </div>
        <div class="form-box">
          <input class="input" type="email" maxlength="30"
                 placeholder="E-mail"
                 v-model="email"/>
        </div>
        <div class="form-box">
          <input class="input" type="text" maxlength="20"
                 placeholder="Phone"
                 v-model="phone"/>
        </div>
        <div class="form-box">
        <textarea class="textarea" maxlength="500"
                  placeholder="Message"
                  v-model="message"></textarea>
        </div>
        <div class="btn-box">
          <button type="button" class="btn-submit f-roboto">SEND</button>
        </div>
      </fieldset>
    </form>
  </div>
</template>
<script>
  import { ko } from './lang'
  import setLang from '@/mixin/lang'

  export default {
    mixins: [setLang],
    methods: {
      getDropdown (e) {
        console.log(this, e);
      }
    },
    data () {
      return {
        language: 'contact',
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    },
    created () {
      this.setLang()
    }
  }
</script>
