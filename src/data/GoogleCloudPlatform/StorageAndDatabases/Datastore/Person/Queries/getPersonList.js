// Cursor NOT WORKING
//  Cursor is not passed in. Not sure if it helps to have cursors on DB side + Relay
import Person from '../personModel';

export async function getPersonList(request) {
	let response = [];

	try {
		// const personCursor = request.cursor; // Breaks when run without cursor, cursor generator has to run first then
		// Person.list(start: personCursor)
		response = await Person.list().then(response => response.entities);
	} catch (err) {
		console.log('getPerson err', err);
	}

	return response;
}
