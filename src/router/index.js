import { createRouter, createWebHistory } from 'vue-router';
import LoadingView from '../views/LoadingView.vue';
import HomeView from '../views/HomeView.vue';
import MainView from '../views/MainView.vue';
import SkillsView from '../views/SkillsView.vue';
import PortfolioView from '../views/PortfolioView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
	{
		path: '/',
		name: 'Loading',
		component: LoadingView,
	},
	{
		path: '/home',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/main',
		name: 'Main',
		component: MainView,
	},
	{
		path: '/skills',
		name: 'Skills',
		component: SkillsView,
	},
	{
		path: '/portfolio',
		name: 'Portfolio',
		component: PortfolioView,
	},
	{
		path: '/contact',
		name: 'Contact',
		component: ContactView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,

	scrollBehavior(to, from, savedPosition) {
		return { top: 0 };
	},
});

export default router;
