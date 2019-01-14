<template>
  <div v-editable="blok" class="about-info">
    <div class="col-start">
      <div class="headline">
        {{blok.headline}}
      </div>
      <div class="list">
        <markdown :value="blok.list"></markdown>
      </div>
    </div>
    <div class="col-end">
      <div class="content">
        <markdown :value="blok.content"></markdown>
      </div>
      <div class="image-wrapper">
        <img class="image" :src="blok.image" alt=""/>
      </div>
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

.about-info {
  display: flex;
  padding-top: 5rem;
  @include media-breakpoint-down(md) {
    padding-top: 5vh;
    flex-direction: column;
  }
  min-height: 100vh;
  position: relative;
  margin: 0 0 0 15%;
  .col-start {
    flex: 1;
    z-index: 2;
    .headline {
      color: $color-blue;
      font-weight: bold;
      @include media-breakpoint-up(lg) {
        padding: 0 3.4vw 10vh;
        font-size: 4.2vw;
      }
      @include media-breakpoint-down(md) {
        padding: 0 3.4vw 2vh;
        font-size: 1.6em;
        margin-right: 5%;
      }
      line-height: 1.2;
      letter-spacing: 0.03em;
      font-variant-ligatures: no-common-ligatures;
    }
    .list {
      background: #fff;
      padding: 5%;
      margin: 0 12%;
      font-weight: bold;
      color: $color-blue;
      font-size: 1.6vw;
      @include media-breakpoint-down(md) {
        font-size: 1.1em;
        margin: 0 0 0 5%;
        padding: 2%;
      }
      letter-spacing: .02em;
      font-variant-ligatures: no-common-ligatures;
      line-height: 1.2;
      ul {
        li {
          margin-bottom: 1.3em;
        }
      }
    }
  }
  .col-end {
    z-index: 1;
    flex: 1;
    .content {
      position: relative;
      z-index: 1;
      padding: 0 7vw 0 0;
      margin-top: 7vh;
      margin-bottom: -3%;
      font-size: 1.4vw;
      @include media-breakpoint-down(md) {
        font-size: 1em;
      }
      letter-spacing: .03em;
      line-height: 1.6;
    }
  }
  .image-wrapper {
    @include media-breakpoint-up(lg) {
      .image {
        position: relative;
        display: block;
        width: 120%;
        margin-left: -20%;
      }
    }
    @include media-breakpoint-down(md) {
      text-align: right;
      .image {
        max-height: 50vh;
        max-width: 100%;
        align-self: flex-end;
        margin-bottom: -2px;
      }
    }
  }

}
</style>
