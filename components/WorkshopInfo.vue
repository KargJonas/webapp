<template>
  <div v-editable="blok" class="workshop-info">
    <div class="teaser-content">
      <h2 v-if="blok.subtitle" class="headline">
        {{blok.subtitle}}
      </h2>
      <div v-if="blok.teaser && !blok.info" class="teaser">
        {{blok.teaser}}
      </div>
      <markdown v-if="blok.info" :value="blok.info" class="info">
      </markdown>
      <a v-if="blok.link && blok.link.cached_url && blok.link.cached_url != '' " :href="blok.link.cached_url" class="link" target="_blank">{{linktitle}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    linktitle() {
     return  this.blok.linktitle || 'Teilnehmen!'
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.workshop-info {
  color: #000;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  .teaser-content {
    @include margin-page-wide();
    @include media-breakpoint-up(md) {
      margin: 0 100px;
    }
    flex-direction: column;
    position: relative;
    display: flex;
    align-items: flex-start;
    .headline {
      position: relative;
      @include media-breakpoint-up(md) {
        max-width: 50%;
        font-size: 2.8rem;
      }
      @include media-breakpoint-down(sm) {
        margin: 3vh 5%;
      }
      line-height: 1.5;
      font-family: $font-secondary;
    }
    .teaser, .info {
      max-width: 90%;
      @include media-breakpoint-up(md) {
        margin-left: 25%;
      }
      font-weight: normal;
      font-family: $font-primary;
      line-height: 1.8;
      font-size: 1.1rem;
      @include media-breakpoint-down(sm) {
        line-height: 1.4;
        font-size: 1rem;
        margin: 0 0 0 5%
      }

    }
    .link {
      background-color: $color-orange;
      margin: 2% 0 0 5%;
      text-transform: uppercase;
      @include media-breakpoint-up(md) {
        margin-left: 25%;
      }
      color: #fff;
      padding: .7em .8em;
      font-weight: 800;
    }
  }
}
</style>
