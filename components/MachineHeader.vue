<template>
  <div class="machine-header">
    <div class="header-image" :style="{ 'background-image': 'url(' + $resizeImage(machine.image, '1600x0') + ')' }">
    </div>
    <div class="header-title" v-if="machine.title">
      <div class="tags">
        <span v-for="(tag, index) in tags">
          {{tag}}<span v-if="index+1 < tags.length">, </span>
        </span>
      </div>
      <div class="title">{{machine.title}}</div>
      <div class="subtitle">{{machine.subtitle}}</div>
      <machine-status class="status" v-if="machine.fabmanId && hasUser" :id="machine.fabmanId"></machine-status>
    </div>
  </div>
</template>

<script>
import MachineStatus from '@/components/MachineStatus';

export default {
  components: {
    MachineStatus
  },
  props: ['story'],
  computed: {
    machine() {
      return this.story.content;
    },
    tags() {
      return this.story.tag_list;
    },
    hasUser() {
      return !!this.$store.state.user;
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.machine-header {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: stretch;
  align-content: stretch;
  position: relative;
  @include margin-page-wide();
  background-color: #555;
  margin-bottom: 10vh;
  .header-image {
    min-height: calc(50vh);
    @include media-breakpoint-down(xs) {
      min-height: calc(30vh);
    }
    width: 100%;
    background-size: cover;
    background-position: center;
    // product images with white background don't look good in this layout
    // -> make them transparent inside dark grey parent.
    // can be removed when the images get more colorful.
    opacity: .9;
  }
  .header-title {
    position: relative;
    @include media-breakpoint-up(md) {
      position: absolute;
      right: 0;
      bottom: 0;
    }
    background-color: #FFF;
    padding: 7vh;
    min-width: 60%;
    .tags {
      color: $color-blue;
      text-transform: uppercase;
      margin-bottom: .8rem;
      letter-spacing: 0.05em;
      font-weight: 400;
    }
    .title {
      margin: 0 0 .8rem;
      font-size: 1.5rem;
      @include media-breakpoint-up(md) {
        font-size: 2.5rem;
      }
      font-family: 'Chakra Petch';
      font-weight: bold;
    }
    .subtitle {
      font-size: .9rem;
      letter-spacing: .05em;
    }
    .status {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>
