<template>
  <div v-editable="blok" class="job-opening">
    <v-collapse-wrapper ref="wrapper" @afterToggle="updateStatus">
      <div class="toggle-title" v-collapse-toggle :class="{ active }">
        <div class="title">
          {{blok.title}}
        </div>
        <div class="chevron">
          <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="33.26" height="20.409" viewBox="0 0 8.8 5.4"><path d="M.42.48L4.4 4.46 8.38.48" fill="none" stroke="#000" stroke-width="1.3"/></svg>
        </div>
      </div>
      <div class="content" v-collapse-content>
        <div class="inner-content">
          <img class="image" v-if="blok.image" :src="$resizeImage(blok.image, '1600x400')" alt=""/>
          <div class="header">
            <div class="col-title">
              <div class="title">{{blok.title}}</div>
              <div class="subtitle">{{blok.subtitle}}</div>
            </div>
            <div class="col-button">
              <a href="mailto:office@grandgarage.eu"class="apply-button">Bewerben</a>
            </div>
          </div>
          <markdown :value="blok.description"></markdown>
        </div>
      </div>
    </v-collapse-wrapper>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  data() {
    return {
      active: false
    }
  },
  methods: {
    updateStatus(e) {
      this.active = e.status;
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.job-opening {
  margin-bottom: 5px;
  background-color: #FFF;
  .toggle-title {
    padding: 20px;
    font-family: $font-secondary;
    cursor: pointer;
    display: flex;
    .title {
      flex: 1;
    }
    .chevron {
      .chevron-icon {
        height: 0.5rem;
        margin-bottom: 2px;
      }
    }
    &.active {
      .chevron-icon {
        transform: rotate(180deg);
      }
    }
  }
  .content {
    .image {
      width: 100%;
      display: block;
    }
    .header {
      padding: 20px 0;
      display: flex;
      @include media-breakpoint-down(sm) {
          flex-direction: column;
      }
      .col-title {
        flex: 1;
        .title {
          font-family: $font-secondary;
          color: $color-blue-alt;
          font-size: 1.6rem;
          margin-bottom: 5px;
        }
        .subtitle {
          font-size: 1rem;
        }
      }
      .col-button {

        .apply-button {
          font-size: 1.2rem;
          text-transform: uppercase;
          font-weight: bold;
          padding: 1rem 2rem;
          border: none;
          background-color: $color-orange;
          color: #FFF;
          cursor: pointer;
          display: inline-block;
          margin-top: .2rem;
          @include media-breakpoint-down(sm) {
            margin-top: 1rem;
          }
        }
      }
    }
    &.v-collapse-content {
      max-height: 0;
      transition: max-height .3s ease-out;
      overflow: hidden;
      padding: 0;
    }
    &.v-collapse-content-end {
      transition:max-height .3s ease-in;
      max-height: 200vh;
    }
    .inner-content {
      padding: 0 20px 20px 20px;
    }
  }
}
</style>
