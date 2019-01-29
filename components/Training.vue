<template>
  <div class="training-item">
    <div class="body">
      {{training.title}}
    </div>
    <div class="footer">
      {{date}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['userTraining'],
  computed: {
    training() {
      return this.$store.getters.getTrainingById(this.userTraining.trainingCourse);
    },
    date() {
      return new Date(this.userTraining.date).toLocaleDateString("de-at");
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';
.training-item {
  margin-bottom: 5px;
  background-color: #FFF;
  padding: 0 10px;
  .body {
    padding: 10px 0;
    color: $color-orange;
  }
  .footer {
    font-size: 0.8em;
    padding: 5px 0;
    color: #333;
  }
}
</style>
