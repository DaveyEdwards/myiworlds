import { connectionDefinitions } from 'graphql-relay';

import ThingType from '../ThingType';

const { connectionType: ThingConnection } = connectionDefinitions({
  name: 'Thing',
  nodeType: ThingType,
});

export default ThingConnection;
