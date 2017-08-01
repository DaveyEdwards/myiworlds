import N0de from '../n0deModel';

// eslint-disable-next-line camelcase
export async function getN0deBy_id(_id) {
	let response = null;

	try {
		response = await N0de.get(_id).then(entity => entity.plain());
	} catch (err) {
		console.log('getN0deBy_id err', err);
	}

	return response;
}
