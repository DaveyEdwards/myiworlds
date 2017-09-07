import { createCircle } from './Queries/';

const circles = [
  // {
  //   _id: 'type00010000000000000000000000000001',
  //   value: 'TYPE',
  //   title: 'A type of data that is stored',
  //   description: 'Everything is a type of something',
  //   // line: 'Info_Page_About_This_Type',
  // },
  // {
  //   _id: 'types0000100000000000000000000000001',
  //   pathFull: 'types',
  //   type: 'types-lines-many00010000000000000001',
  //   linesMany: ['types-lines-many00010000000000000001', 'types-lines0001000000000000000000001'],
  // },
  // {
  //   _id: 'types-lines-many00010000000000000001',
  //   pathFull: 'types/lines-many',
  //   type: 'type00010000000000000000000000000001',
  //   value: 'LINESMANY',
  // },
  // {
  //   _id: 'types-lines0001000000000000000000001',
  //   pathFull: 'types/lines',
  //   type: 'type00010000000000000000000000000001',
  //   value: 'LINES',
  // },
  {
    _id: 'interface000010000000000000000000001',
    type: 'INTERFACE',
    title: 'The default interface for using MyiWorlds',
    lines: ['TOP_NAVIGATION', 'SIDE_NAVIGATION', 'PAGE_DISPLAY'],
  },
  {
    _id: 'contentBlock000010000000000000000001',
    type: 'CONTENT_BLOCK',
    lines: ['pageDisplay0000100000000000000000001', 'page00001000000000000000000000000001'],
  },
  {
    _id: 'pageDisplay0000100000000000000000001',
    type: 'PAGE_DISPLAY',
    order: 2,
    blob: {
      background: 'white',
      margin: '70px 180px 200px 270px',
    },
  },
  {
    _id: 'page00001000000000000000000000000001',
    pathFull: 'home',
    pathName: 'home',
    type: 'PAGE',
    order: 1,
    linesMany: [
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
    linesMany: [
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
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
    title: 'What the circles will soon look like ',
    value: 'https://www.webhostingplanguide.com/wp-content/uploads/2014/01/HTML-Graph.jpg',
  },
  {
    _id: 'image0000100000000000000000000000002',
    type: 'IMAGE',
    title: 'What the circles will soon look like ',
    value: 'http://www.sailing.cs.cmu.edu/main/tvnviewer/GeneDescriptorhighl.png',
  },
  {
    _id: 'image0000100000000000000000000000003',
    type: 'IMAGE',
    title: 'What the circles will soon look like ',
    value:
      'https://camo.githubusercontent.com/d998e0565b9457f8f0a9da33776d8ca5b0549359/68747470733a2f2f7261772e6769746875622e636f6d2f61726a756e676d656e6f6e2f44697374726962757465642d47726170682d416c676f726974686d732f6d61737465722f4d696e696d756d2d5370616e6e696e672d547265652f696d672f31303030656467652d3130306e6f64652d67726170682e706e67',
  },
  {
    _id: 'image0000100000000000000000000000004',
    type: 'IMAGE',
    title: 'What the circles will soon look like ',
    value:
      'http://rich-iannone.github.io/DiagrammeR/img/deleting-nodes-or-edges-using-a-selection-1.png',
  },
  {
    _id: 'image0000100000000000000000000000005',
    type: 'IMAGE',
    title: 'What the circles will soon look like ',
    value: 'https://www.webhostingplanguide.com/wp-content/uploads/2014/01/HTML-Graph.jpg',
  },
  {
    _id: 'image0000100000000000000000000000006',
    type: 'IMAGE',
    title: 'What the circles will soon look like ',
    value: 'http://www.jzy3d.org/images/graphs/graph7.png',
  },
  {
    _id: 'card00001000000000000000000000000001',
    type: 'CARD',
    pathFull: 'myiworlds/page1',
    pathName: 'page1',
    media: 'image0000100000000000000000000000001',
    title: 'Title1',
    description: 'A description of the card',
  },
  {
    _id: 'card00001000000000000000000000000002',
    type: 'CARD',
    pathFull: 'myiworlds/page2',
    pathName: 'page2',
    media: 'image0000100000000000000000000000002',
    title: 'Title2',
    description: 'A description of the card',
  },
  {
    _id: 'card00001000000000000000000000000003',
    type: 'CARD',
    pathFull: 'myiworlds/page3',
    pathName: 'page3',
    media: 'image0000100000000000000000000000003',
    title: 'Title3',
    description: 'A description of the card',
  },
  {
    _id: 'card00001000000000000000000000000004',
    type: 'CARD',
    pathFull: 'myiworlds/page4',
    pathName: 'page4',
    media: 'image0000100000000000000000000000004',
    title: 'Title4',
    description: 'A description of the card',
  },
  {
    _id: 'card00001000000000000000000000000005',
    type: 'CARD',
    pathFull: 'myiworlds/page5',
    pathName: 'page5',
    media: 'image0000100000000000000000000000005',
    title: 'Title5',
    description: 'A description of the card',
  },
  {
    _id: 'card00001000000000000000000000000006',
    type: 'CARD',
    pathFull: 'myiworlds/page6',
    pathName: 'page6',
    media: 'image0000100000000000000000000000006',
    title: 'Title6',
    description: 'A description of the card',
  },
  {
    _id: 'notfound0000100000000000000000000006',
    type: 'HEADER',
    pathFull: 'not-found',
    title: 'Page not found',
    description:
      'I am terribly sorry human, that page does not exist.  Do you know anything about the topic? Why not create a page here to help other like minded individuals, by clicking the + sign in the bottom right you can!',
    linesMany: ['card00001000000000000000000000000006'],
  },
];

// TODO: Make export Default
export async function generateCircles() {
  circles.map(
    circle => createCircle(circle).then(console.log('\n', '__CIRCLE__', '\n', '\n', circle)), // eslint-disable-line no-console,
  );
}
