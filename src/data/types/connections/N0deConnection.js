import { connectionDefinitions } from 'graphql-relay';

import N0deType from '../N0deType';

const { connectionType: N0deConnection } = connectionDefinitions({
	name: 'N0de',
	nodeType: N0deType,
});

export default N0deConnection;
