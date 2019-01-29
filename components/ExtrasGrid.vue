<template>
  <div v-editable="blok" class="extras-grid-wrapper">
    <div class="headline">
      {{blok.headline}}
    </div>
    <div class="extras-grid">
      <component class="extra-item" :key="blok._uid" v-for="blok in blok.extras" :blok="blok" :is="blok.component"></component>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.extras-grid-wrapper {
  margin: 0 4% 2em 4%;
  .headline {
    margin-bottom: 1em;
    position: relative;
    font-size: 2.8rem;
    line-height: 1.3;
    font-weight: bold;
    font-family: $font-primary;
    letter-spacing: .05em;
    text-transform: uppercase;
    width: 50%;
    @include media-breakpoint-down(lg) {
      font-size: 2.35rem;
    }
    @include media-breakpoint-down(xs) {
      font-size: 1.8rem;
    }
  }
}

.extras-grid {
  column-count: 3;
  column-gap: 2em;
  @include media-breakpoint-down(md) {
    column-count: 2;
  }
  @include media-breakpoint-down(sm) {
    column-count: 1;
  }
}

.extra-item {
  background-color: #eee;
  display: inline-block;
  margin: 0 0 2em;
  width: 100%;
}
</style>
