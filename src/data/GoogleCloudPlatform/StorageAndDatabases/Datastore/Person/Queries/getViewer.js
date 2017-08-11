import Person from '../personModel';

// eslint-disable-next-line camelcase
export async function getViewer() {
	let response = null;

	try {
		// TODO: Make this actually get the viewer.
		const _id = 'person000000000000000000000000000001';
		response = await Person.get(_id).then(entity => entity.plain());
	} catch (err) {
		// eslint-disable-next-line no-console
		console.log('\n', '\n', 'I am so sorry master, I could not find a "user" with that "id". Forgive me, but it must not exist.', '\n', '\n', 'ERROR: ', err, '\n', '\n');
	}

	return response;
}
