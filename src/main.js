import { createApp } from 'vue'
import App from '@/components/app/App.vue'
import UI from '@/ui'

const app = createApp(App)
UI.map((component) => {app.component(component.name, component)})
app.mount('#app')