import VueRouter from 'vue-router';

let routes = [
    { path: '/', component: require('./views/BasicElements') },
];

export default new VueRouter({
    routes
});
