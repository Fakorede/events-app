import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import EventsList from './components/EventsList.vue'
import EventItem from './components/EventItem.vue'
import FeaturedEvent from './components/FeaturedEvent.vue'

const app = createApp(App)
app.component('events-list', EventsList)
app.component('event-item', EventItem)
app.component('featured-event', FeaturedEvent)
app.mount('#app')

