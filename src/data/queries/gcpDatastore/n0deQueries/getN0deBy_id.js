import N0de from '../../../models/gcpDatastore/N0de';

export async function getN0deBy_id(_id) {
	let response = null;

	try {
		response = await N0de.get(_id).then(entity => entity.plain());
	} catch (err) {
		console.log('getN0deBy_id err', err);
	}

	return response;
}
