import DataLoader from 'dataloader';
import { getPageBy_id } from '../queries/googleDatastore/pageQueries';

export default new DataLoader(
  urls => {
    return Promise.all(urls.map(getPageBy_id))
  }
);
