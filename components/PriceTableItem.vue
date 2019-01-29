<template>
  <div v-editable="blok" class="price-table-item">
    <h1>{{ blok.name }}</h1>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss">
.price-table-item {
}
</style>
