/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import projectViewerServiceKey from './serviceKeys/gcp-project-viewer-service-key.json';

if (process.env.BROWSER) {
  throw new Error('Do not import `config.js` from inside the client-side code.');
}

export default {
  project_id: projectViewerServiceKey.project_id,

  //
  // List out the service keys for the services your app is using
  // -----------------------------------------------------------------------------

  datastore: {
    // Owner key is for when you are seeding to the database
    // and need to create new Entities (models) inside the database
    // NOTE: You do not want this kind of permission in your production app
    gcpDatastoreOwnerServiceKeyPath:
      './src/data/GoogleCloudPlatform/config/serviceKeys/gcp-datastore-owner-service-key.json',
    // User key is for when you only need to read/write to the existing Entities (models)
    gcpDatastoreUserServiceKeyPath:
      './src/data/GoogleCloudPlatform/config/serviceKeys/gcp-datastore-user-service-key.json',
  },
};
