<template>
  <div class="level-slider">
    <div class="level-container">
      <div v-for="(level, index) in blok.levels" :key="index" @click="setLevel(index)">
        <level-item
          :key="level._uid"
          :blok="level"
          :number="blok.levels.length - 1 - index"
          :active="index === activeLevel"
        />
      </div>
    </div>

    <div class="image-container">
      <img
        class="image"
        v-for="(level, index) in blok.levels"
        :key="level._uid"
        v-show="index === activeLevel"
        :src="$resizeImage(level.image, '1800x0')"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["blok"],

  data() {
    return {
      activeLevel: 0,
      imageStyle: ""
    };
  },

  methods: {
    setLevel(newVal) {
      this.activeLevel = newVal;
    },
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";

.level-slider {
  margin: 0 4%;
  border: 6px solid #000;
  overflow: hidden;

  .level-container {
    padding: 20px 0;
    border-bottom: 2px dashed #000;
  }

  .image-container {
    background-color: #fff;
    overflow: hidden;

    .image {
      max-width: 100%;
      max-height: 100%;
    }
  }
}

@media (min-width: $mobile-large) {
  .level-slider {
    max-height: 75vh;
    display: flex;
    border-right: 6px solid #000;

    .level-container {
      width: max-content;
      border-right: 2px dashed #000;
      border-bottom: none;
    }
  }
}
</style>

