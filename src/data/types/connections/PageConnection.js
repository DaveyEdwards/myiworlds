import { connectionDefinitions } from 'graphql-relay';

import PageType from '../PageType';

const { connectionType: PageConnection } = connectionDefinitions({
  name: 'Page',
  nodeType: PageType,
});

export default PageConnection;
