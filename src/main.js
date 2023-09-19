import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCar, faCartShopping, faMagnifyingGlass, faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTelegram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faUser, faInstagram, faYoutube, faTiktok, faTelegram, faCartShopping, faMagnifyingGlass)


const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
