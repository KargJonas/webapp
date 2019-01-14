<template>
  <div class="login-form">
    <div class="header-item">
      <div class="headline">Login für GRAND GARAGE Mitglieder</div>
      <div class="subtitle" @click="register">
        Noch kein Mitglied? Hier anmelden.
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
    register() {
      this.$store.dispatch('setSidebar', 'register');
    },
    submit() {
      let data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('loginUser', data).then((r) => {
        console.log(r);
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
  margin: 0 -10px;
  padding: 50px;
  background-color: $color-bright-bg;
  .header-item {
    margin-bottom: 40px;
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
    grid-template-columns: 28% 72%;
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
