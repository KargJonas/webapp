<template>
  <div class="nav-item">
    <!-- if item has children -->
    <div
      v-if="item.children && item.children.length > 0"
      class="main-nav-item">
      <div class="level-entry" @click="openLayer()">
        {{ item.name }}
      </div>
      <transition name="fadefromright" v-if="item.children && item.children.length > 0">
        <div :key="item._uid" class="nav-layer" v-if="active">
          <div class="level-header">
            <div class="levelUp" @click="closeLayer()">
              <svg
                class="back-icon"
                viewBox="0 0 32 32"
                height="32"
                width="32">
                <g>
                  <path d="M 26.894531 3.1035156 A 2.0002 2.0002 0 0 0 25.988281 3.3164062 L 4.6953125 13.679688 A 2.0003715 2.0003715 0 0 0 3.5742188 15.378906 A 2.0002 2.0002 0 0 0 4.6230469 17.462891 L 25.914062 28.927734 A 2.0002 2.0002 0 1 0 27.810547 25.40625 L 9.7382812 15.675781 L 27.738281 6.9140625 A 2.0002 2.0002 0 0 0 26.894531 3.1035156 z " />
                </g>
              </svg>
            </div>
            <div class="close" @click="closeNav()">
              <svg
                class="close-icon"
                viewBox="0 0 32 32"
                height="32"
                width="32">
                <g>
                  <path d="M 5.5488281 3.8535156 A 2.0002 2.0002 0 0 0 4.15625 7.2890625 L 13.388672 16.519531 L 4.15625 25.751953 A 2.0002 2.0002 0 1 0 6.984375 28.580078 L 16.216797 19.347656 L 25.449219 28.580078 A 2.0002 2.0002 0 1 0 28.277344 25.751953 L 19.044922 16.519531 L 28.277344 7.2890625 A 2.0002 2.0002 0 0 0 26.824219 3.8554688 A 2.0002 2.0002 0 0 0 25.449219 4.4589844 L 16.216797 13.691406 L 6.984375 4.4589844 A 2.0002 2.0002 0 0 0 5.5488281 3.8535156 z " />
                </g>
              </svg>
            </div>
          </div>
          <sb-link :link="item.link" class="child-nav-item main-item">
            <div>{{ item.name }}</div>
          </sb-link>
          <div v-for="child in item.children" :key="child.id" class="child">
            <sb-link :link="child.link" class="child-nav-item">
              {{ child.name }}
            </sb-link>
          </div>
        </div>
      </transition>
    </div>
    <!-- else -->
    <sb-link v-else :link="item.link" class="main-nav-item">
      {{ item.name }}
    </sb-link>
  </div>
</template>

<script charset="utf-8">
export default {
  props: ['item'],
  data() {
    return {
      active: false
    }
  },
  methods: {
    openLayer() {
      this.active = true;
    },
    closeLayer() {
      this.active = false;
    },
    closeNav() {
      this.active = false;
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.nav-item {
  display: flex;
  flex-direction: column;
  .main-nav-item, .child-nav-item {
    display: block;
    padding: 3vh 4%;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: .08em;
    &.nuxt-link-active {
      color: $color-orange;
    }
  }
  .main-nav-item {
    color: #000;
    cursor: pointer;
    .level-entry {
      position: relative;
      &:before {
        position: absolute;
        content: "";
        border-top: #000 0.15em solid;
        border-right: #000 0.15em solid;
        transform: rotateZ(45deg);
        transform-origin: top right;
        height: .3em;
        width: .3em;
        margin-top: .4em;
        right: 4%;
      }
    }
    .child-nav-item {
      color: #fff;
      &.nuxt-link-active {
        color: $color-yellow;
      }
    }
    .nav-layer {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: $color-blue;
      color: #fff;
      .level-header {
        display: flex;
        justify-content: space-between;
        .levelUp {
          padding: 3vh 4%;
        }
        .close {
          padding: 3vh 4%;
        }
        .close-icon, .back-icon {
          width: 1.1em;
          fill: #fff;
        }
      }
    }
  }


  .fadefromright-enter-active, .fadefromright-leave-active {
    transition: all .3s;
  }
  .fadefromright-enter, .fadefromright-leave-to {
    opacity: 0;
    transform: translateX(50vw);
  }
}

</style>
