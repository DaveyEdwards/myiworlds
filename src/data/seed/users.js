import faker from 'faker';
import uuidV4 from 'uuid/v4';
import { registerUser } from '../queries/googleDatastore/user';
import { savePages } from '../queries/googleDatastore/page';
import { generatePages } from './pages';

export async function generateUsers() {
  const pages = generatePages();
  const pageLength = pages.length;

  await savePages(pages);

  for (let i = 0; i < 20; i++) {
    const pageIndex = (faker.random.number({ min: 10, max: 500 })) % (pageLength - 1);
    const page = pages[pageIndex].id;
    const userData = {
      id: uuidV4(),
      photo: faker.image.avatar(),
      email: faker.internet.email(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      followedCount: 0,
      page,
      author: true
    };

    console.log('USER', userData);
    await registerUser(userData);
  }
}
