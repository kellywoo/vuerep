<template>
  <div id="app" class="client">
    <header class="app-header">
      <h1 class="app-logo"><strong><img src="/assets/img/logos/logo.svg" alt="Kelly's blog"/></strong></h1>
    </header>
    <gnb></gnb>
    <v-autoscroll class="app-content">
      <v-autoscroll-section title="Home" :minHeight="'100vh'" :arrow="true">
        <page-home class="app-pad"></page-home>
      </v-autoscroll-section>
      <v-autoscroll-section title="About" class="right">
        <page-about class="app-pad"></page-about>
      </v-autoscroll-section>
      <v-autoscroll-section title="Skills" class="right">
        <page-skills class="app-pad"></page-skills>
      </v-autoscroll-section>
      <v-autoscroll-section title="Work" class="left">
        <page-work class="app-pad"></page-work>
      </v-autoscroll-section>
      <v-autoscroll-section title="Blog" class="left">
        <page-blog class="app-pad"></page-blog>
      </v-autoscroll-section>
      <v-autoscroll-section title="Contact">
        <page-contact></page-contact>
      </v-autoscroll-section>
    </v-autoscroll>
  </div>
</template>
<script>
  import '/assets/scss/index.scss'
  import Gnb from '@/components/gnb/Gnb'
  import Home from '@/components/pages/home/Home'
  import About from '@/components/pages/about/About'
  import ContactUs from '@/components/pages/contact/ContactUs'
  import Work from '@/components/pages/work/Work'
  import Skills from '@/components/pages/skills/Skills'
  import Blog from '@/components/pages/blog/Blog'

  export default {
    name: 'app',
    data () {
      return {
        sections: []
      }
    },
    methods: {},
    mounted () {

    },
    components: {
      'gnb': Gnb,
      'page-home': Home,
      'page-about': About,
      'page-contact': ContactUs,
      'page-work': Work,
      'page-skills': Skills,
      'page-blog': Blog
    }
  }
</script>

