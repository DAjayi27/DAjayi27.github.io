

import { createApp } from 'vue'
import Index from './Pages/Index.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faUserSecret,faArrowUpRightFromSquare,faGithub)



const app = createApp(Index)

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
