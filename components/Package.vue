<template>
  <div class="package-item">
    <div class="body">
      {{package.name}}
    </div>
    <div class="footer">
      <span>Von: {{fromDate}}</span>
      <span v-if="userPackage.untilDate">Bis: {{untilDate}}</span>
      <span v-else>Bis: -</span>
      <span>Bezahlt bis: {{chargedDate}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['userPackage'],
  computed: {
    package() {
      return this.$store.getters.getPackageById(this.userPackage.package);
    },
    fromDate() {
      return new Date(this.userPackage.fromDate).toLocaleDateString("de-at");
    },
    untilDate() {
      return new Date(this.userPackage.untilDate).toLocaleDateString("de-at");
    },
    chargedDate() {
      return new Date(this.userPackage.chargedUntilDate).toLocaleDateString("de-at");
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';
.package-item {
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
    display: flex;
    flex-direction: row;
    span {
      margin-right: 10px;
    }
  }
}
</style>
