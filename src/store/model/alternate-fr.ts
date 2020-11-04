import {Store} from './store';

export const AlternateFr: Store = {
	labels: {
		inStock: {
			container: '.stockStatus',
			text: ['En stock']
		},
		maxPrice: {
			container: 'div.price > span',
			euroFormat: true
		},
		outOfStock: {
			container: '.stockStatus',
			text: ['Levertermijn onbekend', 'pre-order']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.alternate.nl/product/1516616'
		},
		{
			brand: 'amd',
			model: '5950',
			series: 'cpu',
			url: 'https://www.alternate.fr/product/1685584'
		},
		{
			brand: 'amd',
			model: '5900',
			series: 'cpu',
			url: 'https://www.alternate.fr/product/1685590'
		}
	],
	name: 'alternate-fr'
};

