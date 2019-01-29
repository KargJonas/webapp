<template>
  <div v-editable="blok" class="location-description">
    <div class="col-left">
      <div>
        <h3 class="headline">{{blok.headline}}</h3>
        <div class="teaser">{{blok.teaser}}</div>
        <markdown :value="blok.left"></markdown>
      </div>
    </div>
    <div class="col-right">
      <markdown :value="blok.right"></markdown>
    </div>

  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.location-description {
  @include media-breakpoint-up(lg) {
    display: flex;
    flex-direction: row;
    @include margin-page-middle();
    margin-top: 2em;
    line-height: 1.7;
    .col-left {
      flex-basis: 40%;
      .headline {
          font-size: 3em;
          max-width: 5em;
          line-height: 1.25;
          letter-spacing: .06em;
          text-transform: uppercase;
          margin: 0 0 .3em;
      }
      .teaser {
        color: $color-orange;
        margin-bottom: 3em;
      }
    }
    .col-right {
      flex-basis: 60%;
      margin-top: 2em;
    }
  }
  @include media-breakpoint-down(md) {
    display: flex;
    flex-direction: column;
    line-height: 1.7;
    @include margin-page-middle();
    .headline {
      font-size: 3em;
      margin: 1em 0 .3em;
      text-transform: uppercase;
    }
    .teaser {
      color: $color-orange;
      margin-bottom: 2em;
    }
  }
  @include media-breakpoint-down(sm) {
    .headline {
      font-size: 1.8em;
      line-height: 1.3;
    }
    .teaser {
      font-size: .85em;
    }
  }
}
</style>
