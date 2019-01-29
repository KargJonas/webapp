<template>
  <div v-editable="blok" class="image-slideshow-blue">
    <div v-if="blok.text" class="text">
      {{blok.text}}
    </div>
    <div v-swiper:swiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="s._uid" v-for="s in blok.items" :style="{ 'background-image': 'url(' + $resizeImage(s.image, '700x0') + ')' }">
        </div>
      </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    swiperOption() {
      return {
        slidesPerView: this.num,
        spaceBetween: this.spaceBetween,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    },
    spaceBetween() {
      if (process.client && window && window.innerWidth) {
        if (window.innerWidth < 786) {
          return 0;
        }
      }
      return 30;
    },
    num() {
      if (process.client && window && window.innerWidth) {
        if (window.innerWidth < 786) {
          return 1;
        }
      }
      return 3;
    },
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.image-slideshow-blue {
  position: relative; // needed for z-index (blue dashed stripe)
  margin: 0 -20px;
  padding: 30px;
  background-color: $color-blue-intro;
  color: #FFF;
  .text {
    padding: 3rem 5rem 5rem 5rem;
    font-size: 1.8rem;
    @include media-breakpoint-down(md) {
      font-size: 1.2rem;
      padding: 2vh 4vw;
    }
    font-family: $font-secondary;
    line-height: 1.4;
    letter-spacing: 1.4px;
  }
  .swiper-container {
    height: 50vh;
    .swiper-slide {
      display: block;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    padding-bottom: 5vw;
  }
  .swiper-button-prev,
  .swiper-button-next {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: $color-yellow;
    background-size: 12px;
  }
}
</style>
