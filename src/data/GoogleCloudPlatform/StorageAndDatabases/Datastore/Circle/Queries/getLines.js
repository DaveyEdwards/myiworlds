// Cursor NOT WORKING
//  Cursor is not passed in. Not sure if it helps to have cursors on DB side + Relay

import Circle from '../circleModel';

export async function getLines(request) {
  let response = [];

  try {
    // const circleCursor = request.cursor; // Breaks when run without cursor, cursor generator has to run first then
    // Circle.list(start: circleCursor)
    response = await Circle.list().then(response => response.entities);
  } catch (err) {
    console.log('getCircle err', err);
  }

  return response;
}
