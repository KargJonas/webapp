<template>
  <div v-editable="blok" class="intro-list">
    <div class="content">
      <div class="primary-col">
        <div class="headline">
          <h3 class="headline-text">{{blok.headline}}</h3>
        </div>
        <div class="dashed-line-blue"></div>
        <div class="intro-items">
          <div
            class="intro-item-title"
            :class="(selected == i._uid ? 'is-selected' : '')"
            v-for="i in blok.items"
            @click="updateSelected(i)">
              <div class="text">
                {{i.title}}
              </div>
              <div class="arrow">
              </div>
          </div>
        </div>
      </div>
      <div class="secondary-col">
        <div class="intro-text">
          <transition name="fadefromleft">
            <div v-for="(i, k) in blok.items" :key="k" v-if="selected == i._uid" class="intro-item-text">
                {{i.text}}
            </div>
          </transition>
        </div>
        <div class="intro-bg-image" :class="(selected ? 'has-content' : '')" :style="'background-image: url('+$resizeImage(blok.image, '700x0')+')'" :alt="blok.headline">
        </div>
        <svg class="circle" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="none" stroke-width="1"/></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  created() {
  },
  data() {
    return {
      selected: null
    }
  },
  methods: {
    updateSelected(e) {
      this.selected = e._uid;
    }
  }

}
</script>

<style lang="scss">
@import '../assets/scss/styles.scss';
.intro-list {
  background-image: url(~assets/img/intro-list-3d-object.svg);
  background-repeat: no-repeat;
  background-size: 30vh;
  background-position: bottom -8vw left -14vw;
  @include media-breakpoint-up(lg) {
    background-size: 40vh;
    background-position: bottom left -6vw;
    margin-top: -87vh;
  }
  .content {
    display: flex;
    align-items: flex-start;
    position: relative;
    @include margin-page-wide();
    .primary-col, .secondary-col {
      flex-grow: 1;
      @include media-breakpoint-up(lg) {
        width: 50%;
      }
      @include media-breakpoint-down(md) {
        width: 100%;
      }
    }
    @include media-breakpoint-down(md) {
      margin: 0;
      flex-direction: column;
    }
    .primary-col {
      .headline {
        background: $color-blue-intro;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 5%;
        height: 50vh;
        .headline-text {
          text-transform: uppercase;
          margin: 0;
          font-size: 4vw;
          line-height: 1.3;
          width: 40vw;
        }
        @include media-breakpoint-down(md) {
          height: inherit;
          min-height: 20vh;
          padding: 5%;
          .headline-text {
            font-size: 2rem;
            letter-spacing: .05rem;
          }
        }

      }
      .intro-items {
        margin: 10vh 0 30vh 13vw;
        @include media-breakpoint-down(md) {
          margin: 0;
          padding: 5vh 0 5vh 20%;
          overflow: hidden;
          position: relative;
        }
        .intro-item-title {
          display: flex;
          cursor: pointer;
          padding: 2vh 0;
          justify-content: stretch;
          letter-spacing: 0.03em;
          transition: color .3s linear;
          &:hover {
            color: $color-blue-intro;
          }
          @include media-breakpoint-up(lg) {
            font-size: 1.5vw;
            .arrow {
              transition: all .3s linear;
              border-top: 0.12vw solid $color-blue-intro;
              margin: 0.8vw 10% 0 3%;
              width: 0%;
              &:before {
                content: "";
                top: 0;
                right: 0;
                position: absolute;
                transform: rotate(45deg);
                transform-origin: top right;
                margin-top: -.04vw;
                margin-right: -.05vw;
              }
            }
            &.is-selected {
              .arrow {
                display: block;
                align-self: stretch;
                position: relative;
                width: 10px;
                flex-grow: 1;
                &:before {
                  border-top: 0.12vw solid $color-blue-intro;
                  border-right: 0.12vw solid $color-blue-intro;
                  width: 0.4vw;
                  height: 0.4vw;
                }
              }
            }
          }
          @include media-breakpoint-down(md) {
            .arrow {
              position: absolute;
              transition: width .3s linear .3s, height .2s linear 0s;
              border-top: .1em solid $color-blue-intro;
              border-right: .1em solid $color-blue-intro;
              margin: 1.3em 10% 0 0;
              width: 2%;
              height: 0;
//              transform: rotate(45deg);
              transform-origin: bottom left;
              pointer-events: none;
              &:before {
                content: "";
                top: 0;
                right: 0;
                position: absolute;
                transform: rotate(45deg);
                transform-origin: top right;
                margin-top: -.05em;
                margin-right: -.05em;
              }
            }
            &.is-selected {
              .arrow {
                transition: width .3s linear, height .2s linear .3s;
                display: block;
                align-self: stretch;
                position: absolute;
                width: 70%;
                height: 20vh;
                flex-grow: 1;
                // &:before {
                //   border-top: 0.1em solid $color-blue-intro;
                //   border-right: 0.1em solid $color-blue-intro;
                //   width: 0.4em;
                //   height: 0.4em;
                // }
              }
            }

          }
        }
      }
      .dashed-line-blue {
        background-image: url(~assets/img/dashed-bg-blue.svg);
        background-size: 100% auto;
        background-position: 0 -10px;
        background-repeat: repeat-y;
        background-size: 1.8vw;
        @include media-breakpoint-up(lg) {
          height: 3000px;
          left: 10%;
        }
        @include media-breakpoint-down(md) {
          background-size: 12px;
          height: 3000px;
          left: 6%;
        }
        width: 4%;
        position: absolute;
      }
    }
    .secondary-col {
      position: relative;
      @include media-breakpoint-up(lg) {
        margin-top: 27vh;
        height: 60vh;
      }
      display: flex;
      align-items: stretch;
      @include media-breakpoint-down(md) {
        margin: 0;
        height: 40vh;
      }
      .intro-bg-image {
        position: relative;
        max-width: 100%;
        transition: opacity .2s linear;
        z-index: 2;
        background-color: #aaa;
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
        &.has-content {
          opacity: .2;
        }
      }
      .intro-text {
        position: absolute;
        overflow: hidden;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 3;
        display: flex;
        align-items: center;
        .intro-item-text {
          position: absolute;
          padding: 0 15%;
          line-height: 1.5;
          font-size: 1.6vw;
          @include media-breakpoint-down(md) {
            font-size: 1em;
            padding: 0 5% 0 22%;
          }
          font-weight: 700;
        }
      }
      .circle {
        position: absolute;
        stroke: $color-yellow;
        right: -2vw;
        bottom: -4vw;
        width: 6vw;
        height: 6vw;
        z-index: 1;
      }
    }
  }
  .fadefromleft-enter-active, .fadefromleft-leave-active {
    transition: all .3s;
  }
  .fadefromleft-enter, .fadefromleft-leave-to {
    opacity: 0;
    transform: translateX(-50vw);
  }
}
</style>
