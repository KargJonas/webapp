<template>
  <div class="register-form">
    <div v-if="loading">
      loading…
    </div>
    <div v-else>
      <div class="header-item">
        <div class="space">
          <div class="headline">Werde GRAND GARAGE Mitglied</div>
          <div class="subtitle" @click="login">
            Bereits Mitglied? Zum Login.
          </div>
          <div class="info">
            Werde Teil einer lebendigen Community aus Kreativen, Makern und Start-ups!
            Ob Professional oder Starter – such' dir ganz einfach die für dich passende Mitgliedschaft aus und erhalte Zugang zur GRAND GARAGE.
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
        <span class="label">Vorname</span>
        <input type="text" v-model="firstName" placeholder="Vorname" @input="checkName" />
      </div>
      <div class="form-item">
        <span class="label">Nachname</span>
        <input type="text" v-model="lastName" placeholder="Nachname" @input="checkName" />
      </div>
      <div class="form-item">
        <span class="label">E-Mail</span>
        <input type="text" v-model="email" ref="email" placeholder="deine e-mail adresse" @input="checkMail" />
      </div>
      <div class="form-item">
        <span class="label">Passwort</span>
        <div class="password-wrapper">
          <input type="password" v-model="password" placeholder="" @input="checkPassword" />
          <div v-if="showPasswordError" class="form-item password-status">
          </div>
        </div>
      </div>
      <div class="form-item">
        <span class="label">Passwort (wiederholen)</span>
        <input type="password" v-model="passwordRepeat" placeholder="" />
        <div class="password-error">
          <span class="bad" v-if="!passwordValid">Passwörter stimmen nicht überein</span>
        </div>
      </div>
      <div class="checkbox-item">
        <div class="checkbox-wrapper">
          <input type="checkbox" id="agb" v-model="agb" />
        </div>
        <label for="agb">Ich habe die <nuxt-link to="/de/agb">Teilnahmebedingungen / AGB</nuxt-link> gelesen und bin damit einverstanden.</label>
      </div>
      <div class="checkbox-item">
        <div class="checkbox-wrapper">
          <input type="checkbox" id="dsg" v-model="dsg" />
        </div>
        <label for="dsg">Ich habe die <nuxt-link to="/de/datenschutzerklaerung">Datenschutzerklärung</nuxt-link> gelesen und bin damit einverstanden.</label>
      </div>
      <!--
      <div class="checkbox-item">
        <div class="checkbox-wrapper">
          <input type="checkbox" id="newsletter" v-model="newsletter" />
        </div>
        <label for="newsletter">Ich bin damit einverstanden, Newsletter an meine angegebene E-Mail Adresse zu erhalten.</label>
      </div>
      -->
      <div class="form-item error-message" v-if="errorMessage">
        <span></span>
        <div>
          <span>{{errorMessage}}</span>
          <markdown class="policy" v-if="errorDescription" :value="errorDescription"></markdown>
        </div>
      </div>
      <div class="form-item button-row">
        <button :disabled="!formValid" @click="submit">Registrieren</button>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import validator from 'validator';

export default {
  props: ['blok'],
  data() {
    return {
      email: '',
      password: '',
      passwordRepeat: '',
      firstName: '',
      lastName: '',
      agb: false,
      dsg: false,
      newsletter: false,
      errorMessage: null,
      errorDescription: '',
      loading: false,
    }
  },
  computed: {
    passwordValid() {
      return this.password === this.passwordRepeat;
    },
    emailValid() {
      return validator.isEmail(this.email);
    },
    formValid() {
      return this.passwordValid && this.emailValid && this.agb && this.dsg;
    },
    showEmailError() {
      return this.email !== '';
    },
    showPasswordError() {
      return this.password !== '';
    }
  },
  methods: {
    close() {
      this.$store.dispatch('setSidebar', null);
    },
    submit() {
      this.loading = true;
      let data = {
        email: this.email,
        password: this.password,
        user_metadata: {
          firstName: this.firstName,
          lastName: this.lastName,
        }
      }
      this.$store.dispatch('registerUser', data).then((r) => {
        this.loading = false;
        this.$store.dispatch('setSidebar', 'register-success');
      }).catch((e) => {
        this.loading = false;
        if (e.error) {
          this.errorMessage = 'Ein Fehler ist aufgetreten: "' + e.error + '"';
          return;
        }
        if (e.code) {
          switch (e.code) {
            case 'user_exists':
              this.errorMessage = 'Der User Existiert bereits';
              break;
            case 'invalid_password':
              this.errorMessage = 'Das Passwort ist zu schwach.';
              this.errorDescription = e.policy;
              break;
            default:
              this.errorMessage = 'Ein Fehler ist aufgetreten: "' + e.code + '"';
              break;
          }
        }
      });
    },
    login() {
      this.$store.dispatch('setSidebar', 'login');
    },
    clearError() {
      this.errorMessage = null;
      this.errorDescription = '';
    },
    checkName() {
      this.clearError();
    },
    checkMail() {
      this.clearError();
    },
    checkPassword() {
      this.clearError();
    },
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";

.register-form {
  padding: 5vw;
  background-color: $color-bright-bg;
  .header-item {
    display: flex;
    margin-bottom: 40px;
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
    .info {
      margin: 20px 0;
      font-size: 0.9em;
      line-height: 1.3;
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
    padding: 0 0 5px;
    @include media-breakpoint-up(sm) {
      padding: 0 0 18px;
      display: grid;
      grid-template-columns: 28% 72%;
    }
    align-items: center;
    .label {
      font-weight: bold;
      text-transform: uppercase;
      font-size: .7em;
    }
    input {
      outline: none;
      flex-grow: 1;
      padding: 5px 10px;
      @include media-breakpoint-down(xs) {
        margin: 1vh 0;
      }
      background: #fff;
      border: 1px solid #fff;
      width: 100%;
      &:focus {
        border-color: $color-orange;
      }
    }
    .password-wrapper {
      position: relative;
      .password-status {
        position: absolute;
        right: 10px;
        top: 50%;
        background-color: $color-orange;
        height: .5em;
        width: .5em;
        padding: 0;
        margin-top: -.25em;
        border-radius: 50%
      }
    }
    .password-error {
      grid-column: 2;
    }
    &.button-row {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 80px; // fix for some strange ios safari error
    }
    button {
      background-color: $color-orange;
      color: #FFF;
      border: 1px solid lighten($color-orange, 10);
      padding: 7px 13px 9px;
      line-height: 1;
      outline: none;
      &:focus {
        background-color: lighten($color-orange, 10);
      }
      &:disabled {
        background-color: #AAA;
        border-color: #999;
        cursor: not-allowed;
      }
    }
    .bad {
      color: $color-orange;
      font-size: .7em;
      font-weight: bold;
    }
  }
  .checkbox-item {
    padding: 8px 0;
    display: flex;
    .checkbox-wrapper {
      padding-right: .5em;
      outline: none;
      user-select: none;
      max-width: 180px;
    }
    label {
      user-select: none;
      flex: 1;
      font-size: .7em;
      letter-spacing: .03em;
      line-height: 1.2;
      font-weight: 700;
    }
  }
  .disclaimer {
    color: #333;
    a {
      color: $color-orange;
      padding: 0 3px;
    }
  }
  .error-message {
    color: red;
    .policy {
      font-size: 0.8em;
      color: #333;
      > ul {
        list-style-type: circle;
        padding: 0 0 0 1em;
        > li {
          margin: .4em 0 0 0;
          > ul {
            padding: 0 0 0 1em;
            list-style-type: circle;
            > li {
              margin: .4em 0 0 0;
            }
          }
        }
      }
    }
  }
}
</style>
