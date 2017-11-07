<template>
  <div class="app-page pg-blog">
    <div class="pg-align">
      <div class="pg-inner-head">
        <h2 class="pg-title">{{i18n.title}}</h2>
        <p class="pg-desc">{{i18n.desc}}</p>
      </div>
      <div class="pg-inner-body transition-box">
        <template v-for="j in 2">
          <ul class="blog-list">
            <li v-for="i in 2" :class="'fade-in n' + (2*(j-1)+i)" class="opac-0 ani-fadein">
              <dl class="blog-list-item">
                <dt>{{ i18n['s_title' + (2*(j-1)+i)]}}</dt>
                <dd class="pg-desc">{{i18n['s_desc' + (2*(j-1)+i)]}}</dd>
                <dd class="blog-list-icon"></dd>
              </dl>
            </li>
          </ul>
        </template>
      </div>
      <div class="btn-box txt-c">
        <a href="#" target="_blank" class="btn-jump f-roboto">{{i18n.btn}}</a>
      </div>
    </div>
  </div>
</template>
<script>
  import { ko } from './lang'
  import setLang from '@/mixin/lang'

  export default {
    name: 'blog',
    mixins: [setLang],
    props: {
      title: {
        type: String
      }
    },
    data () {
      return {
        language: 'blog'
      }
    },
    created () {
      this.setLang()
    }
  }
</script>
