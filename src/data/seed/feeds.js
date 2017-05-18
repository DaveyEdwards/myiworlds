import faker from 'faker';
import uuidV4 from 'uuid/v4';
import { registerUser } from '../services/googleDatastore/user';
import { saveFeeds } from '../services/googleDatastore/feed';
import { saveCategories } from '../services/googleDatastore/category';

export function generateCategories() {
  return [{
    type: 'animals',
    image: faker.image.animals(),
  }, {
    type: 'business',
    image: faker.image.business(),
  }, {
    type: 'cats',
    image: faker.image.cats(),
  }, {
    type: 'city',
    image: faker.image.city(),
  }, {
    type: 'food',
    image: faker.image.food(),
  }, {
    type: 'nightlife',
    image: faker.image.nightlife(),
  }, {
    type: 'fashion',
    image: faker.image.fashion(),
  }, {
    type: 'people',
    image: faker.image.people(),
  }, {
    type: 'nature',
    image: faker.image.nature(),
  }, {
    type: 'sports',
    image: faker.image.sports(),
  }, {
    type: 'technics',
    image: faker.image.technics(),
  }, {
    type: 'transport',
    image: faker.image.transport(),
  }];
}
export async function generateFakeFeed() {
  const categories = generateCategories();
  const categoryLength = categories.length;
  await saveCategories(categories);
  for (let i = 0; i < 20; i++) {
    const categoryIndex = (faker.random.number({ min: 10, max: 500 })) % (categoryLength - 1);
    const category = categories[categoryIndex].type;
    const userData = {
      id: uuidV4(),
      photo: faker.image.avatar(),
      email: faker.internet.email(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      followedCount: 0,
      category,
      author: true
    };
    console.log('user', userData);
    await registerUser(userData);
    const feeds = [];
    for (let j = 0; j < 8; j++) {
      const image = faker.random.number({ min: 10, max: 500 });
      const imageUrl = `https://unsplash.it/640/480?image=${image}`;
      feeds.push({
        id: uuidV4(),
        createdBy: userData.id,
        image: imageUrl,
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        category,
        likedCount: 0
      });
    }
    await saveFeeds(feeds);
  }
}
