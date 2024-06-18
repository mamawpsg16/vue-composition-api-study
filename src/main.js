import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Test from '@/components/Test.vue'
import vColor from '@/directives/v-color.js';
import vClickOutside from '@/directives/v-click-outside.js';
import myPlugin from '@/plugins/myPlugin.js';
import i18nPlugin from '@/plugins/i18n.js';
const app = createApp(App)
app.component('Test',Test)
app.directive('color', vColor)
app.directive('click-outside', vClickOutside);
app.use(myPlugin);
app.use(i18nPlugin, {
    greetings: {
      hello: 'Bonjour!'
    }
  })
app.mount('#app')
