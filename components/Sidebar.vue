<template>
  <transition name="fade">
  <div class="sidebar" v-if="sidebar">
    <div class="backdrop" @click="close"></div>
    <transition name="slide" appear>
        <login-form class="pane" v-if="sidebar == 'login'"></login-form>
        <register-form class="pane" v-else-if="sidebar == 'register'"></register-form>
        <register-success-form class="pane" v-else-if="sidebar == 'register-success'"></register-success-form>
    </transition>
  </div>
  </transition>
</template>

<script charset="utf-8">
export default {
  created() {
  },
  methods: {
    close() {
      this.$store.dispatch('setSidebar', null);
    },
    login() {
      this.$store.dispatch('setSidebar', 'login');
    }
  },
  computed: {
    sidebar() {
      return this.$store.state.sidebar;
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.sidebar {
  position: fixed;
  z-index: 5000;
  top: 0;
  width: 100%;
  height: 100%;
  .backdrop {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .pane {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    @include media-breakpoint-up(lg) {
      max-width: 50vw;
    }
    @include media-breakpoint-down(md) {
      max-width: 60vw;
    }
    @include media-breakpoint-down(sm) {
      max-width: 100vw;
    }

    overflow: auto;
  }
}

.slide-enter-active, .slide-leave-active {
  transition: all .5s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
</style>
