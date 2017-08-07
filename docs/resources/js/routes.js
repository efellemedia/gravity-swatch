import VueRouter from 'vue-router';

let routes = [
    { path: '/', component: require('./views/BasicElements') },
    { path: '/getting-started', component: require('./views/GettingStarted')}
];

export default new VueRouter({
    routes
});
