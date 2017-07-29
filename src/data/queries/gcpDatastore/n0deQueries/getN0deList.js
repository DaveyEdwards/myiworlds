// Cursor NOT WORKING
//  Cursor is not passed in. Not sure if it helps to have cursors on DB side + Relay

import N0de from '../../../models/gcpDatastore/N0de';

export async function getN0deList(request) {
	let response = [];

	try {
		// const n0deCursor = request.cursor; // Breaks when run without cursor, cursor generator has to run first then
		// N0de.list(start: n0deCursor)
		response = await N0de.list().then(response => response.entities);
	} catch (err) {
		console.log('getN0de err', err);
	}

	return response;
}
