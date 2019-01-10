<template>
  <section class="">
    <machine v-if="machine" :blok="machine" :story="story"></machine>
  </section>
</template>

<script>
import storyblokLivePreview from '@/mixins/storyblokLivePreview'

export default {
  data () {
    return {}
  },
  mixins: [storyblokLivePreview],
  computed: {
    machine() {
      return this.story.content;
    }
  },
  asyncData (context) {
    return context.store.dispatch("loadMachineItem", context.params.slug);
  }
}
</script>


<style lang="scss" scoped>
.workshop {
  .info {
    display: flex;
    justify-content: center;
    padding: 20px 100px;
    .markdown {
    }
  }
}
</style>
