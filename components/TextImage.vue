<template>
  <div v-editable="blok" class="text-image">
    <div class="text">
      {{blok.headline}}
      <markdown :value="blok.text"></markdown>
    </div>
    <div class="image">
      <img :src="$resizeImage(blok.image, '700x0')" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss">
.text-image {
  height: 80vh;
  margin: 0 4%;
  margin-top: 3rem;
  display: flex;
  .text {
    flex: 1;
    display: flex;
    line-height: 1.2;
    font-size: 1.5rem;
  }
  .image {
    flex: 1;
    margin-top: 3em;
    padding-left: 3em;
    padding-right: 0;
    img {
      margin: auto;
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
