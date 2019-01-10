<template>
  <div class="header-wrapper">
    <header class="top-header">
      <div class="top-header-inner">
        <main-nav-item class="desktop" :item="item" :key="item.id" v-for="item in main">
        </main-nav-item>
        <div class="menu-icon" @click="toggleMenu()">
          <img src="~/assets/img/icons/menu-icon.svg">
        </div>
        <div class="spacer">
        </div>
        <div class="logo">
          <nuxt-link class="top-header__link" to="/">
            <img src="~/assets/img/icons/gg-logo-icon.svg">
          </nuxt-link>
          <div class="dropdown" v-if="home && home.length > 0">
            <div v-for="child in home" :key="child.id" class="child">
              <sb-link :link="child.link" class="child-nav-item">
                {{ child.name }}
              </sb-link>
            </div>
            <div class="child" v-if="isAuthenticated">
              <nuxt-link to="/me" class="child-nav-item">
                Mein Profil
              </nuxt-link>
            </div>
            <div class="child" v-else>
              <button @click="login" class="login-button">LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="mobile-nav" v-show="showMenu" @click="toggleMenu()">
      <main-nav-item class="mobile" :item="item" :key="item.id" v-for="item in main">
      </main-nav-item>
    </div>
  </div>
</template>

<script charset="utf-8">
export default {
  props: ['blok'],
  data() {
    return {
      showMenu: false
    }
  },
  computed: {
    loginLink() {
      return '/' + this.$store.state.language + '/login';
    },
    main() {
      return this.$store.state.settings.main_navi;
    },
    home() {
      return this.$store.state.settings.home_navi;
    },
    isAuthenticated() {
      return this.$store.state.auth !== null;
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    login() {
      this.$store.dispatch('setSidebar', 'login');
    },
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/');
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.header-wrapper {
  background-color: $color-bright-bg;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  max-width: 100%;
}

.top-header {
  @include margin-page-wide();
  font-size: 1.1em;
  @media screen and (min-width: 1149px) {
    letter-spacing: .1em;
  }
  .top-header-inner {
    display: flex;
    justify-content: space-between;
    margin: 0 -20px 0 -25px; // compensate paddings from logo and nav items
  }

  .logo {
    position: relative;
    &:hover {
      .dropdown {
        display: block;
      }
    }
    a {
      padding: 20px;
      display: block;
      img {
        height: 1.1em;
      }
    }
    .dropdown {
      display: none;
      position: absolute;
      padding: 20px;
      background-color: #FFF;
      min-width: 150px;
      right: 18px;
      text-align: right;
      .child {
        .child-nav-item {
          white-space: nowrap;
          display: block;
          text-transform: uppercase;
          color: #000;
          text-decoration: none;
          font-weight: bold;
          font-size: 0.9rem;
          padding: 8px;
        }
        .login-button {
          outline: none;
          width: 100%;
          color: #FFF;
          border: none;
          background-color: $color-orange;
          padding: 5px;
          margin: 3px 0;
          cursor: pointer;
        }
      }
    }
  }

  .menu-icon {
    display: none;
  }

  .spacer {
    flex: 1;
  }
}



.mobile-nav {
  display: none;
}

/* Mobile */
@include media-breakpoint-down(sm) {
  .top-header {
    .top-header-inner {
      display: flex;
      justify-content: flex-end;
      margin: 0 -20px 0 -20px; // compensate paddings from logo and burger button
    }
    .nav-item.desktop {
      display: none;
    }

    .logo {
      img {
        height: 1.1em;
      }
    }
    .menu-icon {
      padding: 20px;
      img {
        height: 1.1em;
      }
    }
    .spacer {
      flex: 1;
    }

    .menu-icon {
      display: block;
    }

  }

  .mobile-nav {
    background-color: $color-bright-bg;
    padding-left: 20px;
    display: block;
    position: relative;
    top: 0;
  }
}

</style>
