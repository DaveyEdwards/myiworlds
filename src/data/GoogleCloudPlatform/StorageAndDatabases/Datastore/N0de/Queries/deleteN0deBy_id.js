import N0de from '../n0deModel';

// eslint-disable-next-line camelcase
export async function deleteN0deBy_id(_id) {
	let response = null;

	try {
		response = await N0de.delete(_id).then((res) => {
			if (!res.success) {
				// eslint-disable-next-line no-console
				console.log('\n', '\n', 'I could not delete that n0de for you, the n0des "_id" did not match anything inside Google Datastore.', '\n', '\n');
			}
			return res;
		});
	} catch (err) {
		console.info('\n', '\n', 'Help me, I have a ERROR. It is in Google Datastores "deleteN0deBy_id" database queries.', '\n', err, '\n');
	}
	return response;
}
