import DataLoader from 'dataloader';
import { getN0deBy_id } from '../queries/gcpDatastore/n0deQueries';

export default {
	n0deLoader: new DataLoader(_ids => Promise.all(_ids.map(_id => getN0deBy_id(_id)))),
};
