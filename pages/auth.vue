<template>
  <section class="">
    <div class="loading">
      <span>Logging you in...</span>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {}
  },
  created() {
    if (process.client) {
      let hash = this.$route.hash;
      this.$store.dispatch('auth', { hash }).then((r) => {
        this.$router.push('me');
      }).catch((err) => {
        this.$router.push('/');
      });
    }
  }
}
</script>
