<template>
  <div v-editable="machine" class="machine-page">
    <machine-header :story="story"></machine-header>
    <div class="body">

      <div class="headline">{{machine.headline}}</div>

      <!-- <div class="teaser">
        {{machine.teaser}}
      </div> -->
      <div class="description">
        <markdown :value="machine.description"></markdown>
      </div>
      <ul class="feature-list">
        <li class="feature-item" v-for="(i, index) in machine.features" v-bind:key="index">
          <div class="title">
            {{i.title}}
          </div>
          <div class="text">
            {{i.text}}
          </div>
        </li>
      </ul>
      <!--
      <div class="images" v-if="machine.images && machine.images.length > 0" >
        <image-gallery :images="machine.images" name="test"></image-gallery>
      </div>
      -->
    </div>
  </div>
</template>

<script>
import MachineHeader from '@/components/MachineHeader';

export default {
  components: {
    MachineHeader
  },
  props: ['story'],
  computed: {
    machine() {
      return this.story.content;
    },
    tags() {
      return this.story.tag_list;
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.machine-page {
  .body {
    font-family: $font-mono;
    @include margin-page-middle();
    .headline {
      font-family: $font-primary;
      font-weight: 600;
      font-size: 1.8em;
      @include media-breakpoint-up(sm) {
        font-size: 2.8em;
      }
      letter-spacing: .03em;
      white-space: pre-wrap;
      line-height: 1.24;
      margin-bottom: 4vh;
    }
    .teaser {
      font-weight: bold;
    }
    .description {
      font-size: .9rem;
      line-height: 1.4;
      margin-bottom: 4vh;
      @include media-breakpoint-up(md) {
        width: 70%;
      }
    }
    .feature-list {
      color: $color-blue;
      display: grid;
      @include media-breakpoint-up(sm) {
        grid-template-columns: 50% 50%;
      }
      margin: 0;
      padding: 1em;
      max-width: 80em;
      .feature-item {
        margin: 0;
        margin-bottom: 4vh;
        @include media-breakpoint-up(sm) {
          padding-right: 20%;
        }
        font-size: .9rem;
        line-height: 1.4;
        .title {
          font-weight: 700;
          text-transform: uppercase;
        }
        .text {

        }
      }
    }
  }
}
</style>
