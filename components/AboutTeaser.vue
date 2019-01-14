<template>
  <div v-editable="blok" class="about-teaser">
    <div class="teaser-content">
      <svg
         xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
         xmlns:dc="http://purl.org/dc/elements/1.1/"
         xmlns:cc="http://creativecommons.org/ns#"
         xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
         xmlns:svg="http://www.w3.org/2000/svg"
         xmlns="http://www.w3.org/2000/svg"
         class="start-down-arrow"
         version="1.1"
         viewBox="0 0 100 100"
         height="100"
         width="100"
         onclick="window.scrollTo({top: document.getElementById('start').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 64, left: 0, behavior: 'smooth'})">
        <g
           transform="translate(0,-270.54165)">
          <path
             d="m 50,270.54165 a 50,50 0 0 0 -50,50 50,50 0 0 0 50,50 50,50 0 0 0 50,-50 50,50 0 0 0 -50,-50 z m -2.576172,13.44531 h 5.160156 v 60.22071 l 13.59961,-13.36329 3.615234,3.67969 -19.984375,19.63867 -19.611328,-19.61132 3.646484,-3.64844 13.574219,13.57422 z"
             style="opacity:1;vector-effect:none;fill:#eae222;fill-opacity:1;fill-rule:nonzero;paint-order:normal" />
        </g>
      </svg>
      <div id="start" class="col-start">
        <h2 v-if="blok.headline" class="headline">
          <svg class="circle" xmlns="http://www.w3.org/2000/svg" width="10mm" height="10mm" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4.758" fill="none" stroke-width=".5"/></svg>
          {{blok.headline}}
        </h2>
      </div>
      <div class="col-end">
        <p v-if="blok.text" class="text">
          <markdown :value="blok.text"></markdown>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.about-teaser {
  // height: 100vh;
  color: #000;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  .teaser-content {
    max-width: 100%;
    position: relative;
    height: calc(100% - 64px);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-image: url(~assets/img/about-teaser-bg1.svg);
    background-repeat: repeat-y;
    background-position: 71% -10px;
    background-size: 1.8vw;
    @include media-breakpoint-up(lg) {
      padding-bottom: 85vh;
    }
    @include media-breakpoint-down(sm) {
      background-size: 12px;
    }

    .col-start {
      display: flex;
      align-items: flex-start;
      margin: 15vh 8vw 0;
      .headline {
        font-size: 1.2em;
        @include media-breakpoint-up(lg) {
          width: 45vw;
          font-size: 2.8vw;
        }
        position: relative;
        margin: 0 3vw;
        letter-spacing: 2px;
        line-height: 1.5;
        font-weight: 600;
        font-family: $font-secondary;
        .circle {
          position: absolute;
          stroke: $color-yellow;
          left: -4.4vw;
          top: -5vw;
          width: 10vw;
          height: 10vw;
          z-index: -1;
        }
      }
    }
    .col-end {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .text {
        @include media-breakpoint-up(lg) {
          width: 35vw;
          margin-right: 10vw;
          margin-bottom: 10%;
        }
        @include media-breakpoint-down(md) {
          margin: 3vh 15% 10vh;
          font-size: 1rem;
          line-height: 1.6;
        }
        margin-top: 0;
        font-weight: normal;
        font-family: $font-primary;
        line-height: 1.6;
        font-size: 1.4vw;
        letter-spacing: .03em;
      }
    }
    /*
    .link {
      font-family: Helvetia, Arial;
      text-decoration: none;
      color: #00F;
      text-transform: uppercase;
      font-weight: bold;
      border: none;
      background: none;
      float: right;
      font-size: 1rem;
      padding: 5px 10px;
      cursor: pointer;
      &:hover,
      &:focus {
        outline: 1px solid #00F;
      }
    }
    */
  }
  .start-down-arrow {
    width: 18vh;
    max-width: 20vw;
    height: 18vh;
    max-height: 20vw;
    position: absolute;
    right: 13%;
    margin-top: -2vh;
    cursor: pointer;
  }
}
</style>
