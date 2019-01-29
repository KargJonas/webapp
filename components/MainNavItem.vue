<template>
  <div class="nav-item">
    <sb-link :link="item.link" class="main-nav-item">
      <div>{{ item.name }}</div>
      <div v-if="item.children && item.children.length > 0" class="caret-down">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/></svg>
      </div>
    </sb-link>
    <div class="dropdown" v-if="item.children && item.children.length > 0">
      <div v-for="child in item.children" :key="child.id" class="child">
        <sb-link :link="child.link" class="child-nav-item">
          {{ child.name }}
        </sb-link>
      </div>
    </div>
  </div>
</template>

<script charset="utf-8">
export default {
  props: ['item', 'variant'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.nav-item {
  position: relative;
  .main-nav-item {
    display: flex;
    text-transform: uppercase;
    color: #000;
    padding: 25px 25px;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.9rem;
    white-space: nowrap;
    @media screen and (max-width: 1023px) {
      padding: 25px 10px 25px 25px;
    }
    @media screen and (max-width: 919px) {
      padding: 25px 0 25px 20px;
      font-size: 0.85rem;
    }
    &.nuxt-link-active {
      position: relative;
      @media screen and (max-width: 920px) {
        > div {
          padding-bottom: 4px;
          border-bottom: 3px solid $color-orange;
          margin-bottom: -7px;
        }
      }
      @media screen and (min-width: 920px) {
        &:before {
          color: $color-orange;
          position: absolute;
          font-size: 2.2rem;
          content: '•';
          left: 5px;
          top: 14px;
        }
      }
    }
    &:focus {
      outline:none;
    }
  }

  &.mobile {
    .dropdown {
      display: block;
      position: relative;
    }
  }
  .caret-down {
    height: 0.9em;
    padding-left: .3em;
    margin-top: .1em;
    svg {
      display: block;
      height: 100%;
    }
  }
  .dropdown {
    display: none;
    position: absolute;
    padding: 20px;
    margin-left: -28px;
    background-color: #FFF;
    min-width: 150px;
    left: 25px;
    .child {
      .child-nav-item {
        white-space: nowrap;
        display: block;
        text-transform: uppercase;
        color: #000;
        text-decoration: none;
        font-weight: bold;
        font-size: 0.9rem;
        padding: 8px;
        position: relative;
        &:focus {
          outline:none;
          &:before {
            content: "";
            position: absolute;
            width: .65em;
            height: .65em;
            border-radius: 50%;
            background-color: $color-orange;
            left: -.6em;
            top: .7em;
          }
        }
      }
    }
  }
  &:hover {
    .dropdown {
      display: block;
    }
  }
}

</style>
