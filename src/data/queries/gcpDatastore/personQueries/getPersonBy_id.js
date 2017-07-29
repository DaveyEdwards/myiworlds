import Person from '../../../models/gcpDatastore/Person';

export async function getPersonBy_id(_id) {
	let response = null;

	try {
		response = await Person.get(_id).then((entity) => entity.plain());
	} catch (err) {
		console.error('getPersonBy_id err', err);
	}

	return response;
}
