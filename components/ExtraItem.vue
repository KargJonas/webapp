<template>
  <div v-editable="blok">
    <div class="content">
      <div class="header">
        <h2 class="title">{{blok.title}}</h2>
        <div class="icon">
          <icon v-if="blok.icon" :name="blok.icon" />
        </div>
      </div>
      <div class="body">
        <markdown class="text" v-if="blok.description" :value="blok.description"></markdown>
      </div>
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
.content {
  background-color: #FFF;
  padding: 1.5em;
  box-shadow: darken($color-bright-bg,5%) 10px 8px;
  .header {
    display: flex;
    align-items: flex-start;
    .title {
      flex: 5;
      font-weight: normal;
      margin: 0;
      font-family: $font-secondary;
      color: #0069aa;
      min-height: 2em;
    }
    .icon {
      flex: 1;
      text-align: right;
      svg {
        height: 2em;
        fill: $color-orange;
      }
    }
  }
  .body {
    font-size: 1rem;
    letter-spacing: 0.03em;
    line-height: 1.4;
  }
}
</style>
