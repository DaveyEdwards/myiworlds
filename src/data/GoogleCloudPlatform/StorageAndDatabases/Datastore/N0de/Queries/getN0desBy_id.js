import N0de from '../n0deModel';

// eslint-disable-next-line camelcase
export async function getN0desBy_id(_ids) {
	let response = null;
	try {
		response = await N0de.get(_ids, null, null, null, { preserveOrder: true });
	} catch (err) {
		return {
			status: 'ERROR',
			errorId: 'getN0desBy_id err',
			err,
		};
	}

	return response.map(entity => entity.plain());
}
