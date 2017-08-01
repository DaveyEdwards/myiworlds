import { createN0de } from './Queries/';

const n0des = [
	{
		_id: 'interface000010000000000000000000001',
		type: 'INTERFACE',
		title: 'The default interface for using MyiWorlds',
		n0deList: [
			'TOP_NAVIGATION',
			'SIDE_NAVIGATION',
			'PAGE_DISPLAY',
		],
	},
	{
		_id: 'contentBlock000010000000000000000001',
		type: 'CONTENT_BLOCK',
		n0deList: [
			'DISPLAY_SIDENAV_BUTTON',
			'WEBSITE_TITLEserveryarn start',
		],
	},
	{
		_id: 'pageDisplay0000100000000000000000001',
		type: 'PAGE_DISPLAY',
		blob: {
			background: 'white',
			margin: '70px 180px 200px 270px',
		},
	},
	{
		_id: 'page00001000000000000000000000000001',
		path: 'home',
		type: 'PAGE',
		n0deEdge: [
			'image0000100000000000000000000000001',
			'header000010000000000000000000000001',
			'text00001000000000000000000000000001',
			'edge00001000000000000000000000000001',
		],
	},
	{
		_id: 'edge00001000000000000000000000000001',
		media: 'image0000100000000000000000000000001',
		type: 'EDGE_CARDS',
		title: 'Edge displayed in cards',
		n0deEdge: [
			'card00001000000000000000000000000001',
			'card00001000000000000000000000000002',
			'card00001000000000000000000000000003',
			'card00001000000000000000000000000004',
			'card00001000000000000000000000000005',
			'card00001000000000000000000000000006',
		],
	},
	{
		_id: 'header000010000000000000000000000001',
		type: 'HEADER',
		title: 'MyiWorlds',
		subtitle: 'My Interfaced Worlds',
		description: 'Build your interfaces',
	},
	{
		_id: 'text00001000000000000000000000000001',
		type: 'PLAIN_TEXT',
		title: 'A beautiful title',
		subtitle: 'A elegant subtitle',
		description: 'This will be the most interesting piece of information you will ever consume',
		value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
	},
	{
		_id: 'styles000010000000000000000000000001',
		type: 'STYLES_BLOB',
		title: 'Material design top navigation',
		blob: {
			background: 'blue',
			top: 0,
			zIndex: 999,
		},
	},
	{
		_id: 'image0000100000000000000000000000001',
		type: 'IMAGE',
		title: 'What the n0des will soon look like ',
		value: 'https://i.stack.imgur.com/7A9aA.png',
	},
	{
		_id: 'card00001000000000000000000000000001',
		type: 'CARD',
		path: 'page1',
		media: 'image0000100000000000000000000000001',
		title: 'Title1',
		description: 'A description of the card',
	},
	{
		_id: 'card00001000000000000000000000000002',
		type: 'CARD',
		path: 'page2',
		media: 'image0000100000000000000000000000001',
		title: 'Title2',
		description: 'A description of the card',
	},
	{
		_id: 'card00001000000000000000000000000003',
		type: 'CARD',
		path: 'page3',
		media: 'image0000100000000000000000000000001',
		title: 'Title3',
		description: 'A description of the card',
	},
	{
		_id: 'card00001000000000000000000000000004',
		type: 'CARD',
		path: 'page4',
		media: 'image0000100000000000000000000000001',
		title: 'Title4',
		description: 'A description of the card',
	},
	{
		_id: 'card00001000000000000000000000000005',
		type: 'CARD',
		path: 'page5',
		media: 'image0000100000000000000000000000001',
		title: 'Title5',
		description: 'A description of the card',
	},
	{
		_id: 'card00001000000000000000000000000006',
		type: 'CARD',
		path: 'page6',
		media: 'image0000100000000000000000000000001',
		title: 'Title6',
		description: 'A description of the card',
	},
];

// TODO: Make export Default
export async function generateN0des() {
	n0des.map(n0de =>
		createN0de(n0de).then(console.log('\n', '__N0DE__', '\n', n0de)), // eslint-disable-line no-console,
	);
}
