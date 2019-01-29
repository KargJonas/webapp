<template>
  <section class="">
    <div class="profile" v-if="user">
      <div class="header">
        <h1 class="name">{{user.profile.firstName}} {{user.profile.lastName}}</h1>
        <code class="number">#{{user.profile.memberNumber}}</code>
        <div class="spacer"></div>
        <button @click="logout" class="logout-button">Logout</button>
      </div>
      <div class="section">
        <h3>Packages</h3>
        <ul class="item-list" v-if="user.packages && user.packages.length > 0">
          <li v-for="p in user.packages"><package :userPackage="p" /></li>
        </ul>
        <div v-else>
          <code>Keine Mitgliedschaft abgeschlossen</code>
        </div>
      </div>
      <div class="section">
        <h3>Trainings</h3>
        <ul class="item-list" v-if="user.trainings && user.trainings.length > 0">
          <li v-for="t in user.trainings"><training :userTraining="t" /></li>
        </ul>
        <div v-else>
          <code>Noch keine Trainings vorhanden</code>
        </div>
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
  },
  methods: {
    getPackage(p) {
      let data = this.$store.getters.getPackageById(p.package);
      return { ...p, ...data };
    },
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/');
      });
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.profile {
  margin-left: 4%;
  margin-right: 4%;
  .header {
    margin: 2em 0;
    h1 {
      margin: 0;
    }
    display: flex;
    .spacer {
      flex: 1;
    }
    .logout-button {
      cursor: pointer;
      font-weight: bold;
      padding: 10px;
      border: none;
      outline: none;
      color: #FFF;
      background-color: $color-orange;
    }
  }
  .name {
    display: inline-block;
  }
  .number {
    margin: 0 10px;
    color: #999;
  }
  .item-list {
    list-style-type: none;
    padding: 0;
  }
}
</style>
