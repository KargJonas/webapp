<template>
  <div v-editable="blok" class="membership-grid">

    <div class="membership-info">
      <div>
        <div v-if="blok.title" class="title">
          {{blok.title}}
        </div>

        <div class="info" v-if="blok.info">
          <markdown :value="blok.info"></markdown>
        </div>
      </div>
      <div class="image">
        <img :src="$resizeImage(blok.image, '500x0')" alt=""/>
      </div>
    </div>
    <div class="membership-details">
      <div class="payment-options">
        <div class="payment-options-title">Zahlungsintervall:</div>
        <div class="pricetabs">
          <div @click="setPriceView('monthly')" class="pricetab" :class="(priceView == 'monthly' ? 'active' : '')">
            monatlich
          </div>
          <div @click="setPriceView('annually')" class="pricetab" :class="(priceView == 'annually' ? 'active' : '')">
            jährlich
          </div>
        </div>
      </div>
      <div class="membership-plans">
        <component :key="blok.uid" v-for="blok in blok.columns" :blok="blok" :priceView="priceView" :is="blok.component"></component>
      </div>
      <div class="register-button" v-if="!hasUser">
        <button @click="register">Jetzt Mitglied werden</button>
      </div>
      <div v-if="blok.plans_text" class="plans-text">
        <markdown :value="blok.plans_text"></markdown>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  props: ['blok'],
  data() {
    return {
      priceView: 'monthly'
    }
  },
  methods: {
    setPriceView(v) {
      this.priceView = v;
    },
    register() {
      this.$store.dispatch('setSidebar', 'register');
    }
  },
  computed: {
    hasUser() {
      return !!this.$store.state.user;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.membership-grid {
  margin: 10vh 4% 10vh 4%;
  display: flex;
  @include media-breakpoint-down(md) {
    flex-direction: column;
  }
  .membership-info {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    @include media-breakpoint-down(md) {
      flex-direction: row;
    }
    @include media-breakpoint-down(sm) {
      flex-direction: column;
    }

    .title {
      position: relative;
      font-size: 2.8rem;
      @include media-breakpoint-down(lg) {
        font-size: 2.35rem;
      }
      @include media-breakpoint-down(xs) {
        font-size: 1.8rem;
      }
      line-height: 1.3;
      font-weight: bold;
      font-family: $font-primary;
      letter-spacing: .05em;
      text-transform: uppercase;
      width: 50%;
    }
    .image {
      img {
        display: block;
        max-width: 100%;
        @include media-breakpoint-down(md) {
          margin-left: 3%;
          margin-top: 10vh;
        }
        @include media-breakpoint-down(sm) {
          margin-left: 0;
          margin-top: 1vh;
        }

        @include media-breakpoint-up(lg) {
          max-width: 90%;
        }
        height: auto;
        max-height: 30vh;
      }
    }
    .info {
      margin-top: 0;
      padding: 0;
      width: 80%;
      @include media-breakpoint-down(md) {
        width: 95%;
      }
      font-size: 1rem;
      letter-spacing: 0.03em;
      line-height: 1.4;
    }

  }
  .membership-details {
    flex-basis: 50%;
    .payment-options {
      display: flex;
      @include media-breakpoint-down(xs) {
        flex-direction: column;
        .payment-options-title {
          margin-bottom: .4em;
        }
      }
      margin: 4vh 0 3vh;
      align-items: center;
      justify-content: center;
      font-size: .8em;
      text-transform: uppercase;

      .payment-options-title {
        font-weight: bold;
        margin-right: .7em;
      }
      .pricetabs {
        display: inline-flex;
        .pricetab {
          cursor: pointer;
          padding: .4em 1em;
          &.active {
            background-color: $color-orange;
            border-radius: 1em;
            color: #fff;
          }
        }
      }
    }
    .membership-plans {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .register-button {
      text-align: center;
      button {
        outline: none;
        cursor: pointer;
        font-size: 1.2em;
        font-weight: bold;
        color: #FFF;
        border: none;
        padding: 15px;
        background-color: $color-orange;
        margin: 1.5em 0;
        transition: background-color .3s linear;
        &:hover {
          background-color: saturate(darken($color-orange, 5%), 100%);
        }
      }
    }
    .plans-text {
      position: relative;
      &:before {
        content: "*";
        font-family: $font-mono;
        font-size: 4em;
        position: absolute;
        left: -.6em;
        top: -.8em;
        color: $color-orange;
      }
      font-size: 0.9rem;
      line-height: 1.6;
      margin: 2em 3em;
      max-width: 85%;
      color: #444;
    }
  }
}
</style>
