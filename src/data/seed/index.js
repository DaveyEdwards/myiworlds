import { generatePages } from './pagesSeed';
import { createPage } from '../queries/googleDatastore/pageQueries';
import { getPageList } from '../queries/googleDatastore/pageQueries';

generatePages();
// createPage({
//   _id: 'TVSTvnflist0000100000000000000000001',
//   type: 'a_content_type',
//   title: 'A  Great Title',
// });
  // getPageList()
