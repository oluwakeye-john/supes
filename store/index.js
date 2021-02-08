import { UPDATE_FETCHING, UPDATE_SEARCH_RESULT, UPDATE_TRENDING } from './types'
import { AXIOS_REQUESTS } from '~/services/types'

export const state = () => ({
  results: [],
  searchResult: '',
  fetching: true,
  trending: [],
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
  async getTrending({ commit }) {
    const ids = [70, 655, 204, 346, 659, 644, 579, 332]
    const all = ids.map((id) => {
      return this.$axios.$get(AXIOS_REQUESTS.GET_ID(id))
    })
    const response = await Promise.all(all)
    commit(UPDATE_TRENDING, response)
  },
  fetchingAction({ commit }, val) {
    commit(UPDATE_FETCHING, val)
  },
}

export const mutations = {
  [UPDATE_FETCHING](state, val) {
    state.fetching = val
  },
  [UPDATE_TRENDING](state, res) {
    state.trending = res
  },
  [UPDATE_SEARCH_RESULT](state, res) {
    state.searchResult = res
  },
}
