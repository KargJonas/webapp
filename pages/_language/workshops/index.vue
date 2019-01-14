<template>
  <section class="workshop-overview">
    <div class="workshop-filters">
      <!--
      <div class="tags">
        <div class="headline">Bereiche</div>
        <div class="tag-list">
          <div v-for="t in tags" :key="t.key" class="tag">
            <checkbox
              v-model="t.value"
              class="tag"
              >{{t.name}}</checkbox>
          </div>
        </div>
      </div>
      -->
      <div class="search">
        <input type="text" placeholder="Kurse und Workshops suchen" v-model="search">
      </div>
      <loading class="loading" v-if="loading"></loading>
    </div>
    <!--
    <div class="workshop-orders">
      <div class="headline">
        Sortieren nach:
      </div>
      <div class="order-list">
        <div class="order-item" v-for="o in orders">
        </div>
      </div>
    </div>
    -->
    <div class="workshop-list-wrapper">
      <div v-if="workshops && workshops.length > 0" class="workshop-list">
        <transition-group name="list">
          <workshop-list-item
            v-for="item in workshops"
            :blok="item"
            :key="item.id"
            class="list-item"
          ></workshop-list-item>
        </transition-group>
      </div>
      <div v-else class="workshop-list-none">
        <code>Keine Suchergebnisse</code>
      </div>
      <!--
      <div class="calendar">
        <date-pick v-model="date" :hasInputElement="false"></date-pick>
      </div>
      -->
    </div>
  </section>
</template>

<script>
import Checkbox from "~/components/Checkbox.vue";

export default {
  components: {
    Checkbox,
  },
  data () {
    return {
      loading: false,
      search: '',
    }
  },
  created() {
    this.$watch(
      "tags",
      (newVal, oldVal) => {
        this.update();
      },
      { deep: true }
    );
  },
  watch: {
    search() {
      this.update();
    }
  },
  methods: {
    update() {
      this.loading = true;
      let result = this.$store
        .dispatch("findWorkshops", this.filters)
        .then(data => {
          this.loading = false;
          this.workshops = data.stories;
        });
    }
  },
  computed: {
    filters() {
      return {
        filter_query: {
          component: {
            in: "workshop"
          }
        },
        search_term: this.search,
        with_tag: this.filterTags.join(',')
      }
    },
    filterTags() {
      return this.tags.filter((t) => {
        return t.value;
      }).map((t) => {
        return t.name;
      });
    }
  },
  async asyncData (context) {
    let tags = await context.store.dispatch("loadTags");
    let filters = {
      filter_query: {
        component: {
          in: "workshop"
        }
      }
    };
    let workshops = await context.store.dispatch("findWorkshops", filters).then((data) => {
      if (data.stories) {
        return { workshops: data.stories };
      }
      return { workshops: [] };
    });
    return {tags, ...workshops};
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";

.workshop-overview {
  .loading {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -40px);
  }

  .workshop-filters {
    .tags {
      .headline {
        color: #fff;
        font-weight: bold;
        font-size: 1.8rem;
        margin-bottom: 20px;
      }
      .tag-list {
        margin: 0 -20px;
        .tag {
          display: inline-block;
          padding: 0 20px;
          font-family: $font-mono;
          color: #fff;
          user-select: none;
        }
      }
      padding: 40px;
      background-color: $color-orange;
    }

    .search {
      display: flex;
      margin: 0 4%;
      padding-bottom: 5rem;
      input[type="text"] {
        flex: 1;
        display: block;
        width: 100%;
        padding: 10px;
        outline: none;
        font-family: $font-secondary;
        font-size: 1.1rem;
        border: none;
      }
      input[type="button"] {
        font-size: 1.1rem;
        margin-left: 10px;
        text-transform: uppercase;
        background-color: transparent;
        border: none;
        font-weight: bold;
        color: $color-orange;
        outline: none;
      }
    }
  }
  .workshop-list-wrapper {
    margin: 0 4%;
    display: flex;
    .workshop-list {
      flex: 3;
      .list-item {
        margin-right: 10px;
      }
      .list-enter-active,
      .list-leave-active {
        transition: all 0.5s;
      }
      .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateX(30px);
      }
    }
    .workshop-list-none {
      flex: 3;
      text-align: center;
    }
    .calendar {
      flex: 1;
      max-width: 320px;
    }
  }
}
</style>
