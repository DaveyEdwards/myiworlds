import DataLoader from 'dataloader';
import { getPageBy_id } from '../queries/googleDatastore/pageQueries';

export default {
  pageLoader: new DataLoader(_ids => Promise.all(_ids.map(_id => getPageBy_id(_id)) ))
}
