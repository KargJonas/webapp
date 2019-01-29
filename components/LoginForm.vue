<template>
  <div class="login-form">
    <div class="header-item">
      <div class="space">
        <div class="headline">Login für GRAND GARAGE Mitglieder</div>
        <div class="subtitle" @click="register">
          Noch kein Mitglied? Hier anmelden.
        </div>
      </div>
      <div class="close" @click="close">
        <svg class="close-icon" viewBox="0 0 32 32">
          <g>
            <path d="M 5.5488281 3.8535156 A 2.0002 2.0002 0 0 0 4.15625 7.2890625 L 13.388672 16.519531 L 4.15625 25.751953 A 2.0002 2.0002 0 1 0 6.984375 28.580078 L 16.216797 19.347656 L 25.449219 28.580078 A 2.0002 2.0002 0 1 0 28.277344 25.751953 L 19.044922 16.519531 L 28.277344 7.2890625 A 2.0002 2.0002 0 0 0 26.824219 3.8554688 A 2.0002 2.0002 0 0 0 25.449219 4.4589844 L 16.216797 13.691406 L 6.984375 4.4589844 A 2.0002 2.0002 0 0 0 5.5488281 3.8535156 z " />
          </g>
        </svg>
      </div>
    </div>
    <div class="form-item">
      <span class="label">Email</span>
      <input class="input" type="text" v-model="email" placeholder="deine email" @input="clearErrorMessage" />
    </div>
    <div class="form-item">
      <span class="label">Password</span>
      <input class="input" type="password" v-model="password" placeholder="dein passwort" @input="clearErrorMessage" />
    </div>
    <div class="error-message" v-if="errorMessage">
      <span>{{errorMessage}}</span>
    </div>
    <div class="form-item button-row">
      <button @click="submit">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  data() {
    return {
      email: '',
      password: '',
      errorMessage: null
    }
  },
  computed: {
  },
  methods: {
    close() {
      this.$store.dispatch('setSidebar', null);
    },
    register() {
      this.$store.dispatch('setSidebar', 'register');
    },
    submit() {
      let data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('loginUser', data).then((r) => {
      }).catch((e) => {
        this.errorMessage = e.description || e.error || e.code;
      });
    },
    clearErrorMessage() {
      this.errorMessage = null;
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";

.login-form {
  padding: 5vw;
  background-color: $color-bright-bg;
  .header-item {
    margin-bottom: 40px;
    display: flex;
    & > div {
      &.space {
        flex: 1;
      }
      &.close {
        margin-left: 2em;
        .close-icon {
          cursor: pointer;
          height: 1.1em;
        }
      }
    }
    .headline {
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 15px;
      font-family: $font-secondary;
    }
    .subtitle {
      font-size: 0.9rem;
      color: $color-orange;
      font-family: $font-mono;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .form-item {
    padding: 0 0 18px;
    display: grid;
    @include media-breakpoint-up(sm) {
      grid-template-columns: 28% 72%;
    }
    align-items: center;
    .label {
      font-weight: bold;
      text-transform: uppercase;
      font-size: .7em;
    }
    .input {
      outline: none;
      border: 1px solid #fff;
      flex-grow: 1;
      padding: 5px 10px;
      @include media-breakpoint-down(xs) {
        margin: 1vh 0;
      }
      &:focus {
        border-color: $color-orange;
      }
    }
    &.button-row {
      display: flex;
      justify-content: flex-end;
    }
    button {
      cursor: pointer;
      background-color: $color-orange;
      color: #FFF;
      min-width: 30%;
      border: 1px solid lighten($color-orange, 10);
      padding: 7px 12px 8px;
      line-height: 1;
      outline: none;
      &:focus {
        background-color: lighten($color-orange, 10);
      }
    }
  }
  .checkbox-item {
    padding: 10px;
    display: flex;
    .checkbox-wrapper {
      padding-right: 20px;
      outline: none;
      text-align: right;
      user-select: none;
      flex: 1;
      max-width: 180px;
    }
    label {
      user-select: none;
    }
  }
  .error-message {
    font-size: 14px;
    font-family: $font-mono;
    padding: 5px 0;
    display: flex;
    color: red;
  }
}
</style>
