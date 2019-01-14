<template>
  <nuxt-link :to="'/' + blok.full_slug">
    <div class="machine-list-item">
      <div class="image">
        <img :src="$resizeImage(content.image, '320x320')" alt=""/>
      </div>
      <div class="body">
        <div class="title">
          {{content.title}}
        </div>
        <div class="subtitle">
          {{content.subtitle}}
        </div>
        <div class="teaser">
          {{content.teaser}}
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    content() {
      return this.blok.content;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';
a {
  text-decoration: none;
  color: #000;
  &:active,
  &:focus {
    color: #000;
  }
}

.machine-list-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  .image {
    flex: 1;
    padding-top: 1.4em;
    display: flex;
    img {
      display: block;
      max-height: 30vh;
    }
  }
  .body {
    flex: 2;
    padding: 20px 0;
    .title {
      font-family: $font-secondary;
      font-size: 1.8rem;
      margin-bottom: .4em;
    }
    .subtitle {
      margin:  0 0 1em 0;
    }
    .teaser {
      font-family: $font-mono;
      line-height: 1.4;
      font-size: 0.9rem;
    }
    .cta {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.9rem;
      font-family: $font-secondary;
      letter-spacing: 0.05rem;
      padding: 25px 0;
      a {
        color: $color-blue;
        text-decoration: none;
      }
    }
  }
}
</style>
