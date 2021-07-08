import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pages: 0,
    page: 1,
    paymentsList: {},
    categoryList: [],
  },
  mutations: {
    setPaymentsListData (state, payload) {
      let find = Object.keys(state.paymentsList).find(el => el === Object.keys(payload)[0])
      if (!find) {
        state.paymentsList = {...state.paymentsList, ...payload}
      } else {
        return false
      }
    },

    addDataToPaymentsList (state, payload) {
      state.paymentsList[`page${state.page}`] = [...state.paymentsList[`page${state.page}`],payload]
    },

    setCategories (state,payload) {
      if (!Array.isArray(payload)) {
        payload = [payload]
      }
      state.categoryList.push(...payload)
    },

    setPages(state, payload) {
      state.pages = Object.keys(payload).length

    },
    setPage(state, payload) {
      state.page = payload
    },


  },
  getters: {

    getPaymentsList: state => state.paymentsList,

    // getFullPaymentValue: state => {
    //   return state.paymentsList
    //       .reduce((res, cur) => res + cur.value, 0)
    // },

    getCategoryList: state => {
      return state.categoryList
    },

    getPages: state => state.pages,

    getPage: state => state.page,
  },
  actions: {

    fetchData ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            "page1": [
              { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
              { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
              { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }
            ],
            "page2": [
              { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
              { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
              { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
            ],
          })
        }, 1000)
      })
          .then(res => {
            commit('setPages', res)
            commit("setPaymentsListData", res)}
          )
    },

    loadCategories ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(['Food', 'Navigation', 'Sport', 'Entertainment', 'Education'])
        }, 1000)
      })
          .then(res => {
            commit('setCategories', res)
          })
    },

  },
})
