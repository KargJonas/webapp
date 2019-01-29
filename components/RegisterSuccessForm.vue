<template>
  <div class="register-success-form">
    <div class="letter">
      <svg
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 300"
      class="letter-icon">
        <g transform="translate(0,-822.51962)">
          <path d="M 27.837207,840.64353 C 12.515153,840.64353 0,853.35372 0,868.91734 v 197.92576 c 0,15.5636 12.515153,28.2738 27.837207,28.2738 H 372.16504 c 15.32205,0 27.83496,-12.7102 27.83496,-28.2738 V 868.91734 c 0,-15.56362 -12.51291,-28.27381 -27.83496,-28.27381 z m 0,11.62652 H 372.16504 c 9.17891,0 16.3889,7.32367 16.3889,16.64729 v 197.92576 c 0,9.3237 -7.20999,16.6473 -16.3889,16.6473 H 27.837207 c -9.178916,0 -16.391134,-7.3236 -16.391134,-16.6473 V 868.91734 c 0,-9.32362 7.212218,-16.64729 16.391134,-16.64729 z" />
          <path
             d="m 190.95329,883.25423 -32.61881,15.53823 v 16.99274 h 86.83438 v -17.42053 l -54.21557,-15.11044" />
          <path
             d="m 37.23327,872.71867 a 5.7236092,5.8138464 0 0 0 -3.789276,10.27995 L 179.33,1009.8936 c 10.74917,9.3498 27.17938,9.3498 37.92853,0 L 363.14232,882.99862 a 5.7236092,5.8138464 0 1 0 -7.44443,-8.83118 L 209.81187,1001.0646 c -6.1386,5.3396 -16.89882,5.3396 -23.03744,0 L 40.888412,874.16744 a 5.7236092,5.8138464 0 0 0 -3.655142,-1.44877 z" />
          <path d="m 286.44021,976.49452 a 5.7236092,5.8138464 0 0 0 -4.02625,9.96657 l 72.94188,74.68901 a 5.7236092,5.8138464 0 1 0 8.12627,-8.1884 l -72.94189,-74.68914 a 5.7236092,5.8138464 0 0 0 -4.10001,-1.77804 z m -176.46625,0.002 a 5.7236092,5.8138464 0 0 0 -3.92788,1.77577 l -72.941892,74.68911 a 5.7236092,5.8138464 0 1 0 8.126265,8.1884 l 72.941887,-74.68903 a 5.7236092,5.8138464 0 0 0 -4.19838,-9.96429 z" />
        </g>
      </svg>
    </div>
    <h3 class="headline">Next Step: Emails checken!</h3>
    <div class="info">
      <p>Wir haben dir eine Mail mit einem Bestätigungslink geschickt.</p>
      <p>Wenn du deinen Account bestätigt hast kannst du ab dem 1.3.2019 eine Mitgliedschaft in deinem Profil abschließen.</p>
      <!-- <p>Sobald du deinen Account bestätigt hast kannst du in deinem Profil eine Mitgliedschaft abschließen.</p> -->
    </div>
    <button @click="close">Schließen</button>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    close() {
      this.$store.dispatch('setSidebar', null);
    },
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";

.register-success-form {
  margin: 0 -10px;
  padding: 50px;
  background-color: $color-bright-bg;
  .headline {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 15px;
    font-family: $font-secondary;
  }
  .letter {
    max-width: 30%;
    fill: $color-blue;
    .letter-icon {
      max-width: 100%;
      height: auto;
    }
  }
  .info {
    margin: 20px 0;
    font-size: 0.9em;
    line-height: 1.3;
  }
  button {
    background-color: $color-orange;
    color: #FFF;
    border: 1px solid lighten($color-orange, 10);
    padding: 7px 13px 9px;
    line-height: 1;
    outline: none;
    &:focus {
      background-color: lighten($color-orange, 10);
    }
    &:disabled {
      background-color: #AAA;
      border-color: #999;
      cursor: not-allowed;
    }
  }

}
</style>
