<template>
  <section class="">
    <div class="profile" v-if="user">
      <div class="header">
        <h1 class="name">{{user.firstName}} {{user.lastName}}</h1>
        <code class="number">#{{user.memberNumber}}</code>
        <button @click="logout">Logout</button>
      </div>
      <div class="section">
        <h3>Packages</h3>
      </div>
      <div class="section">
        <h3>Trainings</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  middleware: 'authenticated',
  data () {
    return {}
  },
  created() {
    if (process.client) {
      if (!this.user) {
        this.$store.dispatch('getProfile');
      }
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/');
      });
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
}
</script>

<style lang="scss">
.profile {
  margin-left: 4%;
  margin-right: 4%;
  .name {
    display: inline-block;
  }
  .number {
    margin: 0 10px;
    color: #999;
  }
}
</style>
