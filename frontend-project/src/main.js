import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import AppProduct from './AppProduct.vue'
import AppUpdate from './AppUpdate.vue'
import AppContact from './AppContact.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

const product = createApp(AppProduct)
product.use(router)
product.mount('#product')

const update = createApp(AppUpdate)
update.use(router)
update.mount('#update')

const contact = createApp(AppContact)
contact.use(router).mount('#contact')
