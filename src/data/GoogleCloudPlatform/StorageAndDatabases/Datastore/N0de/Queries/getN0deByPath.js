import N0de from '../n0deModel';

export async function getN0deByPath(path) {
	let response = null;

	try {
		response = await N0de.findOne({ path }).then(entity => entity.plain());
	} catch (err) {
		console.log('getN0deByPath err', err);
	}

	return response;
}
