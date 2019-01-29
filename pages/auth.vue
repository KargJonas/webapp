<template>
  <section class="auth">
    <div v-if="error">
      <div v-if="error.errorDescription == 'verify-mail'">
        <p>Du musst zuerst deine E-Mail bestätigen um dich anmelden zu können. Eine erneute Bestätigungs E-Mail wurde soeben an deine angegebene E-Mail Adresse gesandt.</p>
      </div>
      <div v-else>
        <p>Ein Fehler ist aufgetreten: <code>{{error}}</code></p>
      </div>
    </div>
    <div v-else class="loading">
      <span>Logging you in...</span>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      error: null,
    }
  },
  created() {
    if (process.client) {
      let hash = this.$route.hash;
      this.$store.dispatch('auth', { hash }).then((r) => {
        this.$router.push('/me');
      }).catch((err) => {
        if (err.errorDescription == 'verify-mail') {
          this.error = err;
          this.$router.replace('/auth');
        } else {
        this.$router.push('/');
        }
      });
    }
  },
}
</script>

<style lang="scss" scoped>
.auth {
  code {
    color: red;
  }
  .loading {
  }
}
</style>
