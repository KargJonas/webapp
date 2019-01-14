<template>
  <div class="image-gallery">
    <lightbox
       :thumbnail="thumbnail"
       :images="urls"
       >
       <lightbox-default-loader slot="loader"></lightbox-default-loader>
    </lightbox>
  </div>
</template>

<script>

export default {
  props: ['images'],
  computed: {
    urls() {
      return this.images.map((i) => {
        return i.image
      });
    },
    thumbnail() {
      return this.images[0].image;
    }
  }
}
</script>

<style lang="scss" scoped>
.image-gallery {
  display: flex;
  justify-content: center;
  .lightbox {
    display: fixed;
    top: 0;
    z-index: 10000;
  }
}
</style>
