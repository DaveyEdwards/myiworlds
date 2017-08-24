import { connectionDefinitions } from 'graphql-relay';

import CircleType from '../CircleType';

const { connectionType: CircleConnection } = connectionDefinitions({
	name: 'Circle',
	nodeType: CircleType,
});

export default CircleConnection;
