const languages = ['de', 'en'];
const defaultLanguage = 'de';
import { getUserFromLocalStorage } from '~/utils/auth'

export default function ({ app, route, store, isDev, redirect }) {
  let version = route.query._storyblok || isDev ? 'draft' : 'published'
  let language = defaultLanguage;

  let l, auth = Promise.resolve();

  if (process.server) {
    store.commit('setCacheVersion', app.$storyapi.cacheVersion)
  }

  if (!store.state.settings._uid || language !== store.state.language) {
    store.commit('setLanguage', language)
    l = store.dispatch('loadSettings', {version: version, language: language});
  }

  if (process.client && !store.state.user) {
    let jwt = getUserFromLocalStorage();
    if (jwt) auth = store.commit('setAuth', {jwt});
  }

  return Promise.all([l, auth]);
}
