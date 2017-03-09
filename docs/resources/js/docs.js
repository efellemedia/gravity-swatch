import './bootstrap';
import router from './routes';

// Partials
import Navbar from './partials/Navbar.vue';

var docs = new Vue({
    el: '#docs',

    router,

    components: {
        'navbar': Navbar
    }
});
