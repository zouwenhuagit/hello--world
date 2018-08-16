import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/vives/home'
import About from '@/vives/about'
import Prodct from '@/vives/prodct'
import Agent from '@/vives/agent'
import Download from '@/vives/download'
import Contact from '@/vives/contact'
import Markey from '@/vives/markey'
Vue.use(Router)
export default new Router({

    routes: [{
            path: '/',
            name: 'home',
            redirect: '/Home'
        },

        {
            path: '/home',
            name: 'Home',
            component: Home

        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/prodct',
            name: 'Prodct',
            component: Prodct
        },
        {
            path: '/agent',
            name: 'Agent',
            component: Agent
        },
        {
            path: '/download',
            name: 'Download',
            component: Download
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/markey',
            name: 'Markey',
            component: Markey
        }

    ]
})