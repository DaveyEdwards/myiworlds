import Person from '../personModel';

// eslint-disable-next-line camelcase
export async function getPersonsBy_id(_ids) {
	let response = null;
	try {
		response = await Person.get(_ids, null, null, null, { preserveOrder: true });
	} catch (err) {
		return {
			status: 'ERROR',
			errorId: 'getPersonsBy_id err',
			err,
		};
	}

	return response.map(entity => entity.plain());
}
