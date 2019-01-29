<template>
  <div v-editable="blok" class="info-box">
    <div class="box-content">
      <div class="row">
        <h2 v-if="blok.title" class="title">
          {{blok.title}}
        </h2>
      </div>
      <div class="row">
        <div class="text">
          <markdown :value="blok.text"></markdown>
          <div class="image">
            <img :src="$resizeImage(blok.image, '500x0')" alt=""/>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  methods: {
    register() {
      this.$store.dispatch('setSidebar', 'register');
    }
  },
  computed: {
    noUser() {
      return !this.$store.state.user;
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.info-box {
  .box-content {
    margin: 50px 0;
    @include margin-page-middle();
    display: flex;
    flex-direction: column;
    .title {
      position: relative;
      font-size: 2.8rem;
      line-height: 1.5;
      font-weight: bold;
      font-family: $font-primary;
      letter-spacing: .05em;
      text-transform: uppercase;
      width: 50%;
    }
    .row {
      display: flex;
      flex-direction: column;
      .image {
        flex: 1;
        img {
          display: block;
          max-width: 100%;
          height: auto;
          max-height: 30vh;
        }
      }
      .text {
        flex: 2;
        padding: 0 5%;
        p {
          font-size: 1rem;
          letter-spacing: 0.03em;
          line-height: 1.4;
          margin-top: 0;
        }
        .register-button {
          button {
            outline: none;
            cursor: pointer;
            font-size: 1.2em;
            font-weight: bold;
            color: #FFF;
            border: none;
            padding: 15px;
            background-color: $color-orange;
            margin: 1em 0;
          }
        }
      }
    }
  }
}

/*
.info-box {
  height: 100vh;
  color: #000;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  .box-content {
    position: relative;
    height: 100%;
    display: flex;
    .col-start {
      flex: 9;
      display: flex;
      align-items: flex-start;
      .circle {
        position: absolute;
        stroke: $color-yellow;
        left: 0;
        transform: scale(3) translateX(20px) translateY(20px);
        z-index: -1;
      }
      .dot {
        position: absolute;
        right: 0;
        transform: scale(1.2) translateX(-75px) translateY(-200px);
        z-index: 2;
      }
    }
    .col-end {
      flex: 16;
      display: flex;
      align-items: flex-end;
      .text {
        padding: 5rem;
        font-weight: normal;
        font-family: $font-primary;
        line-height: 1.8;
        font-size: 1.1rem;
      }
    }
  }
}
*/
</style>
