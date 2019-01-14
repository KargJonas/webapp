<template>
  <section class="machine-overview">
    <div class="machine-filters">
      <code class="loading" v-if="loading">loading…</code>
      <div class="tags">
        <div class="headline">
          Bereiche
        </div>
        <div class="tag-list">
          <div v-for="t in tags" :key="t.key" class="tag">
            <checkbox
              v-model="t.value"
              class="tag"
              theme="white"
              >{{t.name}}</checkbox>
          </div>
        </div>
      </div>
      <div class="search">
        <input type="text" placeholder="Maschinen suchen" v-model="search" name="" id=""/>
      </div>
    </div>
    <div class="machine-list-wrapper">
      <div v-if="machines && machines.length > 0" class="machine-list">
        <transition-group name="list">
          <machine-list-item v-for="item in machines" :blok="item" :key="item.id" class="list-item"></machine-list-item>
        </transition-group>
      </div>
      <div v-else class="machine-list-none">
        <code>Keine Suchergebnisse</code>
      </div>
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
    this.$watch('tags', (newVal, oldVal) => {
      this.update();
    }, { deep: true });
  },
  watch: {
    search() {
      this.update();
    }
  },
  methods: {
    update() {
      this.loading = true;
      let result = this.$store.dispatch("findMachines", this.filters).then((data) => {
        this.loading = false;
        this.machines = data.stories;
      });
    }
  },
  computed: {
    filters() {
      return {
        filter_query: {
          'component': {
            'in': 'machine'
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
        'component': {
          'in': 'machine'
        }
      }
    };
    let machines = await context.store.dispatch("findMachines", filters).then((data) => {
      if (data.stories) {
        return { machines: data.stories };
      }
      return { machines: [] };
    });
    return {tags, ...machines};
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.machine-overview {
  .loading {
    position: absolute;
  }
  .machine-filters {
    .tags {
      .headline {
        color: #FFF;
        font-weight: bold;
        font-size: 1.8rem;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: .05em;
      }
      .tag-list {
        margin: 0 -20px;
        .tag {
          display: inline-block;
          padding: 0 20px;
          margin-bottom: 10px;
          font-family: $font-mono;
          color: #FFF;
          user-select: none;
          input[type=checkbox] {
            outline: none;
            -webkit-appearance: none;
            padding: 5px;
            border: 1px solid #FFF;
            border-radius: 3px;
            position: relative;
            top: 0;
            &:checked {
              background-color: #FFF;
            }
          }
        }
      }
      padding: 40px;
      background-color: $color-blue;
    }
    .search {
      display: flex;
      padding-top: 3vh;
      @include margin-page-wide();
      padding-bottom: 5vh;
      input[type=text] {
        flex: 1;
        display: block;
        width: 100%;
        padding: 10px;
        outline: none;
        font-family: $font-secondary;
        font-size: 1.1rem;
        border: none;
      }
      input[type=button] {
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
  .machine-list-wrapper {
    display: flex;
    @include margin-page-wide();
    .machine-list {
      > span {
        display: grid;
        @include media-breakpoint-up(lg) {
          grid-template-columns: 1fr 1fr;
        }

        @include media-breakpoint-up(xl) {
          grid-template-columns: 1fr 1fr 1fr;
        }
        grid-column-gap: 2vw;
        grid-row-gap: 2vw;
      }
      flex: 3;
      .list-item {
        width: 80%;
        max-width: 25em;
      }
      .list-enter-active, .list-leave-active {
        transition: all 0.5s;
      }
      .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateX(30px);
      }
    }
    .machine-list-none {
      flex: 1;
      text-align: center;
    }
  }
}
</style>
