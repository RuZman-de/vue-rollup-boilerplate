import Vue from 'vue'
import Router from 'vue-router'
import Vuelidate from './components/Vuelidate'
import HelloWorld from './components/HelloWorld'

const routes = [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/vuelidate',
        name: 'Vuelidate',
        component: Vuelidate
    }
]

Vue.use(Router)

export default new Router({
    routes
})
