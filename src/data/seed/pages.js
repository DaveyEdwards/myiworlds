import faker from 'faker';
import uuidV4 from 'uuid/v4';

export function generatePages() {
  return [{
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'project',
    tags: [],
    title: 'MyiWorlds',
    creators: ['USERID'],
    description: 'A personal interface for our worlds, enabling our ultimate potential.',
    image: 'PAGEID(PNG_LOGO)',
    styles: 'PAGEID(JSON_BLOB_ON_CLOUD_STORAGE)',
    page: 'PAGEID(APP_HOME_PAGE)',
    pages: ['PAGEID(INTERFACE_ID)']
  },{
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'interface',
    tags: [],
    title: 'Left Navigation',
    styles: 'PAGEID',
    page: 'PAGEID()',
    pages: [
      'PAGEID(NAV_PAGE)',
      'PAGEID(NAV_PAGE)',
    ]
  },{
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'interface',
    tags: [],
    title: 'Top Navigation',
    styles: 'PAGEID',
    page: 'PAGEID()',
    pages: [
      'PAGEID(NAV_PAGE)',
      'PAGEID(NAV_PAGE)',
    ]
  },{
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'text',
    tags: [],
    title: 'Title of this text box',
    description: 'Description of this text box',
    image: 'PAGEID()',
  }, {
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'image',
    tags: [],
    title: 'ALT_TEXT',
    image: 'PAGEID()',
  }, {
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'list',
    tags: [],
    title: 'Title of this list',
    description: 'Description of this list',
    image: 'PAGEID(img/svg/gif)',
  }, {
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'content_list',
    tags: [],
    title: 'List of page blocks to display',
    pages: ['PAGEID','PAGEID','PAGEID'],
  }, {
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'video',
    tags: [],
    title: 'Title of the video',
    description: 'description of the video',
    value: 'https://youtu.be/0ueamFGdOpA',
  }, {
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'image_svg',
    tags: [],
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
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'image_png',
    tags: [],
    title: 'Alt text of this png',
    value: 'URL_TO_STORAGE_BUCKET_ITEM'
  }, {
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'image_gif',
    tags: [],
    title: 'ALT_TEXT',
    value: 'URL_TO_STORAGE_BUCKET_ITEM'
  }, {
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'hero',
    tags: [],
    title: faker.lorem.sentence(),
    image: faker.image.technics(),
  }, {
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'form',
    tags: [],
    title: faker.lorem.sentence(),
    image: faker.image.nightlife(),
  }, {
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'form_select',
    tags: [],
    title: faker.lorem.sentence(),
    image: faker.image.fashion(),
  }, {
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'form_text',
    tags: [],
    title: faker.lorem.sentence(),
    image: faker.image.people(),
  }, {
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'form_text_emaild',
    tags: [],
    title: faker.lorem.sentence(),
    image: faker.image.nature(),
  }, {
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'custom',
    tags: [],
    title: faker.lorem.sentence(),
    image: faker.image.sports(),
  }, {
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'button_href',
    tags: [],
    title: faker.lorem.sentence(),
    image: faker.image.transport(),
  },
  {
    _id: uuidV4(),
    path: faker.random.uuid(),
    public: true,
    type: 'button_path',
    tags: [],
    title: 'Twitter',
    image: 'PAGEID()',
    value: 'www.twitter.com'
  }];
}
