<template>
  <div>
    <div class="login-spacer" v-if="isAuthenticated"></div>
    <div class="layout-container">
      <top-header/>
      <main id="main" role="main">
      <nuxt/>
      </main>
      <bottom-footer/>
      <sidebar />
      <!--
        <breadcrumbs />
      -->
    </div>
  </div>
</template>

<script>
import TopHeader from '~/components/TopHeader.vue'
import BottomFooter from '~/components/BottomFooter.vue'
import Sidebar from '~/components/Sidebar.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'

export default {
  components: {
    TopHeader,
    BottomFooter,
    Sidebar,
    Breadcrumbs,
  },
  computed: {
    isAuthenticated() {
      return !!this.$store.state.auth;
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/styles.scss';


body {
  background-color: $color-bright-bg;
  width: 100%;
  overflow-x: hidden;
  font-family: $font-primary;
  line-height: 1;
  font-size: 18px;
  color: #000;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

a {
  color: $color-orange;
  text-decoration: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.page-enter-active, .page-leave-active {
  transition: all .30s ease-out;
}
.page-enter, .page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}


.layout-container {
  margin-top: 65px;
  overflow: hidden;
}

.login-spacer {
  height: 26px;
  display: block;
}


</style>
