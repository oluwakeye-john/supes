import { UPDATE_FETCHING, UPDATE_SEARCH_RESULT } from './types'
import { AXIOS_REQUESTS } from '~/services/types'

export const state = () => ({
  results: [],
  searchResult: '',
  fetching: true,
})

export const actions = {
  prefetchAction() {
    this.$axios.$get(AXIOS_REQUESTS.SEARCH(''))
  },
  async searchAction({ commit }, query) {
    // commit(UPDATE_FETCHING, true)
    const response = await this.$axios.$get(AXIOS_REQUESTS.SEARCH(query))
    const results = response.results
    if (results) {
      commit(UPDATE_SEARCH_RESULT, results)
    } else {
      commit(UPDATE_SEARCH_RESULT, [])
    }
    commit(UPDATE_FETCHING, false)
  },
  fetchingAction({ commit }, val) {
    commit(UPDATE_FETCHING, val)
  },
}

export const mutations = {
  [UPDATE_FETCHING](state, val) {
    state.fetching = val
  },
  [UPDATE_SEARCH_RESULT](state, res) {
    state.searchResult = res
  },
}
