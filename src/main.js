//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import jsPDF from 'jspdf';
import Vue3Html2pdf from 'vue3-html2pdf'
import createStore from './store'

const app = createApp(App)

app.use(router)
app.use(jsPDF)
app.use(Vue3Html2pdf)
app.use(createStore)

app.mount('#app')
