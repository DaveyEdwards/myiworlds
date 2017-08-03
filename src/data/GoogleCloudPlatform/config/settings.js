/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import settings from './gcp_datastore_service_key.json';

if (process.env.BROWSER) {
	throw new Error('Do not import `config.js` from inside the client-side code.');
}

export default {
	project_id: settings.project_id,
	gcpDatastoreApiServiceKeyPathFromRoot: './src/data/GoogleCloudPlatform/config/gcp_datastore_service_key.json',
};
