<template>
    <form>
      <fieldset>
        <legend class="off-grid">Inquiry Form</legend>
        <div class="msg-box">
          <label class="form-line-box"
                 :class="{'is-filled': !!name}">
            <span class="form-label">Name</span>
            <input class="input" type="text" maxlength="30"
                   name="name" v-model="name"/>
            <span class="form-icon icon-lock"></span>
          </label>
        </div>
        <div class="msg-box">
          <label class="form-line-box"
                 :class="{'is-filled': !!email, 'is-passed': !errors.has('email') && !!email}">
            <span class="form-label">Email<em class="sty-required" title="required" aria-label="required">*</em></span>
            <input class="input" type="text" maxlength="30"
                   v-validate="emailValidate"
                   placeholder="required"
                   @keyup="checkValidate"
                   name="email" v-model="email"/>
            <span class="form-icon img-thumbsup"></span>
          </label>
        </div>
        <div class="msg-box">
          <label class="form-line-box"
                 :class="{'is-filled': !!phone}">
            <span class="form-label">Phone</span>
            <input class="input" type="text" maxlength="20"
                   name="phone" v-model="phone"/>
            <span class="form-icon img-thumbsup"></span>
          </label>
        </div>
        <div class="msg-box">
          <label class="form-line-box"
                 :class="{'is-passed': !errors.has('message') && !!message }">
            <span class="form-label">Message<em class="sty-required" title="required" aria-label="required">*</em></span>
            <textarea class="textarea" maxlength="500"
                      v-validate="messageValidate"
                      placeholder="Thank you for your words."
                      @keyup="checkValidate"
                      name="message" v-model="message"></textarea>
            <span class="form-icon img-thumbsup"></span>
          </label>
        </div>
        <div class="btn-box txt-c">
          <button v-if="isValid" type="button" class="btn-green f-roboto" @click="sendEmail">SEND</button>
          <button v-else type="button" disabled aria-disabled="true" class="btn-green f-roboto">SEND</button>
        </div>
      </fieldset>
    </form>
</template>
<script>
  import EventBus from '@/ui/eventBus'
  import { Validator } from 'vee-validate'
  const validator = new Validator()
  export default {
    data () {
      return {
        name: '',
        email: '',
        phone: '',
        message: '',
        isValid: false,
        nameValidate: 'required',
        emailValidate: 'required|email',
        messageValidate: 'required',
        emailId: 'user_XKoxNpza88RA2JZRG81C3',
        templateId: 'template_k8u4ZODr'
      }
    },
    methods: {
      getDate () {
        let d = new Date()
        let year = d.getFullYear()
        let month = d.getMonth() + 1
        let date = d.getDate()
        let day = [ '일', '월', '화', '수', '목', '금', '토' ][ d.getDay() ]
        return `${year}-${month}-${date} ${day}요일`
      },

      sendEmail () {
        let vm = this
        if ( this.isValid ) {
          this.isValid = false
          window.emailjs.send('gmail', this.templateId, {
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message,
            time: this.getDate()
          }).then(function (response) {
            vm.$parent.hasSent = true;
            vm.resetForm()
          }, function (err) {
            console.log(err)
          })
        }
      },
      resetForm () {
        this.name = ''
        this.email = ''
        this.phone = ''
        this.messae = ''
      },
      checkValidate () {
        let vm = this
        validator.validateAll({
          message: this.message,
          email: this.email
        }).then(result => {
          if ( result ) {
            vm.isValid = true;
          } else {
            vm.isValid = false
          }
        })
      }
    },
    created () {
      validator.attach('email', this.emailValidate)
      validator.attach('message', this.messageValidate)
      window.emailjs.init(this.emailId)
    }
  }
</script>
