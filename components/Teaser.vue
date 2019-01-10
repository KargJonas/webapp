<template>
  <div v-editable="blok" class="teaser-item">
    <div class="header">
      <h2 class="headline">{{blok.headline}}</h2>
      <div class="subline">
        <code class="hr">{{blok.subline}}</code>
        <sb-link v-if="blok.link" :link="blok.link">Alle Kurse</sb-link>
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

.teaser-item {
  .header {
    @include margin-page-middle();
    .headline {
      font-size: 3rem;
      text-transform: uppercase;
      flex: 1;
    }
    .subline {
      color: $color-orange;
      display: flex;
      .hr {
        flex: 1;
      }
      .link {
        font-size: 1.3rem;
        font-family: $font-secondary;
        text-decoration: none;
        color: #000;
      }
    }
  }
}
</style>
