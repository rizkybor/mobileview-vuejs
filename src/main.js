import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { VueBottomSheet } from "@webzlodimir/vue-bottom-sheet";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueBottomSheet)
app.mount('#app')
