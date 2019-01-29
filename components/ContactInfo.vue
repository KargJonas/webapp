<template>
  <div v-editable="blok" class="contact-info">
    <div v-if="blok.image" class="banner" :style="{ 'background-image': 'url(' + $resizeImage(blok.image, '1600x0') + ')' }"></div>
    <div v-else class="banner-spacer"></div>
    <div class="info" v-if="blok.items && blok.items.length > 0">
      <div class="spacer"></div>
      <div v-for="i in blok.items" :key="i.uid" class="info-item">
        <sb-link :link="i.link">
          <h4 class="title">{{i.title}}</h4>
          <p class="content">{{i.content}}</p>
        </sb-link>
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

.contact-info {
  margin: 20px -20px;
  .banner {
    height: 50vh;
    background-size: cover;
    background-position: center;
  }
  .banner-spacer {
    height: 15vh;
  }
  .info {
    display: flex;
    justify-content: flex-end;
    @include media-breakpoint-down(sm) {
      flex-direction: column;
    }
    .info-item {
      @include media-breakpoint-up(md) {
        transform:translateY(-50%);
      }
      background-color: #000;
      a {
        text-decoration: none;
        color: #FFF;
        display: block;
        padding: 50px;
        @include media-breakpoint-down(sm) {
          padding: 3vh 10%;
        }
      }
      h4.title {
        margin: 0;
        font-size: 1.8rem;
        font-weight: normal;
        font-family: $font-secondary;
      }
      p.content {
        font-size: 0.9rem;
        font-family: $font-mono;
      }
    }
  }
}
</style>
