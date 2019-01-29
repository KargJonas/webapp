<template>
  <nuxt-link v-if="link.linktype == 'story'" :to="'/' + link.cached_url" class="link"><slot/></nuxt-link>
  <a v-else-if="link.linktype == 'url' && link.cached_url !== ''" :href="link.cached_url" class="link"><slot/></a>
  <span v-else><slot /></span>
</template>

<script>
export default {
  props: ['link'],
}
</script>

<style lang="scss"></style>
