<template>
  <div class="machine-status" :style="{ 'background-color': color }">
    <div class="resource" v-if="resource">
      <div v-if="resource.state == 'active'">
        <div v-if="resource.offline">
          offline
        </div>
        <div v-else-if="resource.inUse">
          in Verwendung
        </div>
        <div v-else>
          Verfügbar
        </div>
      </div>
      <div v-else-if="resource.state == 'locked'" :title="resource.maintenanceNotes">
        out of order
      </div>
      <div v-else>
        {{resource.state}}
      </div>
    </div>
    <div v-else>
      <loading-spinner color="#333"></loading-spinner>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resource: null
    }
  },
  props: ['id'],
  created() {
    this.$store.dispatch('checkStatus', this.id).then((r) => {
      this.resource = r;
    });
  },
  computed: {
    color() {
      if (!this.resource) {
        return '#FFF';
      }
      if (this.resource.state == 'locked') {
        return '#ebe223';
      }
      if (this.resource.offline) {
        return '#666';
      }
      if (this.resource.inUse) {
        return '#ff6f00';
      }
      if (this.resource.state == 'active') {
        return '#0069aa';
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.machine-status {
  padding: 10px;
  .resource {
    padding: 10px;
    font-weight: bold;
    color: #FFF;
    div {
      display: inline-block;
      text-transform: uppercase;
    }
  }
}
</style>
