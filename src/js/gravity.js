import Vue from 'vue';
import Quill from 'quill';
import VueEvents from './events.js';
import App from './components/App.vue';
import UISidebar from './components/UISidebar.vue';
import UISidebarToggle from './components/UISidebarToggle.vue';
import UISidebarItem from './components/UISidebarItem.vue';
import UIToggleFullscreen from './components/UIToggleFullscreen.vue';
import UIPreloader from './components/UIPreloader.vue';

Vue.use(VueEvents);

new Vue({
    el: '#root',

    components: {
        'app': App,
        'ui-preloader': UIPreloader,
        'ui-sidebar': UISidebar,
        'ui-sidebar-item': UISidebarItem,
        'ui-sidebar-toggle': UISidebarToggle,
        'ui-fullscreen-toggle': UIToggleFullscreen
    }
});
