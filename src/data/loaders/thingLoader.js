import DataLoader from 'dataloader';
import { getThingBy_id } from '../queries/gcpDatastore/thingQueries';

export default {
  thingLoader: new DataLoader(_ids => Promise.all(_ids.map(_id => getThingBy_id(_id)))),
};
