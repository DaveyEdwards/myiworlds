import faker from 'faker';
import uuidV4 from 'uuid/v4';

export function generatePages() {
  return [{
    _id: 'project00001000000000000000000000001',
    path: 'examples/project/default',
    public: true,
    type: 'project',
    title: 'MyiWorlds',
    creators: ['USERID'],
    description: 'A personalized interface for our worlds that enables our ultimate potential.',
    image: 'PAGEID(PNG_LOGO)',
    styles: 'PAGEID(JSON_BLOB_ON_CLOUD_STORAGE)',
    page: 'page00001000000000000000000000000001',
    pageList: [
      'interface000010000000000000000000001',
      'interface000010000000000000000000002'
    ]
  },{
    _id: 'page00001000000000000000000000000001',
    path: 'examples/interface_page/default',
    public: true,
    type: 'interface_page',
    title: 'Display Page',
    styles: 'PAGEID',
    page: 'PAGEID(HOMEPAGE)',
  },{
    _id: 'interface000010000000000000000000001',
    path: 'examples/interface_navigation/default',
    public: true,
    type: 'interface_navigation',
    title: 'Left Navigation',
    styles: 'PAGEID',
    pageList: [
      'PAGEID(ALL_PAGES)',
      'PAGEID(PAGE_TYPES)',
      'PAGEID(LINK_TO_MYIWORLDS_REPO)',
    ]
  },{
    _id: 'interface000010000000000000000000002',
    public: true,
    path: 'examples/project/default2',
    type: 'interface_navigation',
    title: 'Top Navigation',
    styles: 'PAGEID',
    pageList: [
      'PAGEID(TOGGLE_NAV)',
      'PAGEID(LOGO)',
      'PAGEID(TITLE)',
      'PAGEID(SEARCH)',
      'PAGEID(ACCOUNT_PAGE)'
    ]
  },{
    _id: 'text00001000000000000000000000000001',
    path: 'examples/text/default',
    public: true,
    type: 'text',
    title: 'Title of this text box',
    description: 'Description of this text box',
    image: 'PAGEID()',
    value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }, {
    _id: 'image0000100000000000000000000000001',
    path: 'examples/image/default',
    public: true,
    type: 'image',
    title: 'ALT_TEXT_FOR_IMAGE',
    value: faker.image.technics(),
  }, {
    _id: 'list00001000000000000000000000000001',
    path: 'examples/list/default',
    public: true,
    type: 'list',
    title: 'Title of this list',
    description: 'Description of this list',
    image: 'PAGEID(img/svg/gif)',
    pageList: [
      'interface000010000000000000000000002',
      'text00001000000000000000000000000001',
      'image0000100000000000000000000000001',
      'list00001000000000000000000000000001',
    ]
  }, {
    _id: 'contentlist0000100000000000000000001',
    path: 'examples/content_list/default',
    public: true,
    type: 'content_list',
    title: 'List of page blocks to display',
    pageList: [
      'interface000010000000000000000000002',
      'text00001000000000000000000000000001',
      'image0000100000000000000000000000001',
      'list00001000000000000000000000000001',
    ],
  }, {
    _id: 'video0000100000000000000000000000001',
    path: 'examples/video/default',
    public: true,
    type: 'video',
    title: 'Title of the video',
    description: 'description of the video',
    value: 'JD2__zLNUXA',
    blob: {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    }
  }, {
    _id: 'image_svg000010000000000000000000001',
    path: 'examples/image_svg/default',
    public: true,
    type: 'image_svg',
    title: 'ALT_TEXT',
    blob: {
      fill: '#000000',
      height: '42',
      width: '42',
      viewBox: '0 0 24 24',
      path: {
        d: 'M 12 2 C 6.48 2 2 6.48 2 12 s 4.48 10 10 10 s 10 -4.48 10 -10 S 17.52 2 12 2 Z m 0 3 c 1.66 0 3 1.34 3 3 s -1.34 3 -3 3 s -3 -1.34 -3 -3 s 1.34 -3 3 -3 Z m 0 14.2 c -2.5 0 -4.71 -1.28 -6 -3.22 c 0.03 -1.99 4 -3.08 6 -3.08 c 1.99 0 5.97 1.09 6 3.08 c -1.29 1.94 -3.5 3.22 -6 3.22 Z'
      },
    }
  }, {
    _id: 'image_gif000010000000000000000000001',
    path: 'examples/image_gif/default',
    public: true,
    type: 'image_gif',
    title: 'ALT_TEXT',
    value: 'https://media.giphy.com/media/SDogLD4FOZMM8/giphy.gif'
  }, {
    _id: 'hero00001000000000000000000000000001',
    path: 'examples/hero/default',
    public: true,
    type: 'hero',
    title: faker.lorem.sentence(),
    image: faker.image.technics(),
  }, {
    _id: 'form00001000000000000000000000000001',
    path: 'examples/form/default',
    public: true,
    type: 'form',
    title: faker.lorem.sentence(),
    image: faker.image.nightlife(),
  }, {
    _id: 'form_select0000100000000000000000001',
    path: 'examples/form_select/default',
    public: true,
    type: 'form_select',
    title: faker.lorem.sentence(),
    image: faker.image.fashion(),
  }, {
    _id: 'form_text000010000000000000000000001',
    path: 'examples/form_text/default',
    public: true,
    type: 'form_text',
    title: faker.lorem.sentence(),
    image: faker.image.people(),
  }, {
    _id: 'form_text_email000010000000000000001',
    path: 'examples/form_text_email/default',
    public: true,
    type: 'form_text_email',
    title: faker.lorem.sentence(),
    image: faker.image.nature(),
  }, {
    _id: 'custom000010000000000000000000000001',
    path: 'examples/custom/default',
    public: true,
    type: 'custom',
    title: faker.lorem.sentence(),
    image: faker.image.sports(),
  }, {
    _id: 'button_href0000100000000000000000001',
    path: 'examples/button_href/default',
    public: true,
    type: 'button_href',
    title: faker.lorem.sentence(),
    image: faker.image.transport(),
  },
  {
    _id: 'button_path0000100000000000000000001',
    path: 'examples/button_path/default',
    public: true,
    type: 'button_path',
    title: 'Twitter',
    image: 'PAGEID()',
    value: 'www.twitter.com'
  }
  ];
}
