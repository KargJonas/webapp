<template>
  <div v-editable="blok" class="job-list">
    <job-opening v-for="i in blok.items" :blok="i" :key="i.uid"></job-opening>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  created() {
  }
}
</script>

<style lang="scss">
.job-list {
  margin-left: 4%;
  margin-right: 4%;
  margin-top: 6em;
}
</style>
