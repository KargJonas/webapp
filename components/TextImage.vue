<template>
  <div v-editable="blok" class="text-image">
    <div class="title">
      {{blok.title}}
    </div>
    <div class="body">
      <div class="text">
        <markdown :value="blok.text"></markdown>
      </div>
      <div class="image">
        <img :src="$resizeImage(blok.image, '700x0')" alt=""/>
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

.text-image {
  min-height: 80vh;
  margin: 0 4%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  .title {
    margin-top: 1em;
    font-weight: bold;
    font-size: 3rem;
    @include media-breakpoint-down(sm) {
      font-size: 2rem;
    }
    text-transform: uppercase;
  }
  .body {
    display: flex;
    @include media-breakpoint-down(md) {
      flex-direction: column;
    }
    .text {
      flex: 1;
      display: flex;
      line-height: 1.2;
      font-size: 1.5rem;
      @include media-breakpoint-down(sm) {
        font-size: 1rem;
        line-height: 1.4;
      }
    }
    .image {
      flex: 1;
      margin-top: 3em;
      padding-left: 3em;
      @include media-breakpoint-down(md) {
        margin-top: 1em;
        padding-left: 0;
      }
      padding-right: 0;
      img {
        margin: auto;
        display: block;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}
</style>
