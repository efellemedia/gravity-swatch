import Vue from 'vue';
import VueEvents from './events.js';
import App from './components/App.vue';
import UISidebar from './components/UISidebar.vue';
import UISidebarToggle from './components/UISidebarToggle.vue';
import UISidebarItem from './components/UISidebarItem.vue';

Vue.use(VueEvents);

new Vue({
    el: '#root',

    components: {
        'app': App,
        'ui-sidebar': UISidebar,
        'ui-sidebar-item': UISidebarItem,
        'ui-sidebar-toggle': UISidebarToggle
    }
});
