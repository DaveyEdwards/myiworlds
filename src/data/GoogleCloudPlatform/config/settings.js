/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

if (process.env.BROWSER) {
	throw new Error('Do not import `config.js` from inside the client-side code.');
}

module.exports = {
	// Google Cloud Platform Datastore
	project_id: 'myiworlds-164603',
	gcpApiServiceKeyPathFromRoot: './src/config/GoogleCloudPlatform/google_api_service_key.json',
};
