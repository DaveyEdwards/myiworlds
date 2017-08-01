import N0de from '../n0deModel';

export async function editN0de(n0de) {
	let response = null;

	try {
		// eslint-disable-next-line camelcase
		const n0de_id = n0de._id;
		const entityData = N0de.sanitize(n0de);

		response = await N0de.update(n0de_id, entityData).then(entity => entity.plain());
	} catch (err) {
		console.info('editN0de err', err);
	}
	return response;
}
