import Person from '../personModel';

// eslint-disable-next-line camelcase
export async function getPersonBy_id(_id) {
	let response = null;

	try {
		response = await Person.get(_id).then(entity => entity.plain());
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log('\n', '\n', 'I am so sorry master, I could not find a "n0de" with that "id". Forgive me, but it must not exist.', '\n', '\n', 'ERROR: ', err, '\n', '\n');
	}

	return response;
}
