<template>
  <div v-editable="blok" class="workshop-best-of">
    <div class="dashed-line-black"></div>
    <div class="header">
      <h2 class="headline">{{blok.headline}}</h2>
      <div class="subline">
        <code class="hr">{{blok.subline}}</code>
        <sb-link :link="blok.link">
          <div class="arrow">
          </div>
          Alle Kurse</sb-link>
      </div>
    </div>
    <div class="grid">
      <workshop-preview class="col" v-for="w in blok.workshops" :key="w" :id="w"></workshop-preview>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.workshop-best-of {
  background-color: $color-bright-bg;
  position: relative;
  .dashed-line-black {
      background-image: url(~assets/img/dashed-bg-black.svg);
      background-size: 100% auto;
      background-repeat: repeat-y;
      background-position: 0 20px;
      background-size: 1.8vw;
      height: 3000px;
      width: 2%;
      position: absolute;
      right: 5%;
  }
  .header {
    padding-bottom: 100px;
    @include media-breakpoint-down(sm) {
      padding-bottom: 20px;
    }
    @include margin-page-wide();
    margin-right: 10%;
    padding-top: 40px;
    .headline {
      margin: 0;
      margin-bottom: 30px;
      max-width: 40%;
      font-size: 3rem;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      flex: 1;
      @include media-breakpoint-down(sm) {
        max-width: 90%;
      }
    }
    .subline {
      color: $color-orange;
      display: flex;
      @include media-breakpoint-down(sm) {
        flex-direction: column;
        .link {
          margin-top: 2em;
          margin-left: -1em;
        }
      }
      .hr {
        flex: 1;
      }
      .link {
        font-size: 1.3rem;
        font-family: $font-secondary;
        text-decoration: none;
        color: #000;
        .arrow {
          display: inline-block;
          position: relative;
          width: 4em;
          @include media-breakpoint-down(sm) {
            width: 55%;
          }
          border-top: .1em solid #000;
          margin: .25em 1em;
          transition: transform .15s ease-out;
          &:after {
            content: "";
            position: absolute;
            right: -.1em;
            top: -.05em;
            border-top: .1em solid #000;
            border-right: .1em solid #000;
            width: .5em;
            height: .5em;
            transform-origin: right top;
            transform: rotate(45deg);
          }
        }
        &:hover {
          .arrow {
            transform: translateX(.5em);
          }
        }
      }
    }
  }
  .grid {
    padding: 0 10% 0 5%;
    @include media-breakpoint-down(sm) {
      padding: 0 10% 0 3%;
    }
    .col {
      display: inline-block;
      width: 50%;
      @include media-breakpoint-down(sm) {
        width: 100%;
      }
      line-height: 1.3;
    }
  }
}
</style>
