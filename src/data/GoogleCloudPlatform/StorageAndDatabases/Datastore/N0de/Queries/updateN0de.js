import N0de from '../n0deModel';

export async function updateN0de(n0de) {
	let response = null;

	try {
		// eslint-disable-next-line camelcase
		const n0de_id = n0de._id;
		const entityData = N0de.sanitize(n0de);

		response = await N0de.update(n0de_id, entityData).then(entity => entity.plain());
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log('\n', '\n', 'I am so sorry master, I could not find a "n0de" with that "id". Forgive me, but it must not exist.', '\n', '\n');
	}
	return response;
}
