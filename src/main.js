import { createApp } from 'vue'

import BaseSearch from './components/ui/BaseSearch.vue'
import BaseContainer from './components/ui/BaseContainer.vue'
import App from './App.vue'

const app = createApp(App)

app.component('base-search', BaseSearch)
app.component('base-container', BaseContainer)

app.mount('#app')
