import { connectionDefinitions } from 'graphql-relay';

import PageType from '../PageType';

export default connectionDefinitions({
  name: 'Page',
  nodeType: PageType,
});
