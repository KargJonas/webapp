<template>
  <div v-editable="blok" class="faq-block">
    <div class="downloads">
      <div class="headline">
        Downloads
      </div>
      <div class="download-list">
        <download-item v-for="i in blok.downloads" :blok="i" :key="i.uid"></download-item>
      </div>
    </div>
    <div class="faqs">
      <faq-item v-for="i in blok.faqs" :blok="i" :key="i.uid"></faq-item>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.faq-block {
  display: flex;
  @include media-breakpoint-down(sm) {
    flex-direction: column-reverse;
  }
  align-items: flex-start;
  @include margin-page-middle();
  .downloads {
    padding: 25px;
    flex: 1;

    .headline {
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: .8em;
    }

    background-color: #FFF;
    .download-list {
    }
  }

  .faqs {
    flex: 4;
    margin-bottom: 3vh;
  }
}
</style>
