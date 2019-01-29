<template>
  <div v-editable="blok" class="price-table">
    <table>
      <tr>
        <th></th>
        <th>{{blok.workshop}}</th>
        <th>{{blok.usage}}</th>
      </tr>
      <tr v-for="p in blok.items">
        <th>{{p.title}}</th>
        <td>{{p.workshop}}</td>
        <td>{{p.usage}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss">
.price-table {
  flex: 1;
  text-align: center;
}
</style>
