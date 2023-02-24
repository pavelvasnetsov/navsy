import { createStore } from 'vuex'
import { reportsStore } from './reportsStore'
import { reportStore } from './reportStore'

export default createStore({
  modules: {
    reports: reportsStore,
    report: reportStore
  }
})
