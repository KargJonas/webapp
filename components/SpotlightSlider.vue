<template>
  <div v-editable="blok" class="spotlight-slider">
    <div v-if="blok.text" class="text">{{blok.text}}</div>
    <div v-swiper:swiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          :key="s._uid"
          v-for="s in blok.items"
          :style="{ 'background-image': 'url(' + $resizeImage(s.image, '700x0') + ')' }"
        >
          <div v-if="s.text" class="swiper-item-content">{{s.text}}</div>
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
};
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";

.spotlight-slider {
  margin: -20px;
  padding: 30px;
  color: #fff;
  .text {
    padding: 3rem 5rem 5rem 5rem;
    font-size: 1.6rem;
    font-family: $font-secondary;
    line-height: 1.4;
  }
  .swiper-container {
    height: 50vh;
    width: 100%;
    .swiper-slide {
      display: block;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
      &:hover {
        .swiper-item-content {
          opacity: 1;
        }
      }
      .swiper-item-content {
        position: absolute;
        width: 100%;
        bottom: 0;
        transition: opacity ease-in-out .3s;
        opacity: 0;
        display: flex;
        align-items: center;
        line-height: 1.2;
        background-color: $color-blue;
        padding: 10px;
      }
    }
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
