const languages = ['de', 'en'];
const defaultLanguage = 'de';
import { getUserFromLocalStorage } from '~/utils/auth'

export default function ({ app, route, store, isDev, redirect }) {
  let version = route.query._storyblok || isDev ? 'draft' : 'published'
  let language = defaultLanguage;

  let auth, lang = Promise.resolve();

  if (process.server) {
    store.commit('setCacheVersion', app.$storyapi.cacheVersion)
  }

  if (process.client) {
    auth = store.dispatch('checkAuth');
  }

  if (!store.state.settings._uid || language !== store.state.language) {
    store.commit('setLanguage', language)
    lang = store.dispatch('loadSettings', {version: version, language: language});
  }

  return Promise.all([auth, lang]);
}
