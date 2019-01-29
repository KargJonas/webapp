<template>
  <div v-editable="blok" class="download-item">
    <a class="filelink":href="blok.file">
      <div class="title">{{blok.name}}</div>
      <div class="subtitle">
        {{filename}}
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  created() {
  },
  computed: {
    filename() {
      let tokens = this.blok.file.split('/');
      return tokens[tokens.length-1];
    },
    extension() {
      let tokens = this.blok.file.split('.');
      return tokens[tokens.length-1];
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.download-item {
  margin-bottom: 1rem;
  .filelink {
    color: inherit;
  }
  .title {
    font-size: 1rem;
    text-transform: uppercase;
    color: $color-orange;
    font-weight: bold;
    margin-bottom: .2rem;
  }
  .subtitle {
    font-size: .75rem;
  }
}
</style>
