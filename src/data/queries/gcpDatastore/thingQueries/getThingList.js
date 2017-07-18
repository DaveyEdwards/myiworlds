// Cursor NOT WORKING
//  Cursor is not passed in. Not sure if it helps to have cursors on DB side + Relay

import Thing from '../../../models/gcpDatastore/Thing';

export async function getThingList(request) {
  let response = [];

  try {
    // const thingCursor = request.cursor; // Breaks when run without cursor, cursor generator has to run first then
    // Thing.list(start: thingCursor)
    response = await Thing.list().then(response => response.entities);
  } catch (err) {
    console.log('getThing err', err);
  }

  return response;
}
