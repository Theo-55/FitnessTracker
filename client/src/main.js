import { createApp } from 'vue'
import 'bulma'

import { Notification, Config, Autocomplete } from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.css'

import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .use(Notification)
    .use(Autocomplete)
    .use(Config, {
        iconPack: 'fas'
    })
    .mount('#app')