export default (context) => {
  if (process.browser) {
    setTimeout(() => {
      context.store.dispatch('init', context)
    }, 0)
  }
}
