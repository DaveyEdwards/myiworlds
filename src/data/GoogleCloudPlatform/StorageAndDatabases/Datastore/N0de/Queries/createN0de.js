import N0de from '../n0deModel';

export async function createN0de(n0de) {
	let response = null;

	try {
		const entityData = N0de.sanitize(n0de);

		const n0deEntity = new N0de(entityData, entityData._id);

		response = await n0deEntity.save().then(entity => entity.plain());
	} catch (err) {
		console.info('saveN0de err', err);
	}
	return response;
}
