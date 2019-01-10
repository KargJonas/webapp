<template>
  <section>
    <div class="source-list">
      <checkbox
        theme="news"
        v-model="source.selected"
        v-for="source in sources"
        :key="source.name"
        class="source"
        >{{source.name}}</checkbox>
    </div>

    <loading class="loading" :class="{ active: loading }"/>
    <h1 v-if="!blocks.length" class="no-results">Keine Ergebnisse</h1>

    <div class="news-feed" v-for="(block, index) in blocks" v-if="block[1].length" :key="index">
      <div class="date-separator" v-if="block.length">
        <div class="container">
          <img src="~/assets/img/icons/megaphone.svg" class="decorator" v-if="index == 0">
          <h1 class="title">{{block[0]}}</h1>
        </div>
        <div class="separator"/>
      </div>

      <!-- Horizontal feed items -->
      <div class="items">
        <transition-group name="items-transition">
          <news-feed-item
            v-for="item in block[1]"
            :news="item.content"
            :key="item.id"
            :type="'horizontal'"
          />
        </transition-group>

        <!-- Vertical feed items (two columns) -->
        <div v-if="block[1].length > 1" class="news-block">
          <div class="column-left">
            <transition-group name="items-transition">
              <news-feed-item
                v-for="(item, index) in block[1]"
                v-if="index % 2 == 0"
                :news="item.content"
                :key="item.id"
              />
            </transition-group>
          </div>

          <div class="column-right">
            <transition-group name="items-transition">
              <news-feed-item
                v-for="(item, index) in block[1]"
                v-bind:class="index % 2 == 1 ? '' : 'hidden-item'"
                :news="item.content"
                :key="item.id"
              />
            </transition-group>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Checkbox from "~/components/Checkbox.vue";
import Loading from "~/components/Loading.vue";

const monthDict = [
  "Jänner",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"
];

export default {
  components: {
    Checkbox,
    Loading
  },

  data() {
    return {
      loading: false,
      sources: [
        { name: "magazin3", key: "m3", selected: false },
        { name: "youtube", key: "yt", selected: false },
        { name: "facebook", key: "fb", selected: false },
        { name: "twitter", key: "tw", selected: false },
        { name: "instagram", key: "ig", selected: false }
      ]
    };
  },

  created() {
    this.$watch("sources", this.update, { deep: true });
  },

  asyncData(context) {
    let filters = {
      filter_query: {
        component: {
          in: "news-item"
        }
      }
    };

    return context.store.dispatch("findNews", filters).then(data => {
      return { news: data.stories };
    });
  },

  methods: {
    update() {
      this.loading = true;

      let result = this.$store.dispatch("findNews", this.filters).then(data => {
        this.loading = false;
        this.news = data.stories;
      });
    }
  },

  computed: {
    blocks() {
      let _blocks = { "Zeitlose News": [] };

      // Sort stories in chronological order (latest first)
      const stories = this.news.sort((a, b) => {
        const timeA = new Date(a.content.datetime).getTime();
        const timeB = new Date(b.content.datetime).getTime();

        return timeB - timeA;
      });

      stories.map(story => {
        const date = new Date(story.content.datetime);
        const month = monthDict[date.getMonth()];
        const year = date.getFullYear();

        let timeStamp = "Zeitlose News";

        if (month !== undefined || !isNaN(year)) {
          timeStamp = `${month} ${year}`;
        }

        if (
          story.content.component === "news-item" &&
          story.content.image &&
          story.content.title &&
          story.content.text
        ) {
          if (!_blocks[timeStamp]) {
            _blocks[timeStamp] = [];
          }

          _blocks[timeStamp].push(story);
        }
      });

      // Convert object to array for usage on the page [ [ key, value ], ... ]
      return Object.entries(_blocks);
    },

    filters() {
      const sources = this.sources
        .filter(i => i.selected)
        .map(i => i.key)
        .join(",");

      const filter_query = {
        component: { in: "news-item" }
      };

      if (sources) {
        filter_query["source"] = { in: sources };
      }

      return { filter_query };
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";

.no-results {
  width: 100%;
  text-align: center;
  margin-top: 100px;
}

.items-transition-enter-active,
.items-transition-leave-active {
  transition: all 0.5s;
}

.items-transition-enter,
.items-transition-leave-to {
  opacity: 0;
  transform: translateX(300px);
}

.source-list {
  width: max-content;
  margin: 50px auto 0 auto;

  .source {
    margin: 5px 10px;
  }
}

.loading {
  margin-top: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  &.active {
    display: block;
  }
}

.news-feed {
  .items {
    margin: 0 15%;
  }

  .date-separator {
    .container {
      margin: 100px auto 0 auto;
      width: 300px;

      .title {
        text-align: center;
        background-color: $color-blue;
        padding: 5px 10px;
        color: #fff;
        margin: 0;
        white-space: nowrap;
      }
    }

    .separator {
      border-bottom: 2px dashed $color-blue;
      width: 100%;
      margin-top: -1em;
    }

    .decorator {
      width: 50px;
      margin-bottom: -7px;
    }
  }
}

.news-block {
  display: flex;

  .column-right {
    width: 50%;
    margin-top: 200px;

    .hidden-item {
      display: none;
    }
  }

  .column-left {
    text-align: right;
    margin-right: 100px;
    width: 50%;
  }
}

@media (max-width: $mobile-large) {
  .column-right {
    width: 100% !important;

    .hidden-item {
      display: block !important;
    }
  }

  .column-left {
    display: none;
    width: 0%;
  }
}

@media (min-width: $mobile-small) {
  .source-list {
    display: flex;
  }
}
</style>
