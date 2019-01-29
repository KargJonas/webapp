<template>
  <div>
    <div class="preview-wrapper">
      <div class="member-preview">
        <nuxt-link v-if="story" class="story" :to="'/' + story.full_slug">
          <h2 class="name">{{member.name}}</h2>
          <div class="info">
            <p class="title">{{member.title}}</p>

            <div class="email" v-if="member.email">
              <img src="~/assets/img/icons/envelope.svg">
              <p>{{member.email}}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["story"],
  computed: {
    member() {
      return this.story.content;
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles.scss";

.preview-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  @include media-breakpoint-up(md) {
    min-height: 130px;
  }
  .phone, .email {
    display: none;
  }


  .member-preview {
    width: 100%;
    position: relative;
    @include media-breakpoint-down(sm) {

      padding: 3vh 0;
      border-bottom: 1px dashed #aaa;
      &:before {
        content: "";
        position: absolute;
        border-top: #000 0.15em solid;
        border-right: #000 0.15em solid;
        transform: rotateZ(45deg);
        transform-origin: top right;
        height: .3em;
        width: .3em;
        right: 2%;
        top: 50%;
      }
    }

    .phone, .email {
      img {
        margin: 7px 15px 0 0;
        width: auto;
        height: .9em;
      }
    }

    .story {
      display: block;
      cursor: pointer;
      text-decoration: none;
      color: #000;

      @include media-breakpoint-up(md) {
        padding: 30px;
      }

      .banner {
        height: 200px;
        background-size: cover;
        background-position: center;
      }

      .name {
        margin: 0 0 20px 0;
        font-size: 1.5rem;
        font-family: $font-secondary;
      }

      .info {
        p {
          margin: 6px 0 0 0;
        }

        font-size: 1rem;
        font-family: $font-mono;
      }
    }
  }
  @include media-breakpoint-up(md) {
    .member-preview:hover {
      background-color: $color-yellow;

      .title {
        display: none;
      }

      .phone, .email {
        display: flex;
      }
    }
  }
}
</style>
