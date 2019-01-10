<template>
  <div v-editable="blok" class="faq-item">
    <v-collapse-wrapper ref="wrapper" @afterToggle="updateStatus">
      <div class="toggle-title" v-collapse-toggle :class="{ active }">
        <div class="chevron">
          <svg
             height="26"
             width="26"
             id="svg11"
             version="1.1"
             viewBox="0 0 26 26"
             class="chevron-icon">
            <metadata
               id="metadata15">
              <rdf:RDF>
                <cc:Work
                   rdf:about="">
                  <dc:format>image/svg+xml</dc:format>
                  <dc:type
                     rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                  <dc:title></dc:title>
                </cc:Work>
              </rdf:RDF>
            </metadata>
            <defs
               id="defs4">
              <style
                 id="style2">
                .cls-1 {
                  fill: none;
                  stroke: #0050ff;
                  stroke-linecap: round;
                  stroke-width: 2px;
                }
              </style>
            </defs>
            <g
               transform="translate(-1156,-1483.414)"
               id="pfeil">
              <g
                 transform="rotate(-90,240,1850.5)"
                 data-name="Gruppe 4"
                 id="Gruppe_4">
                <path
                   id="Linie_12"
                   d="m 588.78945,2787.0595 a 1.0001,1.0001 0 0 0 0.99805,-1.0293 1.0001,1.0001 0 0 0 -0.30274,-0.6875 l -4.9707,-4.9707 h 21.33008 a 1.0001,1.0001 0 0 0 1.01367,-1.0156 1.0001,1.0001 0 0 0 -1.01367,-0.9844 h -21.33008 l 4.9707,-4.9707 a 1.0001,1.0001 0 0 0 0.30274,-0.7168 1.0001,1.0001 0 0 0 -1.7168,-0.6972 l -6.53906,6.539 h -0.006 a 1.0001,1.0001 0 0 0 -0.43945,0.8477 1.0001,1.0001 0 0 0 0,0.016 1.0001,1.0001 0 0 0 0.006,0.084 1.0001,1.0001 0 0 0 0.43554,0.7265 l 6.54297,6.543 a 1.0001,1.0001 0 0 0 0.71875,0.3027 z"
                   style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2px;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
              </g>
            </g>
          </svg>
        </div>
        <div class="title">
          {{blok.question}}
        </div>
      </div>
      <div class="content" v-collapse-content>
        <div class="inner-content">
          <markdown :value="blok.answer"></markdown>
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

$faq-margin-left: 2em;

.faq-item {
  margin-bottom: 5px;
  align-items: flex-start;
  .toggle-title {
    padding: 20px;
    font-family: $font-secondary;
    cursor: pointer;
    display: flex;
    .title {
      flex: 1;
      font-size: 1.4em;
      color: $color-orange;
      transition: all .3s linear;
    }
    .chevron {
      min-width: $faq-margin-left;
      .chevron-icon {
        height: 1rem;
        margin-bottom: 2px;
        transition: all .3s linear;
        fill: $color-orange;
        margin: .2em 0;
      }
    }
    &.active {
      .chevron-icon {
        transform: rotateX(180deg);
        fill: #000;
      }
      .title {
        color: #000;
      }
    }
  }
  .content {
    line-height: 1.4;
    margin-left: $faq-margin-left;
    .image {
      width: 100%;
      display: block;
    }
    .header {
      padding: 20px 0;
      display: flex;
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
