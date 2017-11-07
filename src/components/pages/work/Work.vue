<template>
  <div class="app-page pg-work">
    <div class="pg-align">
      <div class="pg-inner-head">
        <h2 class="pg-title">{{i18n.title}}</h2>
        <strong class="pg-summary">{{i18n.strong}}</strong>
        <p class="pg-desc" v-html="i18n.desc"></p>
      </div>
      <div class="pg-inner-body transition-box">
        <v-slider class="service-list lo-col col-4">
          <v-slider-item v-for="i in 4" :class="'n'+i" class="opac-0 ani-fadein" :key="i">
            <div class="service-list-icon"></div>
            <dl class="service-item">
              <dt class="pg-inner-title txt-c f-roboto">{{i18n['s_title' + i]}}</dt>
              <dd class="pg-desc">{{i18n['s_desc' + i]}}</dd>
            </dl>
          </v-slider-item>
        </v-slider>
      </div>
      <div class="btn-box txt-c">
        <a href="#" class="btn-jump f-roboto">{{i18n.btn}}</a>
      </div>
    </div>
  </div>
</template>
<script>
  import { ko } from './lang'
  import setLang from '@/mixin/lang'

  export default {
    name: 'work',
    mixins: [setLang],
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {
        language: 'work'
      }
    },
    created () {
      this.setLang()
    }
  }
</script>
